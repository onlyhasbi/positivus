import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      current: "currentColor",
    },
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: "#B9FF66",
        dark: "#191A23",
        silver: "#F3F3F3",
        black: "#000000",
      },
      boxShadow: {
        "solid-lg": "0px 5px 0px rgba(0, 0, 0, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
