import { withUt } from "uploadthing/tw";
const plugin = require("tailwindcss/plugin");

export default withUt({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: "var(--card)",
        primary: {
          blue: "var(--blue)",
          gray1: "var(--gray1)",
          gray2: "var(--gray2)",
          gray3: "var(--gray3)",
          gray4: "var(--gray4)",
          gray5: "var(--gray5)",
        },
      },
      boxShadow: {
        card: "var(--shadow-card)",
      },
    },
    fontFamily: {
      main: "var(--font-poppins)",
      footer: "var(--font-montserrat)",
    },
    animation: {
      progres: "var(--animate-progres)",
    },
  },
  plugins: [
    plugin(function ({ addUtilities }: { addUtilities: any }) {
      addUtilities({
        ".drag-none": {
          "-webkit-user-drag": "none",
          "-khtml-user-drag": "none",
          "-moz-user-drag": "none",
          "-o-user-drag": "none",
          "user-drag": "none",
        },
      });
    }),
  ],
});
