import { css } from '../styled-system/css'
import { center, flex, grid } from '../styled-system/patterns'

import Account from './components/Account'
import AccountItem from './components/AccountItem'
import Icon from './components/Icon'
import Maps from './components/Maps'

function App() {
  const images = [
    '2FbetZAy%2FbtsGPamnnie%2Fn81nJ4RC8jeY20oKAyvGBk%2Fimg.jpg',
    '2FbSiXGw%2FbtsGNs2AGr2%2FBWOk3Rfx1Ul5RBSw3f8nJ0%2Fimg.jpg',
    '2Flwrw2%2FbtsGPO4sxWX%2Fne47xS9PUzK9nteSMqA8j0%2Fimg.jpg',
    '2FDdMmM%2FbtsGMDRufX9%2FUcuoxcAD31xdciGoPdqY3k%2Fimg.jpg',
    '2FuINzc%2FbtsGOd4QqHb%2FohewAKHk93kYb9RWyFB1l0%2Fimg.jpg',
    '2Fde6aIm%2FbtsGNMfl4NU%2FSZKG8nQQZxlmPw63drO7B1%2Fimg.jpg',
  ]

  return (
    <>
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
              paddingY: '48px',
              paddingX: '20px',
              backgroundColor: 'white',
              minHeight: '95vh',
            })}
          >
            <h1
              className={css({
                marginBottom: '32px',
                fontSize: 'clamp(20px, 5vw, 32px)',
                textAlign: 'center',
                color: 'gray.900',
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
                paddingTop: '32px',
                fontSize: '17px',
                textAlign: 'center',
              })}
            >
              <p
                className={center({
                  gap: '6px',
                  marginBottom: '14px',
                  fontSize: 'min(5vw, 20px)',
                  textAlign: 'center',
                  color: 'gray.900',
                  width: 'full',
                })}
              >
                <span>김현곤</span>
                <Icon name="Heart" fill="#ff5245" color="#ff5245" size={14} />
                <span>노지수</span>
              </p>

              <p>2024년 6월 22일(토) 11시</p>
              <p>대전 유성컨벤션 웨딩홀 2층 팰리스 홀</p>
            </div>
          </section>

          <section
            className={css({
              paddingY: '48px',
              paddingX: '20px',
              backgroundColor: 'main.100',
            })}
          >
            <p className={css({ marginBottom: '10px', textAlign: 'center', lineHeight: '1.55' })}>
              결혼은 새로운 인생의 시작이라고 합니다.
              <br />
              저희 두 사람이 백년해로의
              <br />
              진실한 가약을 맺고자 합니다.
            </p>
            <p className={css({ textAlign: 'center', lineHeight: '1.55' })}>
              함께 자리하여 저희가 내딛는 새 인생의 첫 걸음을
              <br />
              축복해 주시면 감사하겠습니다.
            </p>

            <div className={css({ marginTop: '38px', fontSize: '17px' })}>
              <div className={flex({ align: 'center', gap: '2px', marginX: 'auto', fontSize: '18px', width: 'fit' })}>
                <span>김덕만 · 박지선</span>
                <span className={css({ display: 'inline-block', fontSize: '14px', width: '44px' })}>의 아들</span>{' '}
                김현곤
              </div>

              <div className={flex({ align: 'center', gap: '2px', marginX: 'auto', fontSize: '18px', width: 'fit' })}>
                <span>노국현 · 지주영</span>
                <span className={css({ display: 'inline-block', fontSize: '14px', width: '44px' })}>의 딸</span> 노지수
              </div>
            </div>
          </section>

          <section className={css({ paddingTop: '48px', paddingX: '20px', paddingBottom: '62px' })}>
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
              <AccountItem name="노국현" account="국민 703001-01-388306" />
            </Account>

            <Account who="신랑">
              <AccountItem name="김현곤" account="하나 316-910345-20407" />
              <AccountItem name="박지선" account="하나 620-183367-516" />
              <AccountItem name="김덕만" account="국민 653-210559-211" />
            </Account>

            <div
              className={flex({
                direction: 'column',
                gap: '12px',
                marginTop: '48px',
                paddingLeft: '12px',
                paddingRight: '8px',
              })}
            >
              <div className={flex({ align: 'center', justify: 'space-between' })}>
                <p className={css({ fontSize: '15px' })}>신부에게 연락하기</p>
                <a href={`tel:${import.meta.env.VITE_PHONE_NUMBER_1}`} className={css({ padding: '4px' })}>
                  <Icon name="Phone" size={13} fill="#FB98AC" color="#FB98AC" />
                </a>
              </div>

              <hr className={css({ border: 'none', width: 'full', height: '1px', backgroundColor: 'gray.100' })} />

              <div className={flex({ align: 'center', justify: 'space-between' })}>
                <p className={css({ fontSize: '15px' })}>신랑에게 연락하기</p>
                <a href={`tel:${import.meta.env.VITE_PHONE_NUMBER_2}`} className={css({ padding: '4px' })}>
                  <Icon name="Phone" size={13} fill="#FB98AC" color="#FB98AC" />
                </a>
              </div>
            </div>
          </section>

          <section className={css({ paddingTop: '80px', paddingBottom: '48px', backgroundColor: 'white' })}>
            <h2
              className={css({
                marginBottom: '6px',
                fontSize: '20px',
                textAlign: 'center',
              })}
            >
              오시는 길
            </h2>

            <p className={css({ marginBottom: '32px', fontSize: '14px', textAlign: 'center' })}>
              대전광역시 유성구 온천북로 77
            </p>

            <Maps />

            <div className={css({ marginTop: '32px', paddingX: '20px', fontSize: '15px' })}>
              <div className={css({ marginBottom: '18px' })}>
                <p className={css({ marginBottom: '6px', fontSize: '18px' })}>대중교통</p>
                <p className={flex({ gap: '6px' })}>
                  <div className={css({ flex: 'none', marginTop: '4px' })}>
                    <Icon name="Bus" size={16} />
                  </div>
                  <span>
                    시내버스 <strong className={css({ color: 'black' })}>102, 108, 706, 106, 113</strong> 탑승 후
                    홈플러스 유성점 하차
                  </span>
                </p>
                <p className={flex({ gap: '6px', marginTop: '4px' })}>
                  <div className={css({ flex: 'none', marginTop: '4px' })}>
                    <Icon name="TrainFront" size={16} />
                  </div>
                  <span>지하철 1호선 갑천역 3번 출구</span>
                </p>
              </div>
              <div className={css({ marginBottom: '18px' })}>
                <p className={css({ marginBottom: '6px', fontSize: '18px' })}>자가차량</p>
                <p className={flex({ gap: '6px' })}>
                  <div className={css({ flex: 'none', marginTop: '4px' })}>
                    <Icon name="CarFront" size={16} />
                  </div>
                  <span>유성 IC 홈플러스 유성점 갑천변 유성컨벤션웨딩홀</span>
                </p>
                <p className={flex({ gap: '6px', marginTop: '4px' })}>
                  <div className={css({ flex: 'none', marginTop: '4px' })}>
                    <Icon name="SquareParking" size={16} />
                  </div>
                  <span>유성컨벤션 건물 주차장 또는 맞은편 부지 공간 주차 가능</span>
                </p>
              </div>

              <div>
                <p className={css({ marginTop: '18px', marginBottom: '6px', fontSize: '18px' })}>고속버스</p>
                <p className={flex({ gap: '6px' })}>
                  <div className={css({ flex: 'none', marginTop: '4px' })}>
                    <Icon name="BusFront" size={16} />
                  </div>
                  <span>대전고속버스터미널 - 버스 102, 106 탑승 후 홈플러스 유성점 하차</span>
                </p>
                <p className={flex({ gap: '6px', marginTop: '4px' })}>
                  <div className={css({ flex: 'none', marginTop: '4px' })}>
                    <Icon name="BusFront" size={16} />
                  </div>
                  <span>유성고속버스터미널 - 도보 500m 후 102 버스 탑승, 홈플러스 유성점 하차</span>
                </p>
              </div>
            </div>
          </section>

          <section className={css({ paddingY: '48px', backgroundColor: 'main.100' })}>
            <h2
              className={css({
                marginBottom: '24px',
                paddingY: '8px',
                fontSize: '20px',
                textAlign: 'center',
                backgroundColor: 'white',
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
                      className={css({ width: 'full', height: 'full', aspectRatio: '3/4', objectFit: 'cover' })}
                    />
                  </li>
                )
              })}
            </ul>
          </section>
        </article>
      </main>
    </>
  )
}

export default App
