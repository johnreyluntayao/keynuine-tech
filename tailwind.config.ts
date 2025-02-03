import { heroui } from "@heroui/theme";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/components/navbar.js",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          "50": "#ecfdff",
          "100": "#d0f6fd",
          "200": "#a6edfb",
          "300": "#69def7",
          "400": "#1ec3ea",
          "500": "#09a8d1",
          "600": "#0b85af",
          "700": "#106c8e",
          "800": "#175873",
          "900": "#174962",
          "950": "#093043",
        },
        darkblue: {
          "50": "#f1fafa",
          "100": "#dbeff2",
          "200": "#bbe0e6",
          "300": "#8ccad4",
          "400": "#5daebd",
          "500": "#3a8fa0",
          "600": "#337587",
          "700": "#2f5f6f",
          "800": "#2d505d",
          "900": "#2a444f",
          "950": "#172b35",
        },
      },

      spacing: {
        "mobile-margin": "1rem",
        "tablet-margin": "60px",
        "laptop-margin": "120px",
      },
    },

  },
  plugins: [heroui()],
} satisfies Config;
