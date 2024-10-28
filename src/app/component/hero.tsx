"use client";

import Image from "next/image";
import React from "react";

function Hero() {
  const logos = [
    { name: "amazon", width: 124 },
    { name: "dribbble", width: 126 },
    { name: "hubspot", width: 128 },
    { name: "notion", width: 145 },
    { name: "netflix", width: 125 },
    { name: "zoom", width: 110 },
  ];
  return (
    <>
      <div className="flex items-center gap-24">
        <div className="flex flex-col">
          <h3 className="text-5xl font-medium">
            Navigating the digital landscape for success
          </h3>
          <Image
            className="block md:hidden"
            src="./assets/logo/hero-illustration.svg"
            alt="hero-illustration"
            width={500}
            height={100}
          />
          <p className="my-8 text-balance">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>
          <button
            onClick={() => alert("Book")}
            className="w-full md:w-48 block bg-dark rounded-lg  h-14 text-silver"
          >
            Book a consultation
          </button>
        </div>
        <Image
          className="hidden md:block"
          src="./assets/logo/hero-illustration.svg"
          alt="hero-illustration"
          width={500}
          height={100}
        />
      </div>
      <div className="flex flex-wrap items-center justify-evenly md:justify-between mt-12 mb-20">
        {logos.map(({ name, width }) => (
          <Image
            key={name}
            className="grayscale my-2"
            src={`./assets/logo/${name}-logo.svg`}
            width={width}
            height={100}
            alt={`logo-${name}`}
          />
        ))}
      </div>
    </>
  );
}

export default Hero;
