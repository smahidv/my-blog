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
        bodyColor:'#FAFAFA',
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
      borderRadius:{
        DEFAULT: '11.17px',
        'sm': '5.59px',
      }
      
    },
  },
  plugins: [],
} satisfies Config;
