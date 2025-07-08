const updateTime = () => {
    document.getElementById('date-time').innerHTML = `<img class="inline line-start" alt="Local date and time" title="Local date and time" src="assets/img/clock.png"> ${new Date().toLocaleString()}`;
};
updateTime();
setInterval(updateTime, 1000); // Measures in milliseconds (1 sec = 1000 ms)