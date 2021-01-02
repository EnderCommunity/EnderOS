module.exports = {
    start: function(element) {
        element.loop = setInterval(() => {
            var date = new Date();
            var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "No", "Dec"],
                nth = function(d) {
                    if (d > 3 && d < 21) return 'th';
                    switch (d % 10) {
                        case 1:
                            return "st";
                        case 2:
                            return "nd";
                        case 3:
                            return "rd";
                        default:
                            return "th";
                    }
                },
                month = months[date.getMonth()],
                day = date.getDate() + nth(date.getDate()),
                weekday = date.toLocaleString("default", { weekday: "long" });
            element.innerHTML = `${weekday}, ${month} ${day}`;
        }, 1000);
    },
    stop: function(element) {
        clearInterval(element.loop);
        element.loop = undefined;
    }
};