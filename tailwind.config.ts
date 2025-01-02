import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/theme";
import tailwindAnimation from "tailwindcss-animate";
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./src/stories/**/*.{js,ts,jsx,tsx,mdx}",
    "./stories/**/*.{js,ts,jsx,tsx,mdx}",
    "./.storybook/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        "smooth-bounce": "bounce 1s 3 ease-in-out",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui(), tailwindAnimation],
} satisfies Config;
