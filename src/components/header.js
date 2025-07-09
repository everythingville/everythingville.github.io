document.querySelector('header').innerHTML = `
    <small id="date-time"><img class="inline line-start" alt="Local date and time" title="Local date and time" src="assets/img/clock.png"> ${new Date().toLocaleString()}</small>
    <a href="index.html" id="map-nav"><img src="assets/img/logo.png" alt="Back to map" title="Back to map"></a>
`;
const updateTime = () => {
    document.getElementById('date-time').innerHTML = `<img class="inline line-start" alt="Local date and time" title="Local date and time" src="assets/img/clock.png"> ${new Date().toLocaleString()}`;
};
setInterval(updateTime, 1000); // Measures in milliseconds (1 sec = 1000 ms)