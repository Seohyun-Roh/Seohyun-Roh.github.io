import { useEffect, useState } from 'react'
import { css } from '../../styled-system/css'
import { center } from '../../styled-system/patterns'
import { SystemStyleObject } from '../../styled-system/types'

interface Props {
  src: string
  alt: string
  style?: SystemStyleObject
}

function Image({ src, alt, style }: Props) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto'
  }, [isOpen])

  return (
    <>
      <div
        role="button"
        onClick={() => {
          setIsOpen(true)
        }}
      >
        <img src={src} alt={alt} className={css(style)} />
      </div>

      {isOpen && (
        <div
          className={center({ position: 'fixed', inset: '0', zIndex: '10', paddingY: '10px' })}
          onClick={() => setIsOpen(false)}
        >
          <div className={css({ position: 'fixed', inset: '0', backgroundColor: 'black/40' })} />
          <img
            src={src}
            alt={alt}
            className={css({ maxWidth: 'full', maxHeight: 'full', overflow: 'auto', zIndex: '1' })}
          />
        </div>
      )}
    </>
  )
}

export default Image
