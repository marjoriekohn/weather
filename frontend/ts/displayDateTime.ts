import moment from 'moment';

document.addEventListener('DOMContentLoaded', function() {
    function updateTime() {
        const currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
        const timeElement = document.getElementById('current-time');

        if (timeElement) {
            timeElement.innerHTML = currentTime;
        } else {
            console.error('Time element not found');
        }
    }

    setInterval(updateTime, 1000);
});