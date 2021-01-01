const { Main } = require("electron");

var bootUI = document.getElementById("boot"),
    bootMessage = document.getElementById("boot--message"),
    bootLoadingIcon = document.getElementById("boot--loadingIcon");
bootUI.style.display = "block";

function startBoot() {
    setTimeout(function() {
        bootUI.style.opacity = null;
        bootMessage.innerText = "Starting EnderOS...";
        setTimeout(function() {
            bootMessage.innerText = "Fetching the server...";
            setTimeout(function() {
                bootMessage.innerText = "Connecting to the server...";
                setTimeout(function() {
                    bootMessage.innerText = "Almost there...";
                    setTimeout(function() {
                        bootLoadingIcon.classList.add("hide");
                        bootMessage.innerText = "Welcome!";
                        main();
                    }, 2600);
                }, 5000);
            }, 1800);
        }, 2000)
    }, 1000);
}