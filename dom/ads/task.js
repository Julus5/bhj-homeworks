function funcShow(parent, index){
    let current = parent.querySelector(".rotator__case_active");

    let nextText = current.nextElementSibling;
    if (nextText === null) nextText = parent.querySelector(".rotator__case");
    current.classList.remove("rotator__case_active");
    nextText.classList.add("rotator__case_active");   
    nextText.style.color = nextText.getAttribute("data-color");
    clearInterval(interval[index]);
    interval[index] = setInterval(funcShow, nextText.getAttribute("data-speed"), parent, interval);
}

let interval = [];
let count = 0;
document.querySelectorAll(".card").forEach(element => {
    interval.push(setInterval(funcShow, 1000, element, count));
    count++;
});


