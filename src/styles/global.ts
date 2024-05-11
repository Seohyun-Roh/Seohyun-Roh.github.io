import { defineGlobalStyles } from '@pandacss/dev'

export const globalCss = defineGlobalStyles({
  '*': {
    margin: '0',
    padding: '0',
    font: 'inherit',
    color: 'inherit',
    backgroundColor: 'transparent',
  },

  'html, body': {
    lineHeight: 1.5,
    fontWeight: 400,
    color: 'gray.800',
  },

  button: {
    cursor: 'pointer',
  },
})
