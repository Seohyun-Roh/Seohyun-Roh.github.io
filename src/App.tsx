import { css } from '../styled-system/css'
import { center, flex, grid } from '../styled-system/patterns'

import Account from './components/Account'
import AccountItem from './components/AccountItem'
import Maps from './components/Maps'

function App() {
  const images = [
    '2FbetZAy%2FbtsGPamnnie%2Fn81nJ4RC8jeY20oKAyvGBk%2Fimg.jpg',
    '2FuINzc%2FbtsGOd4QqHb%2FohewAKHk93kYb9RWyFB1l0%2Fimg.jpg',
    '2Flwrw2%2FbtsGPO4sxWX%2Fne47xS9PUzK9nteSMqA8j0%2Fimg.jpg',
    '2FbSiXGw%2FbtsGNs2AGr2%2FBWOk3Rfx1Ul5RBSw3f8nJ0%2Fimg.jpg',
    '2Fde6aIm%2FbtsGNMfl4NU%2FSZKG8nQQZxlmPw63drO7B1%2Fimg.jpg',
    '2FJcIph%2FbtsGME3PGvM%2F5s2AItNIua5sIOk5gfpdD1%2Fimg.jpg',
  ]

  return (
    <main
      className={flex({
        direction: 'column',
        minHeight: 'screen',
        backgroundColor: 'bg.100',
      })}
    >
      <article
        className={css({
          flexGrow: '1',
          marginX: 'auto',
          paddingBottom: '96px',
          width: 'full',
          maxWidth: '768px',
          backgroundColor: 'gray.50',
        })}
      >
        <section
          className={flex({
            direction: 'column',
            paddingTop: '48px',
            paddingX: '20px',
            backgroundColor: 'white',
            minHeight: '95vh',
          })}
        >
          <h1
            className={css({
              marginBottom: '32px',
              fontSize: '28px',
              textAlign: 'center',
              letterSpacing: '1px',
            })}
          >
            결혼합니다
          </h1>

          <div className={center({ marginX: '-20px', paddingX: '30px' })}>
            <img
              src={`${import.meta.env.VITE_IMAGE_PREFIX}2FbeO1LT%2FbtsGMFBABiX%2Fsc7VUeQMWV0ZPtGNwkNgK1%2Fimg.jpg`}
              alt="대문 이미지"
            />
          </div>

          <div
            className={css({
              marginY: 'auto',
              paddingY: '32px',
              fontSize: '17px',
              textAlign: 'center',
            })}
          >
            <p
              className={center({
                marginBottom: '14px',
                fontSize: '17px',
                textAlign: 'center',
                width: 'full',
              })}
            >
              <span
                className={flex({
                  align: 'center',
                  _after: {
                    content: '""',
                    display: 'block',
                    height: '1px',
                    width: '12px',
                    marginX: '6px',
                    backgroundColor: 'gray.900',
                  },
                })}
              >
                김현곤
              </span>
              <span>노지수</span>
            </p>

            <p>2024년 6월 22일(토) 11시</p>
            <p>대전 유성컨벤션 웨딩홀 2층 팰리스 홀</p>
          </div>
        </section>

        <section
          className={css({
            paddingY: '48px',
            backgroundColor: 'main.900',
          })}
        >
          <p className={css({ textAlign: 'center', lineHeight: '1.55' })}>
            서로가 마주보며 다져온 사랑을
            <br /> 이제 함께 한 곳을 바라보며 걸어갈 수 있는
            <br /> 큰 사랑으로 키우고자 합니다. <br />
            저희 두 사람이
            <br /> 사랑의 이름으로 지켜나갈 수 있게
            <br /> 앞날을 축복해 주시면 감사하겠습니다.
          </p>

          <div className={css({ marginTop: '38px', fontSize: '17px' })}>
            <div className={css({ marginX: 'auto', width: 'fit' })}>
              <span>김덕만 · 박지선</span>
              <span className={css({ width: '52px' })}>의 아들</span> 김현곤
            </div>

            <div className={css({ marginX: 'auto', width: 'fit' })}>
              <span>노국현 · 지주영</span>
              <span className={css({ display: 'inline-block', width: '52px' })}>의 딸</span> 노지수
            </div>
          </div>
        </section>

        <section className={css({ paddingTop: '48px', paddingBottom: '86px' })}>
          <h2
            className={css({
              marginY: '32px',
              fontSize: '20px',
              textAlign: 'center',
            })}
          >
            마음 전하실 곳
          </h2>

          <Account who="신부">
            <AccountItem name="노지수" account="국민 670102-01-389594" />
            <AccountItem name="지주영" account="국민 612502-01-164641" />
          </Account>

          <Account who="신랑">
            <AccountItem name="김현곤" account="하나 316-910345-20407" />
          </Account>
        </section>

        <section className={css({ paddingY: '48px', backgroundColor: 'white' })}>
          <h2
            className={css({
              marginY: '32px',
              fontSize: '20px',
              textAlign: 'center',
            })}
          >
            오시는 길
          </h2>
          <Maps />

          <div className={css({ marginTop: '20px', paddingX: '20px' })}>
            지하철 1호선 갑천역 3번 출구
            <br />
            유성컨벤션 건물 주차장 또는 맞은편 부지 공간 주차 가능
          </div>
        </section>

        <section className={css({ paddingY: '48px' })}>
          <h2
            className={css({
              marginY: '32px',
              fontSize: '20px',
              textAlign: 'center',
            })}
          >
            갤러리
          </h2>

          <ul className={grid({ columns: { base: 2, sm: 3 }, gap: '5px' })}>
            {images.map((href, index) => {
              return (
                <li key={href}>
                  <img
                    src={`${import.meta.env.VITE_IMAGE_PREFIX}${href}`}
                    alt={`갤러리 이미지 ${index + 1}`}
                    className={css({ width: 'full', height: 'full', objectFit: 'cover' })}
                  />
                </li>
              )
            })}
          </ul>
        </section>
      </article>
    </main>
  )
}

export default App
