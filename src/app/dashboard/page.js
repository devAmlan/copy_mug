"use client";
import React from "react";
import Templates from "./_components/Templates";
import { CircleArrowRight } from "@/icon";
import Link from "next/link";
import _ from "lodash";
function Dashboard() {
  return (
    <div className="w-full p-5">
      <div className="w-full">
        <h2 className="text-ring text-2xl font-bold">
          Generate your Marketing plan
        </h2>
        <p className="text-primary font-medium">
          Leverage our suite of AI-powered tools designed to help founders
          tackle marketing challenges. Streamline strategy development, optimize
          campaigns, and enhance audience engagement for impactful results and
          business growth.
        </p>
      </div>
      <div className="w-full flex justify-between items-start gap-5 mt-10">
        {_.map(Templates, ({ id, title, description, slug }) => {
          return (
            <Link href={`/dashboard/tools/${slug}`} key={id} className="w-1/2">
              <div className="w-full min-h-40 bg-secondary border border-border rounded-md p-5 cursor-pointer flex flex-col gap-5 hover:scale-105 transition-all ease-in-out">
                <div className="w-full flex justify-between items-center">
                  <h3 className="text-xl text-primary font-bold">{title}</h3>
                  <CircleArrowRight className="text-primary" />
                </div>
                <p className="text-base text-ring">{description}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Dashboard;
