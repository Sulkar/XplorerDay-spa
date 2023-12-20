import "./style/index.scss";


(function () {

    let DEBUG = false;
    /*const btnDebug = document.getElementById("btnDebug");
    btnDebug.addEventListener("click", function () {
        DEBUG = !DEBUG;
    })*/

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0");
    let yyyy = today.getFullYear();
    today = mm + "/" + dd + "/" + yyyy;

    // Monat/Tag/Jahr
    let xplorerDay = "06/08/2024";

    const countDown = new Date(xplorerDay).getTime(),
        interval = setInterval(function () {

            const now = new Date().getTime();
            const distance = countDown - now;

            document.getElementById("days").innerText = Math.floor(distance / (day));
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour));
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute));
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

            //Ändere Ansicht nach Ablauf des Countdowns
            if (distance < 0 || DEBUG) {
                //document.getElementById("headline").style.display = "none";
                document.getElementById("countdown").style.display = "none";
                document.getElementById("content").style.display = "flex";
                document.querySelector("body").style.backgroundColor = "#ffffff";
                if (!DEBUG) clearInterval(interval);
            } else if (!DEBUG) {
                //document.getElementById("headline").style.display = "block";
                //document.getElementById("headline").innerText = "Xplorer Day";
                document.getElementById("countdown").style.display = "block";
                document.getElementById("content").style.display = "flex";
                document.querySelector("body").style.backgroundColor = "#ffffff";
            }
        }, 0)
}());