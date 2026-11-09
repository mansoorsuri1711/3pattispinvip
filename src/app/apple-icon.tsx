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
          fontSize: 48,
          background: 'linear-gradient(180deg, #1c1712 0%, #100E0C 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#f9dc5c',
          fontWeight: 'bold',
          borderRadius: '20%',
          border: '4px solid #f9dc5c',
        }}
      >
        3PW
      </div>
    ),
    {
      ...size,
    }
  )
}
