let sec = document.querySelector(".second");
let min = document.querySelector(".minute");
let hour = document.querySelector(".hour");
let degree = 0;
setInterval(() => {
    degree += 6;
    sec.style.transform= `rotate(${degree}deg)`
}, 1000);
setInterval(() => {
    degree += 6;
    min.style.transform= `rotate(${degree}deg)`
}, 60000);
setInterval(() => {
    degree += 6;
    hour.style.transform= `rotate(${degree}deg)`
}, 3600000);

function updateClock() {
    const now = new Date();
    const clock = now.toLocaleTimeString();
    document.getElementById("time").textContent = clock;
}
setInterval(updateClock, 1000);
