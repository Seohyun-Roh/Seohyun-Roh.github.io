import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { css } from '../styled-system/css'
import { center, flex } from '../styled-system/patterns'

import { Account, AccountItem, Gallery, Icon, Image, Maps, Transportation, TransportationItem } from './components'
import Animate from './components/Animate'

import Divider from './assets/image.png'
import SaveTheDate from './assets/save-the-date.png'

function App() {
  const [searchParams] = useSearchParams()

  const [rehearse, setRehearse] = useState(false)

  useEffect(() => {
    if (searchParams.get('rehearse')) setRehearse(true)
  }, [searchParams])

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
            position: 'relative',
            flexGrow: '1',
            marginX: 'auto',
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
                marginTop: '30px',
                marginBottom: '4px',
                fontSize: 'clamp(21px, 5vw, 29px)',
                color: 'gray.900',
                letterSpacing: '1px',
                fontFamily: 'maruburi',
              })}
            >
              Kim Hyun Gone
              <br />
              Rho Ji Su
            </h1>

            <img
              src={SaveTheDate}
              alt="save-the-date"
              className={css({
                position: 'absolute',
                top: '18px',
                right: '10px',
                width: 'clamp(150px, 40vw, 220px)',
              })}
            />

            <div className={center({ marginX: '-20px', paddingX: '20px' })}>
              <Image
                style={css.raw({ width: 'full', aspectRatio: '2/3' })}
                src={`${import.meta.env.VITE_IMAGE_PREFIX}2FbeO1LT%2FbtsGMFBABiX%2Fsc7VUeQMWV0ZPtGNwkNgK1%2Fimg.jpg`}
                alt="대문 이미지"
              />
            </div>

            <div
              className={css(
                {
                  marginTop: '48px',
                  textAlign: 'center',
                },
                rehearse && { marginTop: '86px' }
              )}
            >
              <div className={css({ position: 'relative' })}>
                <p
                  className={css({
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    marginBottom: '16px',
                    fontSize: 'clamp(22px, 5vw, 28px)',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    color: 'gray.900',
                    width: 'full',
                  })}
                >
                  {!rehearse && <Icon name="Heart" fill="#ff5245" color="#ff5245" size={14} />}
                  <span>결혼합니다</span>
                  {!rehearse && <Icon name="Heart" fill="#ff5245" color="#ff5245" size={14} />}
                </p>

                <div>
                  {rehearse && (
                    <p
                      className={flex({
                        align: 'center',
                        justify: 'center',
                        gap: '4px',
                        marginTop: '36px',
                        marginBottom: '4px',
                        fontSize: '19px',
                        fontWeight: 'bold',
                      })}
                    >
                      - 본식 -
                    </p>
                  )}
                  <p className={css({ fontSize: '18px' })}>
                    2024년 6월 22일(토) 11시
                    <br />
                    대전 유성컨벤션 웨딩홀 2층 팰리스 홀
                  </p>
                </div>

                {rehearse && (
                  <div className={css({ marginTop: '32px', marginBottom: '38px' })}>
                    <p
                      className={flex({
                        align: 'center',
                        justify: 'center',
                        gap: '4px',
                        marginBottom: '4px',
                        fontSize: '19px',
                        fontWeight: 'bold',
                      })}
                    >
                      - 피로연 -
                    </p>
                    <p className={css({ fontSize: '18px' })}>
                      2024년 6월 8일(토) 18시 <br />
                      통영 베이웨딩홀 2층
                    </p>
                  </div>
                )}

                {rehearse && (
                  <>
                    <img
                      src={Divider}
                      alt="image"
                      className={css({
                        position: 'absolute',
                        top: '-40px',
                        left: '-10px',
                        opacity: '0.5',
                        width: '70px',
                      })}
                    />
                    <img
                      src={Divider}
                      alt="image"
                      className={css({
                        position: 'absolute',
                        top: '-45px',
                        right: '-7px',
                        rotate: '90deg',
                        opacity: '0.5',
                        width: '70px',
                      })}
                    />
                    <img
                      src={Divider}
                      alt="image"
                      className={css({
                        position: 'absolute',
                        bottom: '-47px',
                        left: '-7px',
                        rotate: '270deg',
                        opacity: '0.5',
                        width: '70px',
                      })}
                    />
                    <img
                      src={Divider}
                      alt="image"
                      className={css({
                        position: 'absolute',
                        bottom: '-42px',
                        right: '-14px',
                        rotate: '180deg',
                        opacity: '0.5',
                        width: '70px',
                      })}
                    />
                  </>
                )}
              </div>
            </div>
          </section>
          <section
            className={css({
              paddingY: '72px',
              paddingX: '16px',
              backgroundColor: 'main.100',
            })}
          >
            <Animate>
              <p
                className={css({
                  marginBottom: '10px',

                  textAlign: 'center',
                  lineHeight: '1.55',
                  wordBreak: 'keep-all',
                })}
              >
                결혼은 새로운 인생의 시작이라고 합니다.
                <br />
                저희 두 사람이 백년해로의
                <br />
                진실한 가약을 맺고자 합니다.
              </p>
            </Animate>
            <Animate>
              <p className={css({ textAlign: 'center', lineHeight: '1.55', wordBreak: 'keep-all' })}>
                함께 자리하여 저희가 내딛는 새 인생의 첫 걸음을
                <br />
                축복해 주시면 감사하겠습니다.
              </p>
            </Animate>
            <Animate>
              <div className={css({ marginTop: '38px', fontSize: '15px' })}>
                <div className={flex({ align: 'center', gap: '4px', marginX: 'auto', width: 'fit' })}>
                  <span>김덕만 · 박지선</span>
                  <span className={css({ display: 'inline-block', fontSize: '14px', width: '44px' })}>
                    의 아들
                  </span>{' '}
                  김현곤
                </div>

                <div className={flex({ align: 'center', gap: '4px', marginX: 'auto', width: 'fit' })}>
                  <span>노국현 · 지주영</span>
                  <span className={css({ display: 'inline-block', fontSize: '14px', width: '44px' })}>의 딸</span>{' '}
                  노지수
                </div>
              </div>
            </Animate>
          </section>

          <section className={css({ paddingTop: '48px', paddingBottom: '62px', fontFamily: 'gowun' })}>
            <Animate>
              <h2
                className={css({
                  marginY: '32px',
                  fontSize: '20px',
                  textAlign: 'center',
                  fontWeight: 'bold',
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
                  paddingLeft: '32px',
                  paddingRight: '28px',
                })}
              >
                <div className={flex({ align: 'center', justify: 'space-between' })}>
                  <p>신부에게 연락하기</p>
                  <a href={`tel:${import.meta.env.VITE_PHONE_NUMBER_1}`} className={css({ padding: '4px' })}>
                    <Icon name="Phone" size={13} fill="#FB98AC" color="#FB98AC" />
                  </a>
                </div>

                <hr className={css({ border: 'none', width: 'full', height: '1px', backgroundColor: 'gray.200' })} />

                <div className={flex({ align: 'center', justify: 'space-between' })}>
                  <p>신랑에게 연락하기</p>
                  <a href={`tel:${import.meta.env.VITE_PHONE_NUMBER_2}`} className={css({ padding: '4px' })}>
                    <Icon name="Phone" size={13} fill="#FB98AC" color="#FB98AC" />
                  </a>
                </div>
              </div>
            </Animate>
          </section>

          <section className={css({ paddingY: '80px', backgroundColor: 'white', fontFamily: 'gowun' })}>
            <Animate>
              <h2
                className={flex({
                  align: 'center',
                  justify: 'center',
                  gap: '8px',
                  marginBottom: '6px',
                  fontSize: '20px',
                  textAlign: 'center',
                  fontWeight: 'bold',
                })}
              >
                {!rehearse && <Icon name="Sparkle" size={14} color="#FFD694" fill="#FFD694" />}
                오시는 길{!rehearse && <Icon name="Sparkle" size={14} color="#FFD694" fill="#FFD694" />}
              </h2>

              {rehearse && (
                <p
                  className={flex({
                    align: 'center',
                    justify: 'center',
                    gap: '8px',
                    marginTop: '18px',
                    marginBottom: '2px',
                    fontSize: '18px',
                    fontWeight: 'bold',
                  })}
                >
                  <Icon name="Sparkles" size={14} color="#FFD694" fill="#FFD694" />
                  본식
                  <Icon name="Sparkles" size={14} color="#FFD694" fill="#FFD694" />
                </p>
              )}

              <p className={css({ marginTop: '16px', textAlign: 'center' })}>대전 유성컨벤션 웨딩홀</p>
              <p className={css({ marginBottom: '32px', textAlign: 'center' })}>대전광역시 유성구 온천북로 77</p>

              <Maps lat={36.356586} lng={127.351549} />

              <div className={css({ marginTop: '32px', paddingX: '20px' })}>
                <Transportation name="자가차량">
                  <TransportationItem
                    icon="SquareParking"
                    description="유성컨벤션 건물 주차장 또는 맞은편 부지 공간 주차 가능"
                  />
                </Transportation>
                <Transportation name="대중교통">
                  <TransportationItem
                    icon="Bus"
                    description="시내버스 102, 108, 706, 106, 113 탑승 후
                    홈플러스 유성점 하차"
                  />
                  <TransportationItem icon="TrainFront" description="지하철 1호선 갑천역 3번 출구" />
                </Transportation>
              </div>

              {rehearse && (
                <>
                  <hr
                    className={css({
                      marginTop: '52px',
                      marginX: '20px',
                      marginBottom: '48px',
                      border: 'none',
                      height: '1px',
                      backgroundColor: 'gray.200',
                    })}
                  />

                  <p
                    className={flex({
                      align: 'center',
                      justify: 'center',
                      gap: '8px',
                      marginBottom: '2px',
                      fontSize: '18px',
                      fontWeight: 'bold',
                    })}
                  >
                    <Icon name="Sparkles" size={14} color="#FFD694" fill="#FFD694" />
                    피로연
                    <Icon name="Sparkles" size={14} color="#FFD694" fill="#FFD694" />
                  </p>

                  <p className={css({ marginTop: '16px', textAlign: 'center' })}>통영 베이웨딩홀</p>
                  <p className={css({ marginBottom: '32px', textAlign: 'center' })}>경남 통영시 도남로 257-93</p>

                  <Maps lat={34.829349} lng={128.43273} />

                  <div className={css({ marginTop: '32px', paddingX: '20px' })}>
                    <Transportation name="">
                      <TransportationItem icon="CarFront" description="도남동 유람선터미널 옆" />
                      <TransportationItem
                        icon="BusFront"
                        description="통영 시외버스터미널 - 141번 탑승 후 유람선 터미널 하차"
                      />
                      <TransportationItem
                        icon="BusFront"
                        description="통영 시외버스터미널 - 184번, 101번 탑승 후 발개삼거리 하차"
                      />
                    </Transportation>
                  </div>
                </>
              )}
            </Animate>
          </section>

          <section className={css({ paddingY: '62px', backgroundColor: 'main.100', fontFamily: 'gowun' })}>
            <Animate>
              <h2
                className={css({
                  marginBottom: '24px',
                  paddingY: '9px',
                  fontSize: '20px',
                  textAlign: 'center',
                  fontWeight: 'bold',
                })}
              >
                사진첩
              </h2>

              <Gallery />
            </Animate>
          </section>
        </article>
      </main>

      <footer
        className={css({
          fontSize: '11px',
          textAlign: 'right',
          color: 'gray.400',
          backgroundColor: 'bg.100',
        })}
      >
        <div
          className={css({
            marginX: 'auto',
            paddingTop: '62px',
            paddingX: '6px',
            paddingY: '12px',
            width: 'full',
            maxWidth: '768px',
            backgroundColor: 'gray.50',
          })}
        >
          개발, 디자인 노서현
        </div>
      </footer>
    </>
  )
}

export default App
