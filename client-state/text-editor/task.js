const textArea = document.getElementById('editor');
textArea.addEventListener('keyup', () => {
    localStorage.setItem('text', textArea.value);
});
textArea.value = localStorage.getItem('text');
let resetButton = document.createElement('button');
resetButton.textContent = "Очистить содержимое";
document.querySelector('.card').append(resetButton);
resetButton.addEventListener('click', evt => {
    evt.preventDefault();
    editor.value = '';
    delete localStorage.text;
});


