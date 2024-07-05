/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        // 3 thiết bị : desktop , mobile (xs) , tablet (lg)
        // desktop > 1024px , 640px  < tablet < 1024px , mobile < 640px

        lg: { max: '1024px', min: '640px' },
        xs: { max: '639px' },
      },
    },
  },
  plugins: [],
};
