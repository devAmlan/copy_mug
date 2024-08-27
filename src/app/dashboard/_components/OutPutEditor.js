"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import useCopyToClipboard from "@/app/(hooks)/useCopyToClipboard";
import { Copy } from "@/icon";

function OutPutEditor(props) {
  const { output, onOpenChange, open } = props;
  const [isCopied, copyToClipboard] = useCopyToClipboard();

  const handleCopy = () => {
    copyToClipboard(output);
  };

  return (
    <Sheet open={open} defaultOpen={false} onOpenChange={onOpenChange}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle
            className={"w-full flex justify-start items-center gap-5"}
          >
            <p>Here is your Result!</p>
            <Copy
              width={20}
              height={20}
              className=" text-white cursor-pointer"
              onClick={handleCopy}
            />
            {isCopied && <span className="text-xs">Copied!</span>}
          </SheetTitle>
          <SheetDescription className="w-full text-black h-[500px] overflow-y-scroll relative">
            <ReactMarkdown>{output}</ReactMarkdown>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export default OutPutEditor;
