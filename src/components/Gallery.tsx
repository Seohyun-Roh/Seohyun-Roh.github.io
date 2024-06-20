import 'react-responsive-carousel/lib/styles/carousel.min.css'

import { useState } from 'react'
import { css } from '../../styled-system/css'
import { flex } from '../../styled-system/patterns'
import { Carousel } from 'react-responsive-carousel'

function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0)

  const images = [
    '2FbSiXGw%2FbtsGNs2AGr2%2FBWOk3Rfx1Ul5RBSw3f8nJ0%2Fimg.jpg',
    '2FuINzc%2FbtsGOd4QqHb%2FohewAKHk93kYb9RWyFB1l0%2Fimg.jpg',
    '2Flwrw2%2FbtsGPO4sxWX%2Fne47xS9PUzK9nteSMqA8j0%2Fimg.jpg',
    '2FDdMmM%2FbtsGMDRufX9%2FUcuoxcAD31xdciGoPdqY3k%2Fimg.jpg',
    '2FJcIph%2FbtsGME3PGvM%2F5s2AItNIua5sIOk5gfpdD1%2Fimg.jpg',
    '2F46ITf%2FbtsHcpEajI7%2FT3FFBQRivLqxKhW5lc2lx0%2Fimg.jpg',
    '2Fde6aIm%2FbtsGNMfl4NU%2FSZKG8nQQZxlmPw63drO7B1%2Fimg.jpg',
    '2FbeO1LT%2FbtsGMFBABiX%2Fsc7VUeQMWV0ZPtGNwkNgK1%2Fimg.jpg',
  ]

  return (
    <>
      <Carousel
        className={css({ maxWidth: '768px', maxHeight: 'full', overflow: 'auto', scrollbar: 'hidden' })}
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        infiniteLoop={true}
        emulateTouch={true}
        selectedItem={activeIndex}
        onChange={(index) => setActiveIndex(index)}
      >
        {images.map((href, index) => {
          return (
            <img
              key={href}
              src={`${import.meta.env.VITE_IMAGE_PREFIX}${href}`}
              alt={`사진첩 이미지 ${index + 1}`}
              className={css({
                width: 'full',
                height: 'full',
                aspectRatio: '3/4',
                objectFit: 'cover',
                cursor: 'pointer',
                userSelect: 'none',
              })}
            />
          )
        })}
      </Carousel>
      <ul className={flex({ align: 'center', width: 'full' })}>
        {images.map((href, index) => {
          const key = href + index

          return (
            <li
              key={key}
              onClick={() => setActiveIndex(index)}
              className={css(activeIndex !== index && { opacity: '0.2' })}
            >
              <img
                src={`${import.meta.env.VITE_IMAGE_PREFIX}${href}`}
                alt={`사진첩 썸네일 이미지 ${index + 1}`}
                className={css({
                  width: 'full',
                  height: 'full',
                  aspectRatio: '1/1',
                  objectFit: 'cover',
                  cursor: 'pointer',
                })}
              />
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default Gallery
