/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: '440px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },

    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      
      
        transparent: 'transparent',
        
        
        'light-orange': 'FFF5EB',
        'white': '#ffffff',
        'purple': '#110808',
        'grey': '#d9d9d9',
        'red': '#920606',
        'tahiti': '#FCE2BB',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#dcae53',
        
      },
       backgroundImage: {
  
        custom: "url('../public/chair.png')",
        youth: "url('../../public/youthworship.png')",
        teen: "url('../../public/teen.png')",
        family: "url('../../public/family.png')",
        women: "url('../../public/women.png')",
  
  
  
      
      },
  
    },
  },
  plugins: [],
};
