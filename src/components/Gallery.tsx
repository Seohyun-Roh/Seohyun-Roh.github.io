import 'react-responsive-carousel/lib/styles/carousel.min.css'

import { useState } from 'react'
import { css } from '../../styled-system/css'
import { center, grid } from '../../styled-system/patterns'
import { Carousel } from 'react-responsive-carousel'

import Icon from './Icon'

function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  const images = [
    '2FbeO1LT%2FbtsGMFBABiX%2Fsc7VUeQMWV0ZPtGNwkNgK1%2Fimg.jpg',
    '2FbSiXGw%2FbtsGNs2AGr2%2FBWOk3Rfx1Ul5RBSw3f8nJ0%2Fimg.jpg',
    '2Flwrw2%2FbtsGPO4sxWX%2Fne47xS9PUzK9nteSMqA8j0%2Fimg.jpg',
    '2FDdMmM%2FbtsGMDRufX9%2FUcuoxcAD31xdciGoPdqY3k%2Fimg.jpg',
    '2FuINzc%2FbtsGOd4QqHb%2FohewAKHk93kYb9RWyFB1l0%2Fimg.jpg',
    '2Fde6aIm%2FbtsGNMfl4NU%2FSZKG8nQQZxlmPw63drO7B1%2Fimg.jpg',
    '2FJcIph%2FbtsGME3PGvM%2F5s2AItNIua5sIOk5gfpdD1%2Fimg.jpg',
    '2FbetZAy%2FbtsGPamnnie%2Fn81nJ4RC8jeY20oKAyvGBk%2Fimg.jpg',
  ]

  return (
    <>
      <ul className={grid({ columns: 4, gap: '3px' })}>
        {images.map((href, index) => {
          return (
            <li
              key={href}
              onClick={() => {
                setIsOpen(true)
                setActiveIndex(index)
              }}
            >
              <img
                src={`${import.meta.env.VITE_IMAGE_PREFIX}${href}`}
                alt={`사진첩 이미지 ${index + 1}`}
                className={css({
                  width: 'full',
                  height: 'full',
                  aspectRatio: '3/4',
                  objectFit: 'cover',
                  cursor: 'pointer',
                })}
              />
            </li>
          )
        })}
      </ul>
      {isOpen && (
        <div className={center({ position: 'fixed', inset: '0', zIndex: '10', paddingY: '10px' })}>
          <header
            className={css({
              position: 'fixed',
              top: '0',
              paddingY: '4px',
              paddingX: '4px',
              textAlign: 'right',
              color: 'gray.100',
              backgroundColor: 'black/20',
              width: 'full',
              zIndex: '10',
            })}
          >
            <button onClick={() => setIsOpen(false)}>
              <Icon name="X" />
            </button>
          </header>
          <div
            className={css({ position: 'fixed', inset: '0', backgroundColor: 'black/40' })}
            onClick={() => setIsOpen(false)}
          />
          <Carousel
            className={css({ maxWidth: '768px', maxHeight: 'full', overflow: 'auto' })}
            showArrows={true}
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            infiniteLoop={true}
            emulateTouch={true}
            selectedItem={activeIndex}
          >
            {images.map((href, index) => {
              return (
                <li key={href} onClick={() => setActiveIndex(index)}>
                  <img
                    src={`${import.meta.env.VITE_IMAGE_PREFIX}${href}`}
                    alt={`사진첩 이미지 ${index + 1}`}
                    className={css({
                      width: 'full',
                      height: 'full',
                      aspectRatio: '3/4',
                      objectFit: 'cover',
                      cursor: 'pointer',
                    })}
                  />
                </li>
              )
            })}
          </Carousel>
        </div>
      )}
    </>
  )
}

export default Gallery
