"use client";
import React, { useEffect, useState } from "react";
import _ from "lodash";

import { chatSession } from "../../../../../utils/AiModel";
import Templates from "../../_components/Templates";

import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";

import { CircleArrowLeft } from "@/icon";
import Link from "next/link";

function CreateMarketingPlan(props) {
  const { params } = props;

  const [formData, setFormData] = useState();
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isLoading, setLoading] = useState(false);

  const { toast } = useToast();

  const onShowErrorToast = () => {
    toast({
      variant: "destructive",
      title: "Uh oh! Something went wrong.",
      description: "There was a problem with your request.",
      action: <ToastAction altText="Try again">Try again</ToastAction>,
    });
  };

  useEffect(() => {
    let isFormFilled = _.map(
      _.get(selectedTemplate, "form"),
      ({ name }) =>
        formData?.hasOwnProperty(name) && !_.isEmpty(_.get(formData, name))
    );

    setIsButtonDisabled(!_.every(isFormFilled, (item) => item === true));
  }, [formData]);

  const selectedTemplate = _.find(
    Templates,
    ({ slug }) => slug === params?.templateSlug
  );

  const onUpdateInputField = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const genearteAIcontent = async () => {
    const selectedPrompt = selectedTemplate?.aiPrompt;

    const finalAIPrompt = `${JSON.stringify(formData)} ${selectedPrompt}`;
    setFormData();
    try {
      const result = await chatSession.sendMessage(finalAIPrompt);
      return result.response.text();
    } catch (error) {
      onShowErrorToast();
    }
  };

  const onSubmitHandler = () => {
    setLoading(true);
    genearteAIcontent()
      .then((aiResponse) => {
        setLoading(false);
        console.log(aiResponse);
      })
      .catch(() => onShowErrorToast());
  };

  return (
    <div className="w-full p-5">
      <Link
        href={"/dashboard"}
        className="w-full my-5 flex justify-start items-start gap-1"
      >
        <CircleArrowLeft className="text-primary cursor-pointer" />
        <span className="text-xl font-semibold">Back</span>
      </Link>

      <div className="w-full flex justify-start items-start gap-5">
        <div className="p-5 w-3/5 rounded-lg bg-secondary">
          <h3 className="text-xl text-primary font-bold">
            {selectedTemplate?.title}
          </h3>
          <p className="text-base text-gray-800">
            {selectedTemplate?.description}
          </p>
          <div className="flex justify-start items-start gap-2 flex-col my-10">
            {_.map(
              selectedTemplate?.form,
              ({ id, label, field: Field, name, required, placeholder }) => {
                return (
                  <div
                    className="w-full flex justify-start items-start flex-col gap-1"
                    key={id}
                  >
                    <label className="text-black font-semibold text-sm">
                      {label}
                    </label>
                    <Field
                      placeholder={placeholder}
                      name={name}
                      required={required}
                      className={`w-full p-2 outline-none border border-border rounded-md text-sm ${
                        _.isEqual(Field, "textarea") && "h-20 resize-none"
                      }`}
                      value={
                        !_.isUndefined(formData?.[name]) ? formData[name] : ""
                      }
                      onChange={onUpdateInputField}
                    />
                  </div>
                );
              }
            )}
            <Button
              className={"w-full mt-2 p-3 text-base cursor-pointer"}
              onClick={onSubmitHandler}
              disabled={isButtonDisabled}
            >
              {isLoading ? "Generating..." : "Generate"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateMarketingPlan;
