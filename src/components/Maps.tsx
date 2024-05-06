import { Map, MapMarker, useKakaoLoader } from 'react-kakao-maps-sdk'
import { css } from '../../styled-system/css'

import MapPin from '../assets/map-pin.png'

interface Props {
  lat: number
  lng: number
}

function Maps({ lat, lng }: Props) {
  const [loading] = useKakaoLoader({
    appkey: import.meta.env.VITE_API_KAKAO_KEY,
  })

  return (
    <>
      {loading ? (
        <div className={css({ width: 'full', height: '300px' })}>지도 불러오는 중..</div>
      ) : (
        <Map center={{ lat, lng }} style={{ width: '100%', height: '300px' }} level={2}>
          <MapMarker
            position={{ lat, lng }}
            image={{
              src: MapPin,
              size: {
                width: 22,
                height: 28,
              },
              options: {
                offset: {
                  x: 12,
                  y: 34,
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
