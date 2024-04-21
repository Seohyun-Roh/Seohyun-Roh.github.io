import { defineConfig } from '@pandacss/dev'

import { globalCss } from './src/styles/global'
import { tokens } from './src/styles/tokens'

const prod = process.env.NODE_ENV === 'production'

export default defineConfig({
  preflight: true,
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],
  exclude: [],
  hash: prod,

  theme: {
    extend: {
      tokens,
    },
  },

  globalCss,

  outdir: 'styled-system',
})
