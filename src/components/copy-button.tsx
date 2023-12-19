"use client";

import { useState, useEffect } from "react";
import copy from "clipboard-copy";

import { twMerge } from "tailwind-merge";

interface CopyButtonProps {
  textToCopy: string;
  className?: string;
}

const CopyButton = ({ textToCopy, className }: CopyButtonProps) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = async () => {
    try {
      await copy(textToCopy);
      setIsCopied(true);
    } catch (error) {
      console.error("Error copying text: ", error);
    }
  };

  useEffect(() => {
    let timeout: any;
    if (isCopied) {
      timeout = setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    }
    return () => clearTimeout(timeout);
  }, [isCopied]);

  return (
    <button
      className={`h-full w-full rounded-lg bg-primary-blue px-5 py-2 text-xs font-medium text-white ${twMerge(
        className,
      )}`}
      onClick={handleCopyClick}
      disabled={isCopied}
    >
      {isCopied ? "Copied!" : "Copy"}
    </button>
  );
};

export default CopyButton;
