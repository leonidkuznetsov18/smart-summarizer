import type { PlasmoMessaging } from '@plasmohq/messaging';

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  console.log('handler ping', {
    req,
    res,
  });

  res.send({
    message: 'pong',
  });
};

export default handler;
