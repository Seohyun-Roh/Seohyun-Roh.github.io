import { ReactNode } from 'react'
import { icons } from 'lucide-react'
import { flex } from '../../styled-system/patterns'

import Icon from './Icon'

interface Props {
  name: string
  icon: keyof typeof icons
  children: ReactNode
}

export function Transportation({ name, icon, children }: Props) {
  return (
    <div>
      <div className={flex({ align: 'center', gap: '4px', marginBottom: '4px', color: 'text.4' })}>
        <Icon name={icon} size={18} />

        <p>{name}</p>
      </div>

      {children}
    </div>
  )
}

export default Transportation
