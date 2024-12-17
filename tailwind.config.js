/** @type {import('tailwindcss').Config} */

const onlyFontSize = {
  //12
  xs: '0.75rem',
  //14
  sm: '0.875rem',
  //16
  base: '1rem',
  //18
  lg: '1.125rem',
  //20
  xl: '1.25rem',
  //24
  '2xl': '1.5rem',
  //30
  '3xl': '1.875rem',
  //36
  '4xl': '2.25rem',
  //48
  '5xl': '3rem',
  //60
  '6xl': '3.75rem',
  //72
  '7xl': '4.5rem',
  //96
  '8xl': '6rem',
  //128
  '9xl': '8rem'
}

for (let i = 4; i < 100; i++) {
  onlyFontSize[i] = `${i / 4}rem`
}

const onlyLineHeight = {
  x: 1,
  xtight: 1.2,
  xsnug: 1.4,
  xrelaxed: 1.8,
  xloose: 2.1
}
const fontSize = {}

Object.keys(onlyLineHeight).forEach((lineHeightKey) => {
  Object.keys(onlyFontSize).forEach((fontSizeKey) => {
    fontSize[`${lineHeightKey}-${fontSizeKey}`] = [onlyFontSize[fontSizeKey], onlyLineHeight[lineHeightKey]]
  })
})

module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        background: '#141430',
        footer: '#1d1d3c',
        // brand colors
        xgray: '#9598B9',

        xcyan: '#7DD5F9',
        xpink: '#E6B1F7',
        xpuple: '#FF6600',

        xgreen: '#6CDF8C',
        xdarkblue: '#0a1161',

        // to be confirmed
        darkblue: '#21213B',

        // Gradient #1
        xlightcyan: '#9EE6FC',
        xlightpink: '#EBB9E7',
        // Gradient #2
        xoffwhite: '#cbf2fe',
        xyellow: '#e1dfa2',

        xwhite: '#FEFEFE',
        'xwhite-op05': '#FEFEFE0D',
        'xwhite-op10': '#FEFEFE1A',
        'xwhite-op20': '#FEFEFE33',
        'xwhite-op30': '#FEFEFE4D',
        'xwhite-op40': '#FEFEFE66',
        'xwhite-op70': '#FEFEFEB3',

        error: '#F53F3F',
        lightblue: '#9598B9',
        modalbg: '#EEEEEE',
        modalbg2: 'rgba(149,152,185,0.1)'
      },
      fontSize,
      lineHeight: onlyLineHeight,
      fontWeight: {
        xextralight: 275,
        xlight: 300,
        light: 400,
        xmedium: 500,
        xextramedium: 600,
        xbold: 700,
        xextrabold: 800
      },
      fontFamily: {
        'poppins-bold': 'Poppins-ExtraBold',
        'poppins-light': 'Poppins-ExtraLight',
        'poppins-medium': 'Poppins-Medium',
        'termina-bold': 'Termina-Bold',
        'termina-light': 'Termina-Light',
        'termina-medium': 'Termina-Medium'
      }
    }
  },
  plugins: []
}
