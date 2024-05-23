import { useState } from 'react'
import { icons } from 'lucide-react'
import { flex } from '../../styled-system/patterns'
import { css } from '../../styled-system/css'

import Icon from './Icon'
import Button from './Button'

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
        gap: '16px',
        borderTopColor: '#F7F7F7',
        padding: '12px',
        fontSize: '15px',
        '& + &': { borderTopWidth: '1px' },
      })}
    >
      <p className={css({ flex: 'none', fontWeight: 'bold', width: '42px' })}>{name}</p>

      <div className={flex({ align: 'center', justify: 'space-between', width: 'full' })}>
        <p>{account}</p>

        <Button
          style={flex.raw({ align: 'center', gap: '4px' })}
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
        </Button>
      </div>
    </div>
  )
}

export default AccountItem
