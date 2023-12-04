import type { PlasmoCSConfig } from 'plasmo';

import { usePort } from '@plasmohq/messaging/dist/hook';

export const config: PlasmoCSConfig = {
  all_frames: true,
};
function IndexPopup() {
  const port = usePort('ping');
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
        onClick={() =>
          port.send({
            message: 'ping',
          })
        }>
        Ping to background
      </button>
      <div>Response from background: {port.data?.message}</div>
    </div>
  );
}

export default IndexPopup;
