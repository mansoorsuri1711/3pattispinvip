import { ImageResponse } from 'next/og'
 
export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'
 
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 42,
          background: 'linear-gradient(180deg, #0d1f26 0%, #061016 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#00d9ca',
          fontWeight: 'bold',
          borderRadius: '20%',
          border: '4px solid #00d9ca',
        }}
      >
        TPS
      </div>
    ),
    {
      ...size,
    }
  )
}
