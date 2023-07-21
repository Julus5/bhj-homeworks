const menuLink = document.querySelectorAll('.menu__link');

menuLink.forEach((item) => {
  item.onclick = function () {
    const activeMenu = document.querySelector('.menu_active');
    if (activeMenu) {
        activeMenu.classList.remove('menu_active');
    }
    if (item.closest('.menu__item').querySelector('.menu_sub')) {
      item.closest('.menu__item').querySelector('.menu_sub').classList.toggle('menu_active');
      return false;
    }
  };
})




