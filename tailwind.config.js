/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {},
  variants: {},
  plugins: []
}

module.exports = {
  theme: {
    extend: {
      colors: {
        // Used by me
        // default: 'var(--color-default)',
        // 'default-variant': 'var(--color-default-variant)',

        border: 'var(--color-border)',
        'border-variant': 'var(--color-border-variant)',

        // 'gradient-one': '--color-gradient-one',
        // 'gradient-two': '--color-gradient-two',

        /* Used by common themes
         *
         * Primary is the color that is gonna be used as background
         * Variant is used when hovering or state change
         * On is used mainly for text on a primary property
         */
        primary: 'var(--color-primary)',
        'primary-variant': 'var(--color-primary-variant)',
        'on-primary': 'var(--color-on-primary)',

        secondary: 'var(--color-secondary)',
        'secondary-variant': 'var(--color-secondary-variant)',
        'on-secondary': 'var(--color-on-secondary)',

        background: 'var(--color-background)',
        'on-background': 'var(--color-on-background)',

        surface: 'var(--color-surface)',
        'on-surface': 'var(--color-on-surface)',

        error: 'var(--color-error)',
        'on-error': 'var(--color-on-error)',

        success: 'var(--color-success)',
        'on-success': 'var(--color-on-success)'
      },

      inset: {},
      // Width and height
      spacing: {
        'fit-content': 'fit-content',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',

        '2/12': '16.666667%'
      },

      maxHeight: {
        // '0': '0px',
        // '1/4': '25%',
        // '1/2': '50%',
        // '3/4': '75%'
      },

      minHeight: {
        // '0': '0px',
        // '1/4': '25%',
        // '1/2': '50%',
        // '3/4': '75%'
      }
    }
  },
  // Recommended variant order
  // ['responsive', 'group-hover', 'focus-within', 'first', 'last', 'odd', 'even', 'hover', 'focus', 'active', 'visited', 'disabled']

  // Every variant possible
  // variants: ['responsive', 'group-hover', 'focus-within', 'first', 'last', 'odd', 'even', 'hover', 'focus', 'active', 'visited', 'disabled'],
  variants: {
    // textColor: ['responsive', 'group-hover', 'hover', 'focus']
  },

  plugins: [
    // ...
    require('tailwindcss-grid')({
      grids: [2, 3, 5, 6, 8, 10, 12],
      gaps: {
        0: '0',
        4: '1rem',
        8: '2rem',
        '4-x': '1rem',
        '4-y': '1rem'
      },
      autoMinWidths: {
        '2': '0.5rem',
        '4': '1rem',
        '8': '2rem',
        '16': '4rem',
        '24': '6rem'
      },
      variants: ['responsive']
    })
  ]
}
