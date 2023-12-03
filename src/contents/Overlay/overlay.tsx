import cssText from 'data-text:~/contents/Overlay/style.css';
import type { PlasmoCSConfig } from 'plasmo';

import { useMessage } from '@plasmohq/messaging/hook';

export const config: PlasmoCSConfig = {
  matches: ['https://www.plasmo.com/*'],
  css: ['font.css'],
  all_frames: true,
};

export const getStyle = () => {
  const style = document.createElement('style');
  style.textContent = cssText;
  return style;
};

const Overlay = () => {
  const { data } = useMessage<string, string>(async (req, res) => {
    console.log('Overlay req', req);
    res.send('pong1111 Overlay');
  });

  console.log('Overlay data', data);
  return (
    <span
      id={'ext-overlay-el'}
      className="hw-top"
      style={{
        padding: 12,
      }}>
      CSUI OVERLAY FIXED POSITION
    </span>
  );
};

export default Overlay;
