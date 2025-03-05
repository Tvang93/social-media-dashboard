/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html", "./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        LimeGreen: "hsl(163, 72%, 41%)",
        BrightRed: "hsl(356, 69%, 56%)",
        Facebook: "hsl(208, 92%, 53%)",
        Twitter: "hsl(203, 89%, 53%)",
        Instagram1: "hsl(37, 97%, 70%)",
        Instagram2: "hsl(329, 70%, 58%)",
        YouTube: "hsl(348, 97%, 39%)",

        DarkModeToggle1: 'hsl(210, 78%, 56%)',
        DarkModeToggle2: 'hsl(146, 68%, 55%)',
        LightModeToggle: 'hsl(230, 22%, 74%)',


        VeryDarkBlueBG: "hsl(230, 17%, 14%)",
        VeryDarkBlueTopBGPattern: "hsl(232, 19%, 15%)",
        DarkDesaturatedBlueCardBG: "hsl(228, 28%, 20%)",
        DesaturatedBlueText: "hsl(228, 34%, 66%)",
        WhiteText: "hsl(0, 0%, 100%)",

        WhiteBG: "hsl(0, 0%, 100%)",
        VeryPaleBlueTopBGPattern: "hsl(225, 100%, 98%)",
        LightGrayishBlueCardBG: "hsl(227, 47%, 96%)",
        DarkGrayishBlueText: "hsl(228, 12%, 44%)",
        VeryDarkBlueText: "hsl(230, 17%, 14%)",
      },
    },
  },
  plugins: [],
};
