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
                slideFromTop: {
                    '0%': {
                        transform: 'translateY(-40vw)',
                    },
                    '100%': {
                        transform: 'translateY(0px)',
                    },
                },
                wiggle: {
                    '0%, 100%': { transform: 'rotate(-3deg)' },
                    '50%': { transform: 'rotate(3deg)' },
                },
                easeChange: {
                    '0%,100%': {
                        opacity: 0
                    },
                    '10%,90%': {
                        opacity: 100
                    }
                }
            }
        },
    },
    plugins: [
        require('flowbite/plugin')
    ]
}
