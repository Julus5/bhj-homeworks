const value= document.querySelector(".dropdown__value")
const list = document.querySelector(".dropdown__list")

value.addEventListener('click',clickItems);
list.addEventListener('click', textList);

function clickItems() {
    list.classList.toggle('dropdown__list_active');  
}

function textList(event)  {
    event.preventDefault();
    value.textContent = event.target.textContent;
    clickItems();
}





