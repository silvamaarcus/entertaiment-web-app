import { nextui } from "@nextui-org/theme";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(avatar|button|card|image|input|scroll-shadow|ripple|spinner).js"
  ],
  theme: {
    extend: {
      colors: {
        darkBackground: "var(--darkBlue)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--greyish-blue)",
      },
    },
  },
  plugins: [nextui()],
};
export default config;
