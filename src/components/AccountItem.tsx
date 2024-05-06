import { useState } from 'react'
import { icons } from 'lucide-react'
import { flex } from '../../styled-system/patterns'
import { css } from '../../styled-system/css'

import Icon from './Icon'

interface Props {
  name: string
  account: string
}

function AccountItem({ name, account }: Props) {
  const [buttonIcon, setButtonIcon] = useState<keyof typeof icons>('Copy')

  return (
    <div
      className={flex({
        align: 'center',
        gap: '9px',
        borderTopWidth: '1px',
        borderTopColor: 'gray.200',
        paddingLeft: '16px',
        paddingY: '14px',
        paddingRight: '15px',
        fontSize: '15px',
        '& + &': { borderTopColor: 'gray.100' },
      })}
    >
      <div className={css({ flex: 'none', width: '45px' })}>{name}</div>

      <div className={flex({ align: 'center', justify: 'space-between', width: 'full' })}>
        <p>{account}</p>

        <button
          type="button"
          className={flex({
            align: 'center',
            gap: '4px',
            flex: 'none',
            paddingY: '3px',
            paddingX: '7px',
            fontSize: '13px',
            color: 'gray.600',
            backgroundColor: 'gray.100',
          })}
          onClick={async () => {
            const accountNumber = account.split(' ')[1].replace(/-/g, '')

            try {
              await navigator.clipboard.writeText(accountNumber)
              setButtonIcon('Check')

              setTimeout(() => {
                setButtonIcon('Copy')
              }, 1000)
            } catch (err) {
              console.error(err)
            }
          }}
        >
          <Icon name={buttonIcon} size={12} />
          복사
        </button>
      </div>
    </div>
  )
}

export default AccountItem
