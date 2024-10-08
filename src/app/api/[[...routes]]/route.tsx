/* eslint-disable react/jsx-key */
/** @jsxImportSource frog/jsx */

import { Button, Frog, TextInput } from 'frog';
import { devtools } from 'frog/dev';
// import { neynar } from 'frog/hubs'
import { handle } from 'frog/next';
import { serveStatic } from 'frog/serve-static';
import { env } from 'process';

const app = new Frog({
  hub: {
    apiUrl: 'https://hubs.airstack.xyz',
    fetchOptions: {
      headers: {
        'x-airstack-hubs': env.AIRSTACK_API_TOKEN ?? '',
      },
    },
  },
  verify: 'silent',
  title: 'Ham Frames',
  imageAspectRatio: '1:1',
  imageOptions: { width: 600, height: 600 },
  assetsPath: '/',
  basePath: '/api',
  // Supply a Hub to enable frame verification.
  // hub: neynar({ apiKey: 'NEYNAR_FROG_FM' })
});

// Edge Runtime

export const runtime = 'edge';

// const imageUrl = 'http://localhost:3000/api/image';

app.frame('/', (c) => {
  const { frameData } = c;
  console.log('frameData', frameData);
  return c.res({
    image: `${
      'https://ham-frames.pages.dev' || 'http://localhost:3000'
    }/green-ham-with-wings.gif`,
    intents: [
      // <TextInput placeholder="Enter custom fruit..." />,
      <Button action={`/study`} value="apple">
        study ham
      </Button>,
    ],
  });
});

app.frame('/study', (c) => {
  const { frameData } = c;
  console.log('frameData', frameData);
  return c.res({
    image: `${
      'https://ham-frames.pages.dev' || 'http://localhost:3000'
    }/chillin-ham-pepe.png`,
    intents: [
      // <TextInput placeholder="Enter custom fruit..." />,
      // <Button action={`/user`} value="apple">
      //   ham rank
      // </Button>,
      <Button.Link href="https://docs.ham.fun/docs/network-information">
        docs
      </Button.Link>,
      <Button.Link href="https://paragraph.xyz/@deployer/the-mechanics-of-hamcaster">
        mechanics
      </Button.Link>,
      <Button.Link href="https://warpcast.com/~/compose?embeds%5B%5D=https%3A%2F%2Fham-frames.pages.dev%2Fapi&text=hamcaster+is+coming+-+frame+by+%40beachcrypto">
        share
      </Button.Link>,
    ],
  });
});

// app.frame('/user', (c) => {
//   const { buttonValue, frameData } = c;
//   const { fid } = frameData as { fid: number };
//   console.log('fid', fid);
//   // const { buttonValue, inputText, status } = c;
//   // const fruit = inputText || buttonValue;
//   return c.res({
//     image: (
//       <div style={{ color: 'black', display: 'flex', fontSize: 60 }}>
//         <p>fid is - </p> {`${fid}`}
//       </div>
//     ),
//     intents: [
//       // <TextInput placeholder="Enter custom fruit..." />,
//       // <Button action={`/user/${fid}`}>ham rank</Button>,
//       <Button.Link href="https://docs.ham.fun/docs/network-information">
//         docs
//       </Button.Link>,
//       <Button.Link href="https://paragraph.xyz/@deployer/the-mechanics-of-hamcaster">
//         mechanics
//       </Button.Link>,
//       <Button.Link href="https://warpcast.com/~/compose?embeds%5B%5D=https%3A%2F%2Fham-frames.pages.dev%2Fapi&text=ham+chain+is+coming+-+frame+by+%40beachcrypto">
//         Share
//       </Button.Link>,
//     ],
//   });
// });

devtools(app, { serveStatic });

export const GET = handle(app);
export const POST = handle(app);

// NOTE: That if you are using the devtools and enable Edge Runtime, you will need to copy the devtools
// static assets to the public folder. You can do this by adding a script to your package.json:
// ```json
// {
//   scripts: {
//     "copy-static": "cp -r ./node_modules/frog/_lib/ui/.frog ./public/.frog"
//   }
// }
// ```
// Next, you'll want to set up the devtools to use the correct assets path:
// ```ts
// devtools(app, { assetsPath: '/.frog' })
// ```
