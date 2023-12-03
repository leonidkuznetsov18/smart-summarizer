import type { PlasmoCSConfig } from 'plasmo';

import { sendToBackground } from '@plasmohq/messaging';

export const config: PlasmoCSConfig = {
  all_frames: true,
};
function IndexPopup() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: 16,
        width: '300px',
        height: '300px',
      }}>
      <h1>This is smart summarizer extension!</h1>
      <button
        onClick={async () => {
          const res = await sendToBackground({
            name: 'ping',
            body: {
              id: 123,
            },
          });
          console.log('res', res);
        }}>
        Ping to background
      </button>
    </div>
  );
}

export default IndexPopup;
