module.exports = {
  content: [
    "./layouts/**/*.html",
    "./content/**/*.{html,md}",
  ],
  safelist: [
    'code-block-wrapper',
    'code-toolbar',
    'code-language',
    'code-copy-btn',
    'copy-icon',
    'check-icon',
    'hidden',
    'has-line-numbers',
    'line-numbers'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#e0efff',
          200: '#bddcff',
          300: '#8ac2ff',
          400: '#5aa3ff',
          500: '#3b82f6', // A vibrant blue
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        secondary: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7', // A lighter purple
          600: '#9333ea',
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#581c87',
          950: '#3b0764',
        },
        accent: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6', // Teal accent
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
          950: '#042f2e',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        }
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            code: {
              color: theme('colors.secondary.700'),
              backgroundColor: theme('colors.secondary.100'),
              borderRadius: theme('borderRadius.md'),
              padding: `${theme('spacing.1')} ${theme('spacing.1.5')}`,
              wordBreak: 'break-word',
            },
            pre: {
              borderRadius: theme('borderRadius.lg'),
              padding: theme('spacing.4'),
              overflowX: 'auto',
              backgroundColor: theme('colors.neutral.800'),
            },
            'pre code': {
              backgroundColor: 'transparent',
              borderRadius: 0,
              padding: 0,
              color: theme('colors.neutral.100'),
            },
            img: {
              borderRadius: theme('borderRadius.lg'),
            },
            'blockquote p:first-of-type::before': {
              content: '""',
            },
            'blockquote p:last-of-type::after': {
              content: '""',
            },
            h1: {
              fontSize: '1.875rem',
              marginTop: '2rem',
              marginBottom: '1rem',
            },
            h2: {
              fontSize: '1.5rem',
              marginTop: '1.75rem',
              marginBottom: '0.75rem',
            },
            h3: {
              fontSize: '1.25rem',
              marginTop: '1.5rem',
              marginBottom: '0.625rem',
            },
            'ul > li::marker': {
              color: theme('colors.primary.500'),
            },
            'ol > li::marker': {
              color: theme('colors.primary.500'),
            },
            // Better mobile spacing
            'figure, img, video, .table-wrapper': {
              margin: '1.5rem 0',
            },
            '@media (max-width: 640px)': {
              h1: {
                fontSize: '1.75rem',
              },
              h2: {
                fontSize: '1.375rem',
              },
              h3: {
                fontSize: '1.25rem',
              },
              p: {
                marginTop: '1rem',
                marginBottom: '1rem',
              },
              'ul, ol': {
                paddingLeft: '1.25rem',
              },
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.neutral.300'),
            '[class~="lead"]': { color: theme('colors.neutral.400') },
            a: { color: theme('colors.primary.400') },
            strong: { color: theme('colors.neutral.100') },
            h1: { color: theme('colors.neutral.100') },
            h2: { color: theme('colors.neutral.100') },
            h3: { color: theme('colors.neutral.100') },
            h4: { color: theme('colors.neutral.100') },
            code: {
              color: theme('colors.secondary.400'),
              backgroundColor: theme('colors.neutral.800'),
            },
            blockquote: {
              color: theme('colors.neutral.400'),
              borderLeftColor: theme('colors.neutral.700'),
            },
            hr: { borderColor: theme('colors.neutral.700') },
            'ul > li::marker': {
              color: theme('colors.primary.400'),
            },
            'ol > li::marker': {
              color: theme('colors.primary.400'),
            },
          },
        },
      }),
      // Add special reading mode utilities
      spacing: {
        'reading': '65ch', // Optimal line length for readability
      },
      maxWidth: {
        'prose-mobile': '95%', // Narrower content area for mobile
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
  variants: {
    extend: {
      typography: ['dark'],
    },
  },
}