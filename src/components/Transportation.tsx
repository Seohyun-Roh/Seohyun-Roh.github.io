import { ReactNode } from 'react'
import { css } from '../../styled-system/css'

interface Props {
  name: string
  children: ReactNode
}

export function Transportation({ name, children }: Props) {
  return (
    <div className={css({ '& + &': { marginTop: '18px' } })}>
      <p className={css({ marginBottom: '6px', fontSize: '17px' })}>{name}</p>

      {children}
    </div>
  )
}

export default Transportation
