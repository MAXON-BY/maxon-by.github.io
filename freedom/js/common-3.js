
var input =   document.querySelector('input');
var button =  document.querySelector('button');
var ul =      document.querySelector('ul');
var newLi =   document.createElement('li');
var newLink = document.createElement('a');

/* кнопка добавления текста в ссылку */
button.addEventListener('click', copyText);

/* функция добаляет текст в li  */
function copyText(event){
    event.preventDefault();

    /* проверка на пустоту */
    if (input.value === '') return alert('Пустой ссылки не бывает! Введите текст!');

    document.querySelector('.add-list-out-none').style.display = 'none';
    document.querySelector('.add-list-out-have').style.visibility = 'visible';

    /* новая ссылка */
    newLink.setAttribute('href', input.value);
    newLink.setAttribute('target', '_blank');
    /* добавляем текст в ссылку */
    newLink.innerText = input.value;
    /* переносим ссылку в ul li */
    newLi.appendChild(newLink);
    ul.appendChild(newLi);

    // клонируем
    var newLiLink = newLi.cloneNode(true);
    // вставим её после текущего сообщения
    ul.appendChild(newLiLink);

    /* псле отправки становится пустым полем ввода */
    input.value = '';
}
