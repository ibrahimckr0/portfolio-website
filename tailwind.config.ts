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
        primary: '#6366f1',
        secondary: '#4f46e5',
        background: '#0f172a',
        surface: '#1e293b',
        text: '#f8fafc',
        'text-secondary': '#cbd5e1',
        border: '#334155',
      },
    },
  },
  plugins: [],
}

export default config
