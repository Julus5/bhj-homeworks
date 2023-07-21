const modalMain = document.getElementById('modal_main');
const modalSuccess = document.getElementById('modal_success');
const modalClose = Array.from(document.getElementsByClassName('modal__close'));
const showSuccess = document.querySelector('.show-success');

modalMain.classList.add('modal_active');

modalClose.forEach(item => {
  item.onclick = () => {
    modalMain.classList.remove('modal_active');
    modalSuccess.classList.remove('modal_active');
  };
});

showSuccess.onclick = () => {
  modalMain.classList.remove('modal_active');
  modalSuccess.classList.add('modal_active');
};
