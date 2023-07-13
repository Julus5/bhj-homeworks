const timer = document.getElementById('timer');
let sec = parseInt(timer.textContent);
    
const interval = setInterval(() => {
    
    sec --;
    if (sec <= 0) {
        clearInterval(interval);
        alert('Вы победили в конкурсе!');
        window.location = "http://google.com";
    } else {
        const hours = String(Math.floor(sec / 3600)).padStart(2, "0");
        const minutes = String(Math.floor((sec - (hours * 3600)) / 60)).padStart(2, "0");
        const seconds = String((sec - (hours * 3600) - (minutes * 60))).padStart(2, "0");
    
        timer.textContent = hours + ":" + minutes + ":" + seconds;
    }
}, 1000);



