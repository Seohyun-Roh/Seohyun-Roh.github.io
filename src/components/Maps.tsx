import { CustomOverlayMap, Map, useKakaoLoader } from 'react-kakao-maps-sdk'
import { css } from '../../styled-system/css'

function Maps() {
  const [loading] = useKakaoLoader({
    appkey: import.meta.env.VITE_API_KAKAO_KEY,
  })

  return (
    <>
      {loading ? (
        <div className={css({ width: 'full', height: '360px' })}>지도 불러오는 중</div>
      ) : (
        <Map center={{ lat: 36.356586, lng: 127.351549 }} style={{ width: '100%', height: '360px' }} level={2}>
          <CustomOverlayMap position={{ lat: 36.356586, lng: 127.351549 }}>
            <a
              className={css({ backgroundColor: 'gray.400' })}
              href="https://kko.to/CL7UohSdt1"
              target="_blank"
              rel="noreferrer"
            >
              대전 유성컨벤션
            </a>
          </CustomOverlayMap>
        </Map>
      )}
    </>
  )
}

export default Maps
