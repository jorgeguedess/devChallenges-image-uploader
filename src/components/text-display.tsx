import { ReactNode } from "react";

import { twMerge } from "tailwind-merge";

interface TextDisplayProps {
  children: ReactNode;
  className?: string;
}

const TextDisplay = ({ children, className }: TextDisplayProps) => {
  return (
    <p
      className={`max-w-[75%] overflow-hidden text-ellipsis whitespace-nowrap text-[0.625rem] font-medium tracking-[-0.28px] text-primary-gray2 ${twMerge(
        className,
      )}`}
    >
      {children}
    </p>
  );
};

export default TextDisplay;
