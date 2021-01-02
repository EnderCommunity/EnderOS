var mainUI = document.getElementById("main");

function main() {
    mainUI.style.display = "block";
    setTimeout(function() {
        bootUI.classList.add("hide");
        setTimeout(function() {
            bootUI.style.display = "none";
            lockscreen_start();
        }, 1600);
    }, 1000);
}