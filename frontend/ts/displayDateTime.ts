import moment from 'moment';
const currentTime = moment().format('MMMM Do YYYY, h:mm a');
(document.getElementById('current-time')!).innerHTML = currentTime;