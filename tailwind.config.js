/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        light: {
          primary: '#3F5F90',
          secondary: '#555F71',
          'surface-container': '#EDEDF4',
          'on-primary-container': '#001B3D',
          'on-surface-variant': '#49454F',
        },
      },
      fontSize: {
        'display-large': [
          '57px',
          {
            lineHeight: '64px',
            letterSpacing: '-0.25px',
            fontWeight: '400',
          },
        ],
        'display-medium': [
          '45px',
          {
            lineHeight: '52px',
            letterSpacing: '0px',
            fontWeight: '400',
          },
        ],
        'display-small': [
          '36px',
          {
            lineHeight: '44px',
            letterSpacing: '0px',
            fontWeight: '400',
          },
        ],
        'headline-large': [
          '32px',
          {
            lineHeight: '40px',
            letterSpacing: '0px',
            fontWeight: '400',
          },
        ],
        'headline-medium': [
          '28px',
          {
            lineHeight: '36px',
            letterSpacing: '0px',
            fontWeight: '400',
          },
        ],
        'headline-small': [
          '24px',
          {
            lineHeight: '32px',
            letterSpacing: '0px',
            fontWeight: '400',
          },
        ],
        'title-large': [
          '22px',
          {
            lineHeight: '28px',
            letterSpacing: '0px',
            fontWeight: '400',
          },
        ],
        'title-medium': [
          '16px',
          {
            lineHeight: '24px',
            letterSpacing: '0px',
            fontWeight: '500',
          },
        ],
        'title-small': [
          '14px',
          {
            lineHeight: '20px',
            letterSpacing: '0.1px',
            fontWeight: '500',
          },
        ],
        'body-large': [
          '16px',
          {
            lineHeight: '24px',
            letterSpacing: '0.5px',
            fontWeight: '400',
          },
        ],
        'body-medium': [
          '14px',
          {
            lineHeight: '20px',
            letterSpacing: '0.25px',
            fontWeight: '400',
          },
        ],
        'body-small': [
          '12px',
          {
            lineHeight: '16px',
            letterSpacing: '0.4px',
            fontWeight: '400',
          },
        ],
        'label-large': [
          '14px',
          {
            lineHeight: '20px',
            letterSpacing: '0.1px',
            fontWeight: '500',
          },
        ],
        'label-medium': [
          '12px',
          {
            lineHeight: '16px',
            letterSpacing: '0.5px',
            fontWeight: '500',
          },
        ],
        'label-small': [
          '11px',
          {
            lineHeight: '16px',
            letterSpacing: '0.5px',
            fontWeight: '500',
          },
        ],
        'label-large-prominent': [
          '14px',
          {
            lineHeight: '20px',
            letterSpacing: '0.1px',
            fontWeight: '600',
          },
        ],
        'label-medium-prominent': [
          '12px',
          {
            lineHeight: '16px',
            letterSpacing: '0.5px',
            fontWeight: '600',
          },
        ],
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
