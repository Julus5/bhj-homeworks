const signin = document.getElementById('signin');
const signinBtn = document.getElementById('signin__btn');
const welcome = document.getElementById('welcome');
const userId = document.getElementById('user_id');

if (localStorage.getItem('user_id')) {
    welcome.classList.add('welcome_active');
    userId.innerText = localStorage.getItem('user_id');
} else {
    signin.classList.add('signin_active');
}

signinBtn.addEventListener('click', event => {
    event.preventDefault();

    const xhr = new XMLHttpRequest();
    const formData = new FormData(document.getElementById('signin__form'));

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    xhr.responseType = 'json';
    xhr.onload = () => {
        if (xhr.response.success === true) {
            signin.classList.remove('signin_active');
            welcome.classList.add('welcome_active');
            userId.innerText = xhr.response.user_id;
            localStorage.setItem('user_id', xhr.response.user_id);
            signinBtn.reset();
        } else {
            alert("«Неверный логин/пароль»");
            signinBtn.reset();
        };
    };
    xhr.send(formData);
});
