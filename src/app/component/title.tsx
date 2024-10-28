import React from "react";

export type TextBackground = "primary" | "silver" | "transparent";

type Props = {
  label: string;
  description?: string;
  textSize?: "sm" | "md" | "lg";
  textBackground?: TextBackground;
  className?: string;
};

function Title({
  label,
  description,
  textSize = "md",
  textBackground = "primary",
  className,
}: Props) {
  const textSizeOption = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-3xl",
  };

  return (
    <div className={`flex gap-10 ${className}`}>
      <h3
        className={`flex items-center font-medium bg-${textBackground} rounded-lg px-2 ${
          textSizeOption[textSize as keyof typeof textSizeOption]
        }`}
      >
        {label}
      </h3>
      {description ? (
        <p className="max-w-[450px] text-sm">{description}</p>
      ) : null}
    </div>
  );
}

export default Title;
