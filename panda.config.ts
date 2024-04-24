import { defineConfig } from '@pandacss/dev'

import { globalCss } from './src/styles/global'
import { tokens } from './src/styles/tokens'

export default defineConfig({
  preflight: true,
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],
  exclude: [],

  theme: {
    breakpoints: {
      sm: '500px',
    },
    extend: {
      tokens,
    },
  },

  globalCss,

  outdir: 'styled-system',
})
