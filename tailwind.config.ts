const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xs': '400px',
      'xlg': '1135px',
      'sm': '640px',
      'md': '868px',
      'lg': '900px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      textColor: {
        'second-text': 'var(--second-text, #374754)',
        'custom-text-color': 'var(--text, #252B42)',
        'primary2': ' #3a37eb', // Add your custom color here
      },
      backgroundColor: {
        'primary2': ' #3a37eb',
        'primary': 'var(--Primary, #2091F9)',
      },
      backgroundImage: {
        'banner-bg': "url('../public/assets/bannerBg.jpeg')",
      },
      colors: {
        hoverColor: "#ffaa17",
        darkRed: "#ea0638",
        Gray4: '#535052',
        Gray5: '#323031',
        blue: {
          'custom': '#084C61',
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-rtl'),
  ],
};
