import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "border-gray-600",
    "border-red-500",
    "border-blue-500",
    "text-gray-600",
    "text-red-500",
    "text-red-600",
    "text-blue-500",
    "border-blue-1",
    "text-blue-1",
    "opacity-100",
    "opacity-0",
    "text-green-600",
    "text-green-500",
    "text-green-700",
    "font-bold",
    "text-gray-900",
    "font-normal",
    "text-yellow-500",
    "border-r",
    "border-r-gray",
    "border-stone-500",
    "border-stone-600",
    "border-stone-700",
    "border-stone-800",
    "border-stone-900",
    "",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      transitionTimingFunction: {
        "navbar-bezier": "cubic-bezier(.4, 0, .2, 1)",
        bezier0021: "cubic-bezier(0, 0, .2, 1)",
        ease: "ease",
      },
      flex: {
        navbar: "1 1 0",
        "1-auto": "1 1 auto",
        "0-auto": "0 0 auto",
        "51": "5 1",
        "20": "2 0",
        "30": "3 0",
      },
      screens: {
        navbar: "1024px",
        screen195: "48.75rem",
        screen120: "30rem",
        "screen260.5": "65.125rem",
      },
      minHeight: {
        "10r": "10rem",
      },
      height: {
        "calc-1": "calc(24px + 2.25rem)",
        "111": "calc(100vh - 30rem)",
        "calc-que-box": "calc(48px + 4rem)",
        "54": "216px",
        "15": "3.75rem",
        "13": "52px",
        mainNavHgt: "4.05rem",
        "30r": "30rem",
      },
      maxHeight: {
        "calc-1": "calc(100dvh - 61px)",
        "calc-6": "calc(100vh - 24px)",
      },
      width: {
        "calc-8": "calc(100% - 32px)",
        "cacl-11": "cacl(100% - 44px)",
        "90": "360px",
        "calc-12": "calc(100% - 3rem)",
        "calc-33": "calc(100% - 8.25rem)",
        "calc-17": "calc(100% - 4.25rem)",
        "70": "280px",
        "30": "120px",
        "50": "150px",
        "30r": "30rem",
        "50r": "50rem",
        "40r": "40rem",
        "calc-24r": "calc(100% - 24rem)",
        "45p": "45%",
        "70r": "70rem",
      },
      minWidth: {
        auto: "auto",
        unset: "unset",
        "28": "112px",
        "30p": "30%",
        "30r": "30rem",
        "20r": "20rem",
      },
      maxWidth: {
        "50p": "50%",
        "calc-3": "calc(100% - 24px)",
        "calc-1": "calc(100vw - 8px)",
        "109": "436px",
        unset: "unset",
        "625r": "62.5rem",
        "70": "280px",
        "50r": "50rem",
        "80r": "80rem",
        "70r": "80rem",
        "47.5": "11.875rem",
      },
      backgroundSize: {
        "profile-photo": "32px 32px",
      },
      borderRadius: {
        "2": "0.5rem",
        "1": "4px",
        "0": "0",
        "7": "28px",
        "7.5": "30px",
        "25": "100px",
        "3": "12px",
        "4": "16px",
        "5": "20px",
        inherit: "inherit",
      },
      borderWidth: {
        "0625": ".0625rem",
      },
      borderColor: {
        gray: "rgb(128,134,139)",
        "blue-1": "rgb(26, 115, 232)",
        "gray-1": "rgb(218,220,224)",
        // 'red': 'red'
      },
      willChange: {
        "t-o": "transform, opacity",
        "t-o-c": "transform, opacity, color",
        opacity: "opacity",
      },
      boxShadow: {
        custom:
          "0 1px 3px 0 rgba(60,64,67,.3),0 4px 8px 3px rgba(60,64,67,.15)",
        "profile-options":
          "0 4px 8px 3px rgba(0,0,0,.15),0 1px 3px rgba(0,0,0,.3)",
        "test-box":
          "0 1px 2px 0 rgba(60,64,67,.3),0 2px 6px 2px rgba(60,64,67,.15)",
      },
      fontSize: {
        "875": ".875rem",
        "1375": "1.375rem",
      },
      letterSpacing: {
        sm: ".01785714em",
        "very-sm": ".00625em",
        "just-sm": ".0142857143em",
      },
      textColor: {
        "gray-1": "#3c4043",
        "gray-light": "rgb(95,99,104)",
        "gray-2": "rgb(60,64,67)",
        "gray-3": "#5f6368",
        "gray-4": "#444746",
        "black-1": "rgba(0,0,0,.38)",
        "black-2": "#1f1f1f",
        "black-3": "rgba(0,0,0,.549)",
        "black-4": "rgb(32,33,36)",
        "blue-1": "rgb(26, 115, 232)",
        "violet-1": "rgb(161, 108, 235)",
      },
      caretColor: {
        "blue-1": "rgb(26,115,232)",
      },
      lineHeight: {
        "875": ".875rem",
        "0": "0",
        "4.5": "18px",
      },
      transitionProperty: {
        background: "background",
      },
      backgroundColor: {
        "gray-3": "#5f6368",
        "white-1": "#e9eef6",
        "white-2": "#f8fafd",
        "white-3": "#f0f4f9",
        "google-bw": "#f0f4f9",
      },
      fill: {
        "black-1": "rgba(0,0,0,.38)",
      },
      zIndex: {
        "1": "1",
        "2": "2",
      },
      padding: {
        "2.5": "10px",
      },
      margin: {
        "18": "4.5rem",
      },
    },
  },
  plugins: [
    function ({
      addUtilities,
    }: {
      addUtilities: (utilities: Record<string, any>, options?: any) => void;
    }) {
      const newUtilities = {
        ".color-scheme-light": {
          colorScheme: "light",
        },
        ".color-scheme-dark": {
          colorScheme: "dark",
        },
        ".scroll-thin": {
          scrollbarWidth: "thin",
        },
        ".scroll-color": {
          scrollbarColor: "#c4c7c5 transparent",
        },
        ".backface-visibility-h": {
          backfaceVisibility: "hidden",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
export default config;
