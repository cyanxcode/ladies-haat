import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      gridTemplateColumns: {
      'auto-fill-200': 'repeat(auto-fill, minmax(200px, 1fr))',
      'auto-fit-200': 'repeat(auto-fit, minmax(200px, 1fr))',
    },
    },
  },
  plugins: [],
};
export default config;
