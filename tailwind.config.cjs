/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            keyframes: {
                slideFromLeft: {
                    '0%': {
                        transform: 'translateX(-30vw)',
                    },
                    '100%': {
                        transform: 'translateX(0px)',
                    },
                },
                easeIn: {
                    '0%': {
                        opacity: 0
                    },
                    '100%': {
                        opacity: 100,
                    },
                },
                wiggle: {
                    '0%, 100%': { transform: 'rotate(-3deg)' },
                    '50%': { transform: 'rotate(3deg)' },
                }
            }
        },
    },
    plugins: [
        require('flowbite/plugin')
    ]
}
