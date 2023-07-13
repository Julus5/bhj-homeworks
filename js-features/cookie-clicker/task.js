const image = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');
const speed = document.getElementById('clicker__speed');

const startTime = Date.now();

image.onclick = function () {
    counter.textContent++;
    const endTime = Date.now() ;

    if (counter.textContent % 2 === 0) {
        image.width = 200;
        image.height = 130;
    }
    else {
        image.width = 250;
        image.height = 150;
    }

    speed.textContent = (1 / ((endTime - startTime) / 1000)).toFixed(2);
    startTime = endTime;
}