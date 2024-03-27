import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        primary: ["var(--font-roboto-serif)"],
        secondary: ["var(--font-pacifico)"],
      },
      colors: {
        "primary-coal": "#333333",
        "primary-gray": "#F2F2F2",
        "primary-red": "#FF4136",
        "primary-white": "#FFFFFF",
        "primary-orange": "#FF851B",
        "primary-cream": "#FFF8DC",
        "primary-green": "#2ECC40",
      },
    },
  },
  plugins: [],
};
export default config;
