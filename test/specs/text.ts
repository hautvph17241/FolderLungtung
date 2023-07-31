// const winston = require("winston");
// const SlackHook = require("winston-slack-webhook-transport");
 
// const logger = winston.createLogger({
//     level: "error",
//     transports: [
//         new SlackHook({
//             webhookUrl: "https://hooks.slack.com/services/xxx/xxx/xxx",
//             formatter: error => {
//                 return {
//                     text: "This will function as a fallback for surfaces that don't support Block Kit, like IRC clients or mobile push notifications.",
//                     attachments: [
//                         {
//                             text: "Or don't pass anything. That's fine too"
//                         }
//                     ],
//                     blocks: [
//                         {
//                             type: "section",
//                             text: {
//                                 type: "plain_text",
//                                 text: "You can pass more info to the formatter by supplying additional parameters in the logger call"
//                             }
//                         }
//                     ]
//                 }
//             }
//         })
//     ]
// });

// logger.error();
// ("Definitely try playing around with this.");