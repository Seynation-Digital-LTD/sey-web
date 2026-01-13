import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
        silk: ["Silkscreen", "sans-serif"],
        mina: ["var(--font-mina)", "sans-serif"],
      },
      screens: {

        smd: "520px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        laptop: "1272px",
        monitor: "1346px",
        // "1xl":"1272px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        primaryOne: "#800000",
        primaryTwo: "#460000",
        primaryThree: "#DA0000",
        primaryFour: "#54180F",
        primaryFive: "#740000",
        primarySix: "#5B0000",
        primarySeven: "#1A0000",
        secondaryOne: "#982B1C",
        secondaryTwo: "#8A2719",
        secondaryThree: "#BA3521",
        secondaryFour: "#4E0000",
        secondaryFive: "#6C1F14",
        neutralOne: "#DAD4B5",
        neutralTwo: "#9B9781",
        neutralThree: "#35342C",
        neutralFour: " #787564",
        neutralFive: "#D9D3B3",
        neutralSix: "#73705F",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
