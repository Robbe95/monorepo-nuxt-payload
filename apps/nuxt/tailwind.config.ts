import containerQueries from '@tailwindcss/container-queries'
import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'
import PluginCreator from 'tailwindcss/plugin'

export default {
  content: [
    './index.html',
    './layers/**/*.{vue,ts}',
    './app/**/*.{vue,ts}',
    './node_modules/@wisemen/vue-core/**/*.js',
  ],
  darkMode: 'class',
  plugins: [
    containerQueries,
    PluginCreator(({ addUtilities }) => {
      addUtilities({
        '.focus-ring': {},
        '.ml-break-out': {},
        '.mr-break-out': {},
        '.mx-break-out': {},
      })
    }),

  ],
  theme: {
    extend: {
      backgroundColor: {
        'active': 'var(--bg-active)',
        'brand-primary': 'var(--bg-brand-primary)',
        'brand-primary-alt': 'var(--bg-brand-primary-alt)',
        'brand-secondary': 'var(--bg-brand-secondary)',
        'brand-section': 'var(--bg-brand-section)',
        'brand-section-subtle': 'var(--bg-brand-section-subtle)',
        'brand-solid': 'var(--bg-brand-solid)',
        'brand-solid-hover': 'var(--bg-brand-solid-hover)',
        'disabled': 'var(--bg-disabled)',
        'disabled-subtle': 'var(--bg-disabled-subtle)',
        'error-primary': 'var(--bg-error-primary)',
        'error-secondary': 'var(--bg-error-secondary)',
        'error-solid': 'var(--bg-error-solid)',
        'overlay': 'var(--bg-overlay)',
        'primary': 'var(--bg-primary)',
        'primary-alt': 'var(--bg-primary-alt)',
        'primary-hover': 'var(--bg-primary-hover)',
        'primary-solid': 'var(--bg-primary-solid)',
        'quaternary': 'var(--bg-quaternary)',
        'secondary': 'var(--bg-secondary)',
        'secondary-alt': 'var(--bg-secondary-alt)',
        'secondary-hover': 'var(--bg-secondary-hover)',
        'secondary-solid': 'var(--bg-secondary-solid)',
        'secondary-subtle': 'var(--bg-secondary-subtle)',
        'success-primary': 'var(--bg-success-primary)',
        'success-secondary': 'var(--bg-success-secondary)',
        'success-solid': 'var(--bg-success-solid)',
        'tertiary': 'var(--bg-tertiary)',
        'warning-primary': 'var(--bg-warning-primary)',
        'warning-secondary': 'var(--bg-warning-secondary)',
        'warning-solid': 'var(--bg-warning-solid)',
      },

      borderColor: {
        'brand': 'var(--border-brand)',
        'brand-alt': 'var(--border-brand-alt)',
        'disabled': 'var(--border-disabled)',
        'disabled-subtle': 'var(--border-disabled-subtle)',
        'error': 'var(--border-error)',
        'error-subtle': 'var(--border-error-subtle)',
        'primary': 'var(--border-primary)',
        'secondary': 'var(--border-secondary)',
        'tertiary': 'var(--border-tertiary)',
      },
      colors: {
        'brand-primary-25': 'var(--brand-primary-25)',
        'brand-primary-50': 'var(--brand-primary-50)',
        'brand-primary-100': 'var(--brand-primary-100)',
        'brand-primary-200': 'var(--brand-primary-200)',
        'brand-primary-300': 'var(--brand-primary-300)',
        'brand-primary-400': 'var(--brand-primary-400)',
        'brand-primary-500': 'var(--brand-primary-500)',
        'brand-primary-600': 'var(--brand-primary-600)',
        'brand-primary-700': 'var(--brand-primary-700)',
        'brand-primary-800': 'var(--brand-primary-800)',
        'brand-primary-900': 'var(--brand-primary-900)',
        'brand-primary-950': 'var(--brand-primary-950)',
        'error-25': 'var(--error-25)',
        'error-50': 'var(--error-50)',
        'error-100': 'var(--error-100)',
        'error-200': 'var(--error-200)',
        'error-300': 'var(--error-300)',
        'error-400': 'var(--error-400)',
        'error-500': 'var(--error-500)',
        'error-600': 'var(--error-600)',
        'error-700': 'var(--error-700)',
        'error-800': 'var(--error-800)',
        'error-900': 'var(--error-900)',
        'error-950': 'var(--error-950)',

        'fg-brand-primary': 'var(--fg-brand-primary)',
        'fg-brand-primary-alt': 'var(--fg-brand-primary-alt)',
        'fg-brand-secondary': 'var(--fg-brand-secondary)',
        'fg-disabled': 'var(--fg-disabled)',
        'fg-disabled-subtle': 'var(--fg-disabled-subtle)',
        'fg-error-primary': 'var(--fg-error-primary)',
        'fg-error-secondary': 'var(--fg-error-secondary)',
        'fg-primary': 'var(--fg-primary)',
        'fg-quarternary': 'var(--fg-quarternary)',
        'fg-quarternary-hover': 'var(--fg-quarternary-hover)',

        'fg-quinary': 'var(--fg-quinary)',
        'fg-quinary-hover': 'var(--fg-quinary-hover)',
        'fg-secondary': 'var(--fg-secondary)',
        'fg-secondary-hover': 'var(--fg-secondary-hover)',
        'fg-senary': 'var(--fg-senary)',
        'fg-success-primary': 'var(--fg-success-primary)',
        'fg-success-secondary': 'var(--fg-success-secondary)',
        'fg-tertiary': 'var(--fg-tertiary)',
        'fg-tertiary-hover': 'var(--fg-tertiary-hover)',
        'fg-warning-primary': 'var(--fg-warning-primary)',
        'fg-warning-secondary': 'var(--fg-warning-secondary)',
        'fg-white': 'var(--fg-white)',

        'gray-25': 'var(--gray-25)',
        'gray-50': 'var(--gray-50)',
        'gray-100': 'var(--gray-100)',
        'gray-200': 'var(--gray-200)',
        'gray-300': 'var(--gray-300)',
        'gray-400': 'var(--gray-400)',
        'gray-500': 'var(--gray-500)',
        'gray-600': 'var(--gray-600)',
        'gray-700': 'var(--gray-700)',
        'gray-800': 'var(--gray-800)',
        'gray-900': 'var(--gray-900)',
        'gray-950': 'var(--gray-950)',

        'success-25': 'var(--success-25)',
        'success-50': 'var(--success-50)',
        'success-100': 'var(--success-100)',
        'success-200': 'var(--success-200)',
        'success-300': 'var(--success-300)',
        'success-400': 'var(--success-400)',
        'success-500': 'var(--success-500)',
        'success-600': 'var(--success-600)',
        'success-700': 'var(--success-700)',
        'success-800': 'var(--success-800)',
        'success-900': 'var(--success-900)',
        'success-950': 'var(--success-950)',

        'warning-25': 'var(--warning-25)',
        'warning-50': 'var(--warning-50)',
        'warning-100': 'var(--warning-100)',
        'warning-200': 'var(--warning-200)',
        'warning-300': 'var(--warning-300)',
        'warning-400': 'var(--warning-400)',
        'warning-500': 'var(--warning-500)',
        'warning-600': 'var(--warning-600)',
        'warning-700': 'var(--warning-700)',
        'warning-800': 'var(--warning-800)',
        'warning-900': 'var(--warning-900)',
        'warning-950': 'var(--warning-950)',
      },
      fontFamily: {
        kreon: [
          'Kreon',
          ...defaultTheme.fontFamily.sans,
        ],
      },

      fontSize: {
        title: 'var(--text-title)',
        body: 'var(--text-body)',
        caption: 'var(--text-caption)',
        heading: 'var(--text-heading)',
        hero: 'var(--text-hero)',
        subtext: 'var(--text-subtext)',
        subtitle: 'var(--text-subtitle)',
      },
      gap: {
        '2xl': '20px',
        '3xl': '24px',
        '4xl': '32px',
        '5xl': '40px',
        '6xl': '48px',
        '7xl': '64px',
        '8xl': '80px',
        '9xl': '96px',
        '10xl': '128px',
        '11xl': '160px',
        'lg': '12px',
        'md': '8px',
        'none': '0px',
        'sm': '6px',
        'xl': '16px',
        'xs': '4px',
        'xxs': '2px',
      },
      margin: {
        '2xl': '20px',
        '3xl': '24px',
        '4xl': '32px',
        '5xl': '40px',
        '6xl': '48px',
        '7xl': '64px',
        '8xl': '80px',
        '9xl': '96px',
        '10xl': '128px',
        '11xl': '160px',
        'lg': '12px',
        'md': '8px',
        'none': '0px',
        'sm': '6px',
        'xl': '16px',
        'xs': '4px',
        'xxs': '2px',
      },
      padding: {
        '2xl': '20px',
        '3xl': '24px',
        '4xl': '32px',
        '5xl': '40px',
        '6xl': '48px',
        '7xl': '64px',
        '8xl': '80px',
        '9xl': '96px',
        '10xl': '128px',
        '11xl': '160px',
        'lg': '12px',
        'md': '8px',
        'none': '0px',
        'sm': '6px',
        'xl': '16px',
        'xs': '4px',
        'xxs': '2px',
      },
      ringOffsetColor: {
        DEFAULT: 'var(--bg-primary)',
      },
      textColor: {
        'brand-primary': 'var(--text-brand-primary)',
        'brand-secondary': 'var(--text-brand-secondary)',
        'brand-tertiary': 'var(--text-brand-tertiary)',
        'brand-tertiary-alt': 'var(--text-brand-tertiary-alt)',
        'disabled': 'var(--text-disabled)',
        'error-primary': 'var(--text-error-primary)',
        'placeholder': 'var(--text-placeholder)',
        'placeholder-subtle': 'var(--text-placeholder-subtle)',
        'primary': 'var(--text-primary)',
        'primary-on-brand': 'var(--text-primary-on-brand)',
        'quaternary': 'var(--text-quaternary)',
        'quaternary-on-brand': 'var(--text-quaternary-on-brand)',
        'secondary': 'var(--text-secondary)',
        'secondary-hover': 'var(--text-secondary-hover)',
        'secondary-on-brand': 'var(--text-secondary-on-brand)',
        'success-primary': 'var(--text-success-primary)',
        'tertiary': 'var(--text-tertiary)',
        'tertiary-hover': 'var(--text-tertiary-hover)',
        'tertiary-on-brand': 'var(--text-tertiary-on-brand)',
        'warning-primary': 'var(--text-warning-primary)',
        'white': 'var(--text-white)',
      },
      transitionTimingFunction: {
        'sidebar-collapse': 'cubic-bezier(0.25, 0.8, 0.25, 1)',
      },
      width: {
        'dialog-sm': '26rem',
      },
    },
  },
} satisfies Config
