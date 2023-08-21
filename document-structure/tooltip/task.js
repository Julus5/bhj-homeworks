
const hasTooltip = document.querySelectorAll(".has-tooltip");

hasTooltip.forEach(el =>{
    const newDiv = document.createElement("div");
    newDiv.textContent = el.title;
    el.addEventListener("click", event =>{
        event.preventDefault();
        newDiv.classList.add('tooltip');
        el.insertAdjacentElement("beforebegin", newDiv)
        newDiv.style.left = String(el.getBoundingClientRect().left)+ "px";
        newDiv.style.top = String(el.getBoundingClientRect().bottom) + "px";
        newDiv.classList.toggle('tooltip_active');
    });
});




