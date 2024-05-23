import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { css } from '../styled-system/css'
import { center, flex } from '../styled-system/patterns'
import { icons } from 'lucide-react'

import { Account, AccountItem, Button, Gallery, Icon, Maps, Transportation } from './components'
import Animate from './components/Animate'

import Representative from './assets/representative-image.png'

function App() {
  const [searchParams] = useSearchParams()

  const [rehearse, setRehearse] = useState(false)
  const [buttonIcon, setButtonIcon] = useState<keyof typeof icons>('Copy')

  useEffect(() => {
    if (searchParams.get('rehearse')) setRehearse(true)
  }, [searchParams])

  return (
    <>
      <main
        className={flex({
          direction: 'column',
          minHeight: 'screen',
          backgroundColor: 'text.1',
        })}
      >
        <article
          className={css({
            position: 'relative',
            flexGrow: '1',
            marginX: 'auto',
            paddingBottom: '120px',
            backgroundColor: 'white',
            width: 'full',
            maxWidth: '440px',
          })}
        >
          <section className={css({ position: 'relative' })}>
            <img
              className={css({ marginTop: '-20px', width: 'full', aspectRatio: '6/11' })}
              src={Representative}
              alt="대문 이미지"
            />

            <div className={css({ position: 'absolute', top: 'clamp(54px, 15vw, 60px)', width: 'full' })}>
              <p className={css({ marginBottom: '8px', fontSize: 'clamp(11px, 2.5vw, 16px)', textAlign: 'center' })}>
                SAVE THE DATE
              </p>

              <div className={center({ gap: '8px', fontSize: 'clamp(17px, 4vw, 22px)' })}>
                <span>노지수</span>
                <hr
                  className={css({
                    border: 'none',
                    width: '0.8px',
                    height: 'clamp(10px, 2.5vw, 16px)',
                    backgroundColor: 'text.2',
                  })}
                />
                <span>김현곤</span>
              </div>
            </div>

            <div
              className={css({
                position: 'absolute',
                bottom: '0',
                zIndex: '1',
                width: 'full',
                height: '120px',
                bgGradient: 'to-r',
                gradientFrom: 'white',
                gradientTo: 'transparent',
              })}
            />
          </section>

          <section className={css({ marginTop: '46px' })}>
            <p className={css({ marginBottom: '10px', fontSize: '21px', fontWeight: 'bold', textAlign: 'center' })}>
              결혼합니다
            </p>

            {rehearse && (
              <p
                className={flex({
                  align: 'center',
                  justify: 'center',
                  gap: '10px',
                  marginTop: '36px',
                  marginBottom: '6px',
                  fontSize: '17px',
                  fontWeight: 'bold',
                  _before: {
                    content: '""',
                    display: 'block',
                    width: '12px',
                    height: '1px',
                    backgroundColor: 'text.1',
                    opacity: '0.8',
                  },
                  _after: {
                    content: '""',
                    display: 'block',
                    width: '12px',
                    height: '1px',
                    backgroundColor: 'text.1',
                    opacity: '0.8',
                  },
                })}
              >
                본식
              </p>
            )}

            <p className={css({ textAlign: 'center', fontSize: '17px' })}>
              2024년 6월 22일(토) 11시
              <br />
              대전 유성컨벤션 웨딩홀 2층 팰리스 홀
            </p>

            {rehearse && (
              <>
                <p
                  className={flex({
                    align: 'center',
                    justify: 'center',
                    gap: '10px',
                    marginTop: '24px',
                    marginBottom: '6px',
                    fontSize: '17px',
                    fontWeight: 'bold',
                    _before: {
                      content: '""',
                      display: 'block',
                      width: '12px',
                      height: '1px',
                      backgroundColor: 'text.1',
                      opacity: '0.6',
                    },
                    _after: {
                      content: '""',
                      display: 'block',
                      width: '12px',
                      height: '1px',
                      backgroundColor: 'text.1',
                      opacity: '0.6',
                    },
                  })}
                >
                  피로연
                </p>

                <p className={css({ textAlign: 'center' })}>
                  2024년 6월 8일(토) 18시
                  <br />
                  통영 베이웨딩홀 2층
                </p>
              </>
            )}
          </section>

          <section className={css({ marginTop: '74px' })}>
            <Animate>
              <p
                className={css({
                  marginBottom: '20px',
                  fontFamily: 'seaweed',
                  textAlign: 'center',
                  color: 'text.3',
                  fontSize: '17px',
                })}
              >
                Invite you
              </p>

              <div
                className={css(
                  { display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '15px', textAlign: 'center' },
                  rehearse && { fontSize: '16px' }
                )}
              >
                <p>
                  결혼은 새로운
                  <br /> 인생의 시작이라고 합니다.
                </p>
                <p>
                  저희 두 사람이 백년해로의
                  <br />
                  진실한 가약을 맺고자 합니다.
                </p>
                <p>
                  함께 자리하여 저희가 내딛는 새 인생의
                  <br />첫 걸음을 축복해 주시면 감사하겠습니다.
                </p>
              </div>

              <div className={css({ marginTop: '32px', fontSize: '14px' }, rehearse && { fontSize: '15px' })}>
                <div className={css({ textAlign: 'center' })}>
                  <span className={css({ fontWeight: 'bold' })}>김덕만 · 박지선</span>
                  <span className={css({ display: 'inline-block', textAlign: 'left', width: '50px' })}>의 아들</span>
                  <span className={css({ marginLeft: '8px', fontWeight: 'bold' })}>김현곤</span>
                </div>

                <div className={css({ textAlign: 'center' })}>
                  <span className={css({ fontWeight: 'bold' })}>노국현 · 지주영</span>
                  <span className={css({ display: 'inline-block', textAlign: 'left', width: '50px' })}>의 딸</span>
                  <span className={css({ marginLeft: '8px', fontWeight: 'bold' })}>노지수</span>
                </div>
              </div>
            </Animate>
          </section>

          <section className={css({ marginTop: '94px' })}>
            <Animate>
              <p
                className={css({
                  marginBottom: '24px',
                  fontFamily: 'seaweed',
                  textAlign: 'center',
                  color: 'text.3',
                  fontSize: '17px',
                })}
              >
                Gallery
              </p>

              <Gallery />
            </Animate>
          </section>

          <section className={css({ marginTop: '94px', paddingX: '20px' })}>
            <Animate>
              <p
                className={css({
                  marginBottom: '8px',
                  fontFamily: 'seaweed',
                  textAlign: 'center',
                  color: 'text.3',
                  fontSize: '17px',
                })}
              >
                Account
              </p>

              <h2
                className={css({
                  marginBottom: '32px',
                  fontSize: '20px',
                  textAlign: 'center',
                  fontWeight: 'bold',
                })}
              >
                마음 전하실 곳
              </h2>

              <div className={flex({ direction: 'column', gap: '32px' })}>
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
              </div>
            </Animate>
          </section>

          <section className={css({ marginTop: '100px' })}>
            <Animate>
              <p
                className={css({
                  marginBottom: '4px',
                  fontFamily: 'seaweed',
                  textAlign: 'center',
                  color: 'text.3',
                  fontSize: '17px',
                })}
              >
                Location
              </p>

              <h2
                className={css({
                  marginBottom: '20px',
                  fontSize: '20px',
                  textAlign: 'center',
                  fontWeight: 'bold',
                })}
              >
                오시는 길
              </h2>

              {rehearse && (
                <p
                  className={flex({
                    align: 'center',
                    justify: 'center',
                    gap: '10px',
                    marginTop: '32px',
                    marginBottom: '6px',
                    fontSize: '17px',
                    fontWeight: 'bold',
                    _before: {
                      content: '""',
                      display: 'block',
                      width: '12px',
                      height: '1px',
                      backgroundColor: 'text.1',
                      opacity: '0.8',
                    },
                    _after: {
                      content: '""',
                      display: 'block',
                      width: '12px',
                      height: '1px',
                      backgroundColor: 'text.1',
                      opacity: '0.8',
                    },
                  })}
                >
                  본식
                </p>
              )}

              <p className={css({ marginBottom: '12px', textAlign: 'center', fontWeight: '14px' })}>
                대전 유성컨벤션 웨딩홀
                <br />
                대전광역시 유성구 온천북로 77
              </p>

              <Button
                style={flex.raw({ align: 'center', gap: '4px', marginX: 'auto', marginBottom: '32px' })}
                onClick={async () => {
                  try {
                    await navigator.clipboard.writeText('대전광역시 유성구 온천북로 77')
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
                주소복사
              </Button>

              <Maps lat={36.356586} lng={127.351549} />

              <div className={flex({ direction: 'column', gap: '32px', marginTop: '20px', paddingX: '20px' })}>
                <Transportation name="차량" icon="Car">
                  <p className={css({ fontSize: '14px' })}>유성컨벤션 건물 주차장 또는 맞은편 부지 공간 주차 가능</p>
                </Transportation>
                <Transportation name="버스" icon="Bus">
                  <p className={css({ fontSize: '14px' })}>
                    시내버스 102, 108, 706, 106, 113
                    <br /> 탑승 후 홈플러스 유성점 하차
                  </p>
                </Transportation>
                <Transportation name="지하철" icon="TrainFront">
                  <p className={css({ fontSize: '14px' })}>지하철 1호선 갑천역 3번 출구</p>
                </Transportation>
              </div>

              {rehearse && (
                <>
                  <hr
                    className={css({
                      marginY: '32px',
                      marginX: '20px',
                      border: 'none',
                      height: '0.5px',
                      backgroundColor: 'text.3',
                      opacity: '0.2',
                    })}
                  />

                  <p
                    className={flex({
                      align: 'center',
                      justify: 'center',
                      gap: '10px',
                      marginTop: '32px',
                      marginBottom: '6px',
                      fontSize: '17px',
                      fontWeight: 'bold',
                      _before: {
                        content: '""',
                        display: 'block',
                        width: '12px',
                        height: '1px',
                        backgroundColor: 'text.1',
                        opacity: '0.8',
                      },
                      _after: {
                        content: '""',
                        display: 'block',
                        width: '12px',
                        height: '1px',
                        backgroundColor: 'text.1',
                        opacity: '0.8',
                      },
                    })}
                  >
                    피로연
                  </p>

                  <p className={css({ marginBottom: '12px', textAlign: 'center', fontWeight: '14px' })}>
                    통영 베이웨딩홀
                    <br />
                    경남 통영시 도남로 257-93
                  </p>

                  <Button
                    style={flex.raw({ align: 'center', gap: '4px', marginX: 'auto', marginBottom: '32px' })}
                    onClick={async () => {
                      try {
                        await navigator.clipboard.writeText('경남 통영시 도남로 257-93')
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
                    주소복사
                  </Button>

                  <Maps lat={34.829349} lng={128.43273} />

                  <div className={flex({ direction: 'column', gap: '32px', marginTop: '20px', paddingX: '20px' })}>
                    <Transportation name="차량" icon="Car">
                      <p className={css({ fontSize: '14px' })}>도남동 유람선터미널 옆</p>
                    </Transportation>
                    <Transportation name="버스" icon="Bus">
                      <p className={css({ fontSize: '14px' })}>
                        통영 시외버스터미널 - 141번 탑승 후 유람선 터미널 하차
                        <br />
                        통영 시외버스터미널 - 184번, 101번 탑승 후 발개삼거리 하차
                      </p>
                    </Transportation>
                  </div>
                </>
              )}
            </Animate>
          </section>
        </article>
      </main>
    </>
  )
}

export default App
