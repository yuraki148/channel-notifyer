const { App } = require('@slack/bolt');
const store = require('./store');

const app = new App({
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  token: process.env.SLACK_BOT_TOKEN
});


app.event('channel_created', async ({ event, context }) => {
  const channelCreatedNotifyChannel = process.env.NOTIFICATION_LOCATION || '#general';
  try {
    const result = await app.client.chat.postMessage({
      token: context.botToken,
      channel: channelCreatedNotifyChannel,
      text: `#${event.channel.name} チャンネルが作られたよ!🎉`,
      link_names: true
    });
    console.log(result);
  }
  catch (error) {
    console.error(error);
  }
});


// Start your app
(async () => {
  await app.start(process.env.PORT || 3000);
  console.log('⚡️ Bolt app is running!');
})();

