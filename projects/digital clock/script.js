function updateClock() {
    const now = new Date();
    const clock = now.toLocaleTimeString();
    const date = now.toDateString() 
    document.getElementById("time").textContent = clock;
    document.getElementById("date").textContent = date;
}
setInterval(updateClock, 1000);