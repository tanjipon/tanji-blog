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
            50: '#f0f9ff',
            100: '#e0f2fe',
            200: '#bae6fd',
            300: '#7dd3fc',
            400: '#38bdf8',
            500: '#0ea5e9',
            600: '#0284c7',
            700: '#0369a1',
            800: '#075985',
            900: '#0c4a6e',
            950: '#082f49',
          },
          secondary: {
            50: '#f5f3ff',
            100: '#ede9fe',
            200: '#ddd6fe',
            300: '#c4b5fd',
            400: '#a78bfa',
            500: '#8b5cf6',
            600: '#7c3aed',
            700: '#6d28d9',
            800: '#5b21b6',
            900: '#4c1d95',
            950: '#2e1065',
          },
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
                backgroundColor: theme('colors.gray.800'),
              },
              'pre code': {
                backgroundColor: 'transparent',
                borderRadius: 0,
                padding: 0,
                color: theme('colors.gray.100'),
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
                color: theme('colors.primary.600'),
              },
              'ol > li::marker': {
                color: theme('colors.primary.600'),
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
              color: theme('colors.gray.300'),
              '[class~="lead"]': { color: theme('colors.gray.400') },
              a: { color: theme('colors.primary.500') },
              strong: { color: theme('colors.gray.100') },
              h1: { color: theme('colors.gray.100') },
              h2: { color: theme('colors.gray.100') },
              h3: { color: theme('colors.gray.100') },
              h4: { color: theme('colors.gray.100') },
              code: {
                color: theme('colors.secondary.400'),
                backgroundColor: theme('colors.gray.800'),
              },
              blockquote: {
                color: theme('colors.gray.400'),
                borderLeftColor: theme('colors.gray.700'),
              },
              hr: { borderColor: theme('colors.gray.700') },
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
  