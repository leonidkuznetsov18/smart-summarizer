import cssText from 'data-text:~/contents/Overlay/style.css';
import type { PlasmoCSConfig } from 'plasmo';

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
