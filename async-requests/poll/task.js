let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();

xhr.onreadystatechange = function() {
  if (xhr.readyState === xhr.DONE) {
    let title = document.querySelector('.poll__title');
    let buttons = document.querySelector('.poll__answers');
    title.innerHTML = JSON.parse(xhr.responseText).data.title
    let itemsArr =  JSON.parse(xhr.responseText).data.answers
    itemsArr.forEach(elem => {
      let button = document.createElement('button');
      button.className = 'poll__answer';   
      button.innerHTML = elem;
      buttons.append(button)  
      button.onclick = function() {
        alert('Спасибо, Ваш голос засчитан!');
         };      
      });
   };
};
 