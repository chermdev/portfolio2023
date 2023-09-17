/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                bgcolor: "rgb(var(--bg-color) / <alpha-value>)",
                bgnavbarcolor: "rgb(var(--bg-navbar-color) / <alpha-value>)",
                fontcolor: "rgb(var(--font-color) / <alpha-value>)",
                cardcolor: "rgb(var(--card-color) / <alpha-value>)",
            },
            keyframes: {
                pulseActive: {
                    '0%': {
                        boxShadow: '0 0 0 0'
                    },
                    '40%': {
                        boxShadow: '0 0 0 2px'
                    },
                    '100%': {
                        boxShadow: '0 0 0 0'
                    }
                },
                pulseActiveNoScale: {
                    '0%': {
                        boxShadow: '0 0 0 0'
                    },
                    '40%': {
                        boxShadow: '0 0 0 2px'
                    },
                    '100%': {
                        boxShadow: '0 0 0 0'
                    }
                },
                slideFromLeft: {
                    '0%': {
                        transform: 'translateX(-40vw)',
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
                slideFromBottom: {
                    '0%': {
                        transform: 'translateY(40vw)',
                    },
                    '100%': {
                        transform: 'translateY(0px)',
                    },
                },
                slideFromRight: {
                    '0%': {
                        transform: 'translateX(40vw)',
                    },
                    '100%': {
                        transform: 'translateX(0px)',
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
        }
    }
}
