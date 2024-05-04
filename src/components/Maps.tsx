import { Map, MapMarker, useKakaoLoader } from 'react-kakao-maps-sdk'
import { css } from '../../styled-system/css'

import MapPin from '../assets/map-pin.png'

function Maps() {
  const [loading] = useKakaoLoader({
    appkey: import.meta.env.VITE_API_KAKAO_KEY,
  })

  return (
    <>
      {loading ? (
        <div className={css({ width: 'full', height: '340px' })}>지도 불러오는 중..</div>
      ) : (
        <Map center={{ lat: 36.356586, lng: 127.351549 }} style={{ width: '100%', height: '340px' }} level={2}>
          <MapMarker
            position={{
              lat: 36.356586,
              lng: 127.351549,
            }}
            image={{
              src: MapPin,
              size: {
                width: 26,
                height: 32,
              },
              options: {
                offset: {
                  x: 13,
                  y: 38,
                },
              },
            }}
          />
        </Map>
      )}
    </>
  )
}

export default Maps
