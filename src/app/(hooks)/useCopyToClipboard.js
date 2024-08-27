import { useState } from "react";

function useCopyToClipboard() {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async (text) => {
    try {
      if (navigator && navigator.clipboard) {
        await navigator.clipboard.writeText(text);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      } else {
        throw new Error("Clipboard not supported");
      }
    } catch (error) {
      console.error("Failed to copy text to clipboard:", error);
      setIsCopied(false);
    }
  };

  return [isCopied, copyToClipboard];
}

export default useCopyToClipboard;
