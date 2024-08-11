import { ImageResponse } from 'next/og';

export const runtime = 'edge';

const img = `${
  'https://ham-frames.pages.dev' || 'http://localhost:3000'
}/green-ham-with-wings.gif`;

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          background: 'black',
          width: '100%',
          height: '100%',
          padding: 0,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img
          src={`${
            'https://ham-frames.pages.dev' || 'http://localhost:3000'
          }/green-ham-with-wings.gif`}
          style={{
            borderWidth: 10,
          }}
        />
      </div>
    ),
    {
      width: 800,
      height: 600,
    }
  );
}
