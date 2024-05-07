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
    <div
      className={css({
        marginTop: '32px',
        marginX: 'auto',
        width: 'full',
        maxWidth: '340px',
        backgroundColor: 'white',
      })}
    >
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={flex({
          align: 'center',
          justify: 'space-between',
          paddingLeft: '14px',
          paddingY: '12px',
          paddingRight: '13px',
          fontSize: '18px',
          width: 'full',
        })}
      >
        {who}측 계좌번호
        <Icon name={isOpen ? 'ChevronUp' : 'ChevronDown'} size={16} strokeWidth={1.5} />
      </button>

      {isOpen && <>{children}</>}
    </div>
  )
}

export default Account
