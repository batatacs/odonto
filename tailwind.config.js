/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                serif: ['Playfair Display', 'serif'], // Fonte elegante para títulos
                sans: ['Lato', 'sans-serif'], // Fonte limpa para textos
            },
            colors: {
                amber: {
                    500: '#f59e0b', // O nosso dourado principal
                }
            }
        },
    },
    plugins: [],
}