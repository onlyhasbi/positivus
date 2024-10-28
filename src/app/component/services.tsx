"use client";

import React from "react";
import Title, { TextBackground } from "./title";
import Card from "./card";
import Image from "next/image";

function Services() {
  const serviceList = [
    {
      firstLine: "Search engine",
      secondLine: "optimization",
      illustration: "seo",
      background: "silver",
      textBg: "primary",
      link: "#1",
      arrow: "black-green",
    },
    {
      firstLine: "Pay-per-click",
      secondLine: "advertising",
      illustration: "payperclick",
      background: "primary",
      textBg: "silver",
      link: "#2",
      arrow: "black-green",
    },
    {
      firstLine: "Social Media",
      secondLine: "Marketing",
      illustration: "social",
      background: "dark",
      textBg: "silver",
      link: "#3",
      arrow: "black-white",
    },
    {
      firstLine: "Email",
      secondLine: "Marketing",
      illustration: "email",
      background: "silver",
      textBg: "primary",
      link: "#4",
      arrow: "black-green",
    },
    {
      firstLine: "Content",
      secondLine: "Creation",
      illustration: "content",
      background: "primary",
      textBg: "silver",
      link: "#5",
      arrow: "black-green",
    },
    {
      firstLine: "Analitycs and",
      secondLine: "Tracking",
      illustration: "tracking",
      background: "dark",
      textBg: "primary",
      link: "#6",
      arrow: "black-white",
    },
  ];

  const options = {
    primary: "bg-primary",
    silver: "bg-silver",
    dark: "bg-dark",
  };

  return (
    <>
      <Title
        label="Services"
        description="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
        className="flex-col items-center text-center md:flex-row md:text-left"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-24">
        {serviceList.map(
          (
            {
              firstLine,
              secondLine,
              link,
              illustration,
              background,
              textBg,
              arrow,
            },
            index
          ) => (
            <Card
              key={illustration}
              className={`${
                options[background as keyof typeof options]
              } flex justify-between items-center p-9`}
              shadow
            >
              <div className="w-48 h-44 flex flex-col justify-between">
                <div>
                  <Title
                    label={firstLine}
                    textSize="sm"
                    textBackground={textBg as TextBackground}
                  />
                  <Title
                    label={secondLine}
                    textSize="sm"
                    textBackground={textBg as TextBackground}
                  />
                </div>
                <a className="flex items-center gap-4" href={link}>
                  <Image
                    src={`./assets/arrow/${arrow}.svg`}
                    alt={`arrow-icon-${index}`}
                    height={100}
                    width={35}
                  />
                  <p style={{ color: background === "dark" ? "#fff" : "" }}>
                    Learn more
                  </p>
                </a>
              </div>
              <Image
                src={`./assets/illustration/${illustration}.svg`}
                width={180}
                height={100}
                alt={`${illustration}-illustration`}
              />
            </Card>
          )
        )}
      </div>
      <Card className="relative bg-silver flex justify-betweenp p-14 mt-[110px]">
        <div className="max-w-[450px] flex flex-col gap-4">
          <Title
            textBackground="transparent"
            label="Let’s make things happen"
            textSize="sm"
          />
          <p className="text-sm">
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          <button
            onClick={() => alert("Book")}
            className="w-full md:w-[275px] block bg-dark rounded-lg  h-14 text-silver"
          >
            Get your free proposal
          </button>
        </div>
        <Image
          className="absolute right-0 top-1/2 transform -translate-y-1/2"
          src="./assets/illustration/make-things.svg"
          width={400}
          height={100}
          alt="makethings-illustration"
        />
      </Card>
    </>
  );
}

export default Services;
