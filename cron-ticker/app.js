const cron = require('node-cron');

let times = 0;

cron.schedule('1-59/5 * * * * *', () => {
    console.log('Tick each 5 seconds: ', times++);
});