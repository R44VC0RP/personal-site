import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Remote Resend MCP';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  // Fetch Geist fonts from public directory
  const geistSemiBold = fetch(
    new URL('/Geist-SemiBold.woff2', 'https://ryan.ceo')
  ).then((res) => res.arrayBuffer());

  const geistMedium = fetch(
    new URL('/Geist-Medium.woff2', 'https://ryan.ceo')
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#09090b',
          backgroundImage: 'linear-gradient(135deg, #8458B3 0%, #D0BDF4 50%, #A0D2EB 100%)',
          position: 'relative',
        }}
      >
        {/* Background overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(9, 9, 11, 0.85)',
            display: 'flex',
          }}
        />
        
        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
            textAlign: 'center',
            padding: '60px',
          }}
        >
          {/* Main Title */}
          <div
            style={{
              fontSize: 72,
              fontFamily: 'Geist SemiBold',
              color: 'white',
              marginBottom: '24px',
              letterSpacing: '-0.04em',
              lineHeight: 1.1,
            }}
          >
            Remote Resend MCP
          </div>
          
          {/* Subtitle */}
          <div
            style={{
              fontSize: 28,
              fontFamily: 'Geist Medium',
              color: '#a1a1aa',
              marginBottom: '40px',
              maxWidth: '800px',
              lineHeight: 1.3,
            }}
          >
            Integrate Resend email services directly into your Cursor IDE workflow
          </div>
          
          {/* Tools badges */}
          <div
            style={{
              display: 'flex',
              gap: '16px',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                backgroundColor: 'rgba(34, 197, 94, 0.2)',
                border: '2px solid #22c55e',
                borderRadius: '8px',
                padding: '8px 16px',
                color: '#22c55e',
                fontSize: '18px',
                fontFamily: 'Geist Medium',
              }}
            >
              send-email
            </div>
            <div
              style={{
                backgroundColor: 'rgba(59, 130, 246, 0.2)',
                border: '2px solid #3b82f6',
                borderRadius: '8px',
                padding: '8px 16px',
                color: '#3b82f6',
                fontSize: '18px',
                fontFamily: 'Geist Medium',
              }}
            >
              create-contact
            </div>
            <div
              style={{
                backgroundColor: 'rgba(168, 85, 247, 0.2)',
                border: '2px solid #a855f7',
                borderRadius: '8px',
                padding: '8px 16px',
                color: '#a855f7',
                fontSize: '18px',
                fontFamily: 'Geist Medium',
              }}
            >
              list-audiences
            </div>
          </div>
          
          {/* Bottom attribution */}
          <div
            style={{
              position: 'absolute',
              bottom: '40px',
              right: '40px',
              fontSize: '16px',
              fontFamily: 'Geist Medium',
              color: '#71717a',
            }}
          >
            ryan.ceo
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Geist SemiBold',
          data: await geistSemiBold,
          style: 'normal',
          weight: 600,
        },
        {
          name: 'Geist Medium',
          data: await geistMedium,
          style: 'normal',
          weight: 500,
        },
      ],
    }
  );
}
