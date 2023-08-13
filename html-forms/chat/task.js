let chat = document.querySelector('.chat-widget');
let input = document.querySelector('.chat-widget__input');
const messages = document.querySelector( '.chat-widget__messages' );
let randomMessage = [
    'Вы не купили ни одного товара для того, чтобы так с нами разговаривать!',
    'К сожалению, все операторы сейчас заняты. Не пишите нам больше',
    'Ты кто такой?', 
    'Мы ничего не будем вам продавать',
    'Добрый день! Давай досвидания!'  
];
document.addEventListener('click', () => {
  chat.classList.add('chat-widget_active');
});


document.addEventListener('keydown', e => {
    if (e.keyCode === 13 && input.value != '') {
        let time = new Date().toLocaleTimeString();
        let robotMessege = randomMessage[Math.floor(Math.random()*randomMessage.length)];
        messages.innerHTML += `
        <div class="message message_client">
        <div class="message__time">${time}</div>
        <div class="message__text">
        ${input.value}
            </div>
            </div>
        `;
       
        messages.innerHTML += `
        <div class="message ">
        <div class="message__time">${time}</div>
        <div class="message__text">
        ${robotMessege}
            </div>
            </div>
        `;  
    }
});


