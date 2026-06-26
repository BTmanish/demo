export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F7F3EA',
        warmWhite: '#FCFAF5',
        forestDeep: '#182019',
        forest: '#2C3A2D',
        sage: '#8B9B88',
        olive: '#7B8266',
        muted: '#4A544C'
      },
      boxShadow: {
        glow: '0 30px 80px rgba(40, 40, 30, 0.12)'
      },
      backgroundImage: {
        'newsletter-texture': 'radial-gradient(circle at top left, rgba(255,255,255,0.12), transparent 42%)'
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: []
};
