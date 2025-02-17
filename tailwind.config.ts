import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gray999: '#999999',
        gray666: '#666666',
        gray333: '#333333',
        purple: '#7C4EE4',
        bodyColor:'#f3f3f3',
        grayBorder:'#DBDBDB',
        
      },
      fontFamily: {
        "raleway": "var(--font-raleway)", 
        "roboto": "var(--font-roboto)", 
      },
      screens: {
        'desktop': '1440px',
        'tab': '685px',
        'desktoplg': '1137'
      },
    },
  },
  plugins: [],
} satisfies Config;
