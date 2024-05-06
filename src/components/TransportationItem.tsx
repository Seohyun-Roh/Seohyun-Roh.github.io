import { icons } from 'lucide-react'
import { css } from '../../styled-system/css'
import { flex } from '../../styled-system/patterns'

import Icon from './Icon'

interface Props {
  icon: keyof typeof icons
  description: string
}

export function TransportItem({ icon, description }: Props) {
  return (
    <p className={flex({ gap: '6px', fontSize: '15px', '& + &': { marginTop: '4px' } })}>
      <div className={css({ flex: 'none', marginTop: '4px' })}>
        <Icon name={icon} size={16} />
      </div>
      <span>{description}</span>
    </p>
  )
}

export default TransportItem
