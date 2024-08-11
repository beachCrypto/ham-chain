import { ImageResponse } from 'next/og';

export const runtime = 'edge';

const img = `${
  process.env.VERCEL_URL || 'http://localhost:3000'
}/green-ham-with-wings.gif`;

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          background: 'white',
          width: '100%',
          height: '100%',
          padding: 30,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img
          src={`${
            process.env.VERCEL_URL || 'http://localhost:3000'
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
