let tabsArr = document.querySelectorAll('.tab');
let tabsContent = document.querySelectorAll('.tab__content');

tabsArr.forEach((elem,index)=> {

  elem.addEventListener('click',()=>{
    tabsArr.forEach((tab)=>{
        tab.classList.remove('tab_active');
    });
    elem.classList.add('tab_active');
        
    tabsContent.forEach((element) => {
        element.classList.remove('tab__content_active');
    });
    tabsContent[index].classList.add('tab__content_active');
    });
});


