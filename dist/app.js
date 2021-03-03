"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const bolt_1 = require("@slack/bolt");
const app = new bolt_1.App({
    signingSecret: process.env.SLACK_SIGNING_SECRET,
    token: process.env.SLACK_BOT_TOKEN
});
app.event('channel_created', ({ event, context }) => __awaiter(void 0, void 0, void 0, function* () {
    const notificationLocation = process.env.NOTIFICATION_LOCATION || '#d_channel-watcher';
    try {
        const result = yield app.client.chat.postMessage({
            token: context.botToken,
            channel: notificationLocation,
            text: `#${event.channel.name} チャンネルが作られたよ!🎉`,
            link_names: true
        });
        console.log(result);
    }
    catch (error) {
        console.error(error);
    }
}));
// Start your app
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield app.start(process.env.PORT || 3000);
    console.log('⚡️ Bolt app is running!');
}))();
//# sourceMappingURL=app.js.map