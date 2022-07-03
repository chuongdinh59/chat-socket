// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Configure your color palette here
        "bg-main": "#242526",
        "bg-search": "hsl(210deg, 3%, 25%)",
        "text-primary": "#E4E6EB",
        "active-message": "rgba(45, 136, 255, 0.1)",
        transparent: "transparent",
      },
    },
  },
  plugins: [],
};
