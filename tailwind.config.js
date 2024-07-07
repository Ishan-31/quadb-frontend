/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bilagike: ["Bilagike"],
      },
      screens: {
        xs: "400px",
      },
      backgroundImage: {
        "custom-bg":
          "url('/public/Assets/Home Page Assets/Body/Background leaves+Texture.png')",
      },
    },
  },
  plugins: [],
};
