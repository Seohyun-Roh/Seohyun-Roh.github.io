import { css } from '../../styled-system/css'
import { flex } from '../../styled-system/patterns'

interface Props {
  name: string
  account: string
}

function AccountItem({ name, account }: Props) {
  return (
    <div
      className={flex({
        align: 'center',
        justify: 'space-between',
        borderTopWidth: '1px',
        borderTopColor: 'gray.100',
        paddingY: '14px',
        paddingX: '16px',
      })}
    >
      <div>{name}</div>
      <p>{account}</p>

      <button
        type="button"
        className={css({ backgroundColor: 'gray.100' })}
        onClick={() => {
          const accountNumber = account.split(' ')[1].replace(/-/g, '')
          console.log(accountNumber)
          navigator.clipboard.writeText(accountNumber)
        }}
      >
        복사
      </button>
    </div>
  )
}

export default AccountItem
