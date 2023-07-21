const slider = document.querySelectorAll(".slider__item");
const prev = document.querySelector(".slider__arrow_prev");
const next = document.querySelector(".slider__arrow_next");

let active = 0;
    prev.onclick = () => {
        if (active - 1 < 0) {
            active = slider.length - 1;
        } else {
            active -= 1;
        }
        changeSlide(active);
    }
    
    next.onclick = () => {
        if (active + 1 === slider.length) {
            active = 0;
        } else {
            active += 1;
        }
        changeSlide(active);
    }

function changeSlide(i) {
    [...slider].forEach((element) => element.classList.remove('slider__item_active'));
    slider[i].classList.add('slider__item_active');
}





  