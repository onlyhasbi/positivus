import React, { PropsWithChildren } from "react";

function Card({
  children,
  className,
  shadow,
}: PropsWithChildren<Partial<{ shadow: boolean; className: string }>>) {
  return (
    <div
      className={`rounded-3xl ${
        shadow ? "border border-dark shadow-solid-lg" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}

export default Card;
