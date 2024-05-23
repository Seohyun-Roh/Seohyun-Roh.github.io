import { ReactNode, useState } from 'react'
import { css } from '../../styled-system/css'
import { flex } from '../../styled-system/patterns'

import Icon from './Icon'

interface Props {
  who: string
  children: ReactNode
}

function Account({ who, children }: Props) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={css({ marginX: 'auto', borderWidth: '1px', borderColor: '#F7F7F7', width: 'full' })}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={flex({
          align: 'center',
          justify: 'space-between',
          paddingLeft: '12px',
          paddingY: '10px',
          paddingRight: '10px',
          fontWeight: 'bold',
          backgroundColor: '#F7F7F7',
          width: 'full',
        })}
      >
        {who}측 계좌번호
        <Icon name={isOpen ? 'ChevronUp' : 'ChevronDown'} size={20} strokeWidth={1.5} color="#8C8C8C" />
      </button>

      {isOpen && <>{children}</>}
    </div>
  )
}

export default Account
