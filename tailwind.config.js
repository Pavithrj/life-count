/** @type {import("tailwindcss").Config} */

export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            animation: {
                fadeInDown: 'fadeInDown 0.6s ease-out forwards'
            },
            keyframes: {
                fadeInDown: {
                    '0%': {
                        opacity: 0,
                        transform: 'translateY(-20px)'
                    },
                    '100%': {
                        opacity: 1,
                        transform: 'translateY(0)'
                    }
                }
            }
        }
    },
    plugins: []
};