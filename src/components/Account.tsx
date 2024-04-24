import { ReactNode, useState } from 'react'

import { css } from '../../styled-system/css'
import { flex } from '../../styled-system/patterns'
import { ChevronDown } from 'lucide-react'

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
          paddingY: '12px',
          paddingX: '16px',
          width: 'full',
        })}
      >
        {who}측 계좌번호
        <ChevronDown size={16} strokeWidth={1} />
      </button>

      {isOpen && <>{children}</>}
    </div>
  )
}

export default Account
