var lookscreen = document.getElementById("main--lockscreen"),
    lockscreen_switch = document.getElementById("main--lockscreen-switch"),
    lockscreen_clock = document.getElementById("main--lockscreen-clock"),
    lockscreen_date = document.getElementById("main--lockscreen-date"),
    lockscreen_actions = document.getElementById("main--lockscreen-actions"),
    lockscreen_message = document.getElementById("main--lockscreen-message"),
    lockscreen_switch_lastestValue = 140,
    lockscreen_switch_isUp = false,
    lockscreen_switch_fullLocked = false,
    lockscreen_switch_mouseMoveFunction = (e) => {
        if (e.clientY < window.innerHeight - 140)
            lockscreen_switch.style.transform = `translateY(${e.clientY}px)`;
        else {
            lockscreen_switch.style.transform = null;
            //lockscreen_switch.classList.remove("full");
        }
        if (!lockscreen_switch_fullLocked) {
            lockscreen_switch_fullLocked = true;
            lockscreen_switch.classList.remove("full");
        }
        if (e.clientY != lockscreen_switch_lastestValue && Math.abs(e.clientY - lockscreen_switch_lastestValue) > 5) {
            lockscreen_switch_isUp = e.clientY < lockscreen_switch_lastestValue;
            lockscreen_switch_lastestValue = e.clientY;
        }
    },
    lockscreen_hideContent = () => {
        if (lockscreen_switch_isUp) {
            lockscreen_switch.classList.add("full");
            lockscreen_clock.classList.add("hide");
            lockscreen_date.classList.add("hide");
            lockscreen_actions.classList.add("hide");
            lockscreen_message.classList.add("hide");
        } else {
            lockscreen_switch.classList.remove("full");
            lockscreen_clock.classList.remove("hide");
            lockscreen_date.classList.remove("hide");
            lockscreen_actions.classList.remove("hide");
            lockscreen_message.classList.remove("hide");
        }
    },
    lockscreen_start = () => {
        document.body.addEventListener("keyup", function(e) {
            if (e.keyCode == 32) {
                if (lockscreen_switch_isUp) {
                    lockscreen_switch_isUp = false;
                    lockscreen_hideContent();
                } else {
                    lockscreen_switch_isUp = true;
                    lockscreen_hideContent();
                }
            }
        });
    };

lockscreen_switch.addEventListener('mousedown', function() {
    lockscreen_switch.classList.add("moving");
    lockscreen_switch_fullLocked = false;
    window.addEventListener("mousemove", lockscreen_switch_mouseMoveFunction);
});

window.addEventListener('mouseup', function() {
    lockscreen_switch.classList.remove("moving");
    window.removeEventListener("mousemove", lockscreen_switch_mouseMoveFunction);
    lockscreen_switch.style.transform = null;
    lockscreen_hideContent();
});


var lockscreen_clockM = require("./../../main/lockscreen/clock"),
    lockscreen_dateM = require("./../../main/lockscreen/date");
lockscreen_clockM.start(lockscreen_clock);
lockscreen_dateM.start(lockscreen_date);