"use client";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  const navigation = [
    {
      label: "About Us",
      path: "/about",
    },
    {
      label: "Services",
      path: "/services",
    },
    {
      label: "Use Cases",
      path: "/usecases",
    },
    {
      label: "Pricing",
      path: "/pricing",
    },
    {
      label: "Blog",
      path: "/blog",
    },
  ];

  return (
    <div className="flex items-center justify-between pt-[30px] pb-[40px]">
      <div className="flex gap-3">
        <Image src="./assets/logo/logo.svg" alt="logo" width={150} height={100} />
      </div>
      <div className="flex gap-10 items-center">
        {navigation.map(({ label, path }) => (
          <div key={path} className="cursor-pointer hover:font-medium">
            {label}
          </div>
        ))}
        <button
          className="w-[160px] h-12 rounded-lg border border-black"
          onClick={() => alert("request")}
        >
          Request a quote
        </button>
      </div>
    </div>
  );
};

export default Navbar;
