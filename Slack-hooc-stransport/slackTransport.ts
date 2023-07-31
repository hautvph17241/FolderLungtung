
// import axios from 'axios';
// import * as winston from 'winston';

// export class SlackTransport extends winston.transport {
//   private webhookUrl: string;
//   constructor(options: { webhookUrl: string }) {
//     super(options );
//     this.webhookUrl = options.webhookUrl;
//   }

//   log(error: any, callback: () => void): void {
//     setImmediate(() => {
//       this.emit('logged', error);
//     });

//     axios
//       .post(this.webhookUrl, {
//         text: error.message,
//       })
//       .then(() => {
//         this.emit('slack');
//       })
//       .catch((error) => {
//         this.emit('error', error);
//       });

//     callback();
//   }
// }
