const winston = require("winston");
// const SlackHook = require("winston-slack-webhook-transport");

const createLogger = () => {
    return winston.createLogger({
        level: "error",
        transports: [
            new winston.transports.Console({
                format: winston.format.simple()
            })
            // new SlackHook({
            //     webhookUrl: "https://hooks.slack.com/services/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"
            // })
        ]
    })
}


export default createLogger

























// import { SlackTransport } from 'winston-slack-transport';

// // URL webhook của kênh Slack bạn đã tạo
// const webhookUrl = 'https://hooks.slack.com/services/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';

// // Khởi tạo Slack Transport với URL webhook
// const slackTransport = new SlackTransport({
//   webhookUrl,
// });

// // Khởi tạo Winston Logger
// const logger = winston.createLogger({
//   level: 'error', // Chỉ ghi lại log.error
//   transports: [
//     new winston.transports.Console(), // Ghi lại log.error ra console (tùy chọn)
//     slackTransport, // Gửi cảnh báo đến Slack
//   ],
// });

// export default logger;
