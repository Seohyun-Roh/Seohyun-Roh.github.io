import { ReactNode } from 'react'
import { css } from '../../styled-system/css'
import { SystemStyleObject } from '../../styled-system/types'

interface Props {
  children: ReactNode
  style?: SystemStyleObject
  onClick?: () => void
}

function Button({ children, style, onClick }: Props) {
  return (
    <button
      type="button"
      className={css(
        {
          paddingTop: '4px',
          paddingX: '8px',
          paddingBottom: '5px',
          fontSize: '12px',
          fontWeight: 'bold',
          color: '#8C8C8C',
          backgroundColor: '#F7F7F7',
        },
        style
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
