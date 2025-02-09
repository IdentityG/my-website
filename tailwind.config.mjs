/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4A5568', // Steel Gray
          light: '#CBD5E0',   // Metallic Silver
          dark: '#1A202C',    // Charcoal Black
        },
        secondary: '#2B6CB0', // Industrial Blue
        accent: {
          DEFAULT: '#DD6B20',  // Safety Orange
          green: '#38A169',    // Industrial Green
        },
        background: {
          light: '#EDF2F7',    // Light Gray
          white: '#FFFFFF',    // White
        },
      },
    },
  },
  plugins: [],
};
