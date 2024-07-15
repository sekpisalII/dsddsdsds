const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
        flowbite.content(),
    ],
   
    darkMode: 'class',
    theme: {
        fontFamily: {
            suwannaphum: ['Suwannaphum']
        },
        fontWeight: {
            thin: '100',
            hairline: '100',
            extralight: '200',
            light: '300',
            normal: '400',
            medium: '500',
            semibold: '600',
            bold: '700',
            extrabold: '800',
            'extra-bold': '800',
            black: '900',
          },
          
          extend: {
            keyframes: {
              typing: {
                "0%": {
                  width: "0%",
                  visibility: "hidden"
                },
                "100%": {
                  width: "100%"
                }
              },
              blink: {
                "50%": {
                  borderColor: "transparent"
                },
                "100%": {
                  borderColor: "white"
                }
              }
            },
            animation: {
              typing: "typing 2s steps(20) infinite alternate, blink .7s infinite"
            }
          },
    },
   
    plugins: [
        flowbite.plugin(),
    ],
}