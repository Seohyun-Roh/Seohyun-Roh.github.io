import { ReactNode } from 'react'
import { css } from '../../styled-system/css'

interface Props {
  name: string
  children: ReactNode
}

export function Transportation({ name, children }: Props) {
  return (
    <div className={css({ '& + &': { marginTop: '18px' } })}>
      <p className={css({ marginBottom: '7px', fontSize: '18px' })}>{name}</p>

      {children}
    </div>
  )
}

export default Transportation
