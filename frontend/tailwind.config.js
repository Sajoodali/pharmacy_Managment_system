/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#0F766E', // Medical Teal
                    light: '#2DD4BF',   // 400
                    dark: '#115E59',    // 800
                },
                secondary: '#F3F4F6', // Gray 100
                alert: '#EF4444',     // Alert Red
                black: '#000000',
                white: '#ffffff'
            },
        },
    },
    plugins: [],
}