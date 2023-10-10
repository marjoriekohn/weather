///<reference path="../../node_modules/moment/ts3.1-typings/moment.d.ts"/>
const currentTime = moment().format('MMMM Do YYYY, h:mm a');
(document.getElementById('current-time')!).innerHTML = currentTime;