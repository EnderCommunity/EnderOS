module.exports = {
    start: function(element) {
        element.loop = setInterval(() => {
            var date = new Date(),
                hours = date.getHours(),
                AmOrPm = hours >= 12 ? 'PM' : 'AM',
                minutes = date.getMinutes() + "";
            hours = (hours % 12) || 12;
            minutes = (minutes.length == 1) ? "0" + minutes : minutes;
            element.innerHTML = `${hours}:${minutes} ${AmOrPm}`;
        }, 1000);
    },
    stop: function(element) {
        clearInterval(element.loop);
        element.loop = undefined;
    }
};