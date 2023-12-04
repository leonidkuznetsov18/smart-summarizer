import type { PlasmoMessaging } from '@plasmohq/messaging';

const handler: PlasmoMessaging.PortHandler = async (req, res) => {
  console.log('req ping', req);

  res.send({
    message: 'pong',
  });
};

export default handler;
