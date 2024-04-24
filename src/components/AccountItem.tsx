import { useState } from 'react'
import { flex } from '../../styled-system/patterns'
import Icon from './Icon'
import { icons } from 'lucide-react'

interface Props {
  name: string
  account: string
}

function AccountItem({ name, account }: Props) {
  const [buttonText, setButtonText] = useState<keyof typeof icons>('Copy')

  return (
    <div
      className={flex({
        align: 'center',
        justify: 'space-between',
        borderTopWidth: '1px',
        borderTopColor: 'gray.200',
        paddingY: '14px',
        paddingX: '16px',
      })}
    >
      <div>{name}</div>
      <p>{account}</p>

      <button
        type="button"
        className={flex({
          align: 'center',
          gap: '2px',
          flex: 'none',
          paddingY: '2px',
          paddingX: '5px',
          fontSize: '14px',
          backgroundColor: 'gray.100',
        })}
        onClick={async () => {
          const accountNumber = account.split(' ')[1].replace(/-/g, '')

          try {
            await navigator.clipboard.writeText(accountNumber)
            setButtonText('Check')

            setTimeout(() => {
              setButtonText('Copy')
            }, 1000)
          } catch (err) {
            console.error(err)
          }
        }}
      >
        <Icon name={buttonText} size={12} />
        복사
      </button>
    </div>
  )
}

export default AccountItem
