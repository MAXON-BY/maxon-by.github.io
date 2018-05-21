/*
    *  ЗАДАНИЕ №2
    *
    *  1) При помощи JS создать DIV,
    *  1.1)задать ему css class,
    *
    *  2) при помощи цикла for добавить в него несколько элементов a
    *  2.1) установить у них textContent
    *  2.3) добавить ссылки при помощи setAttribute
    *
    * */

//////.......... Задание выполнил Максим Нырков
var h1 = document.createElement('h1');
h1.textContent = 'Задание выполнил Максим Нырков';
document.body.appendChild(h1);

// РЕШЕНИЕ задачи............

//1) При помощи JS создать DIV
var newDiv = document.createElement('div');

//1.1)задать ему css class
newDiv.className = 'container';

//2) при помощи цикла for добавить в него несколько элементов a
for (var i = 0; i < 10; i++) {
    var newLink = document.createElement('a');
    // 2.1) установить у них textContent
    newLink.textContent = 'http://onliner.by/page-' + i;
    // 2.3) добавить ссылки при помощи setAttribute
    newLink.setAttribute('href', 'http://onliner.by/page-' + i);
    newLink.setAttribute('target', '_blank');
    newDiv.appendChild(newLink);
}
// добавление ссылок на страницу
document.body.appendChild(newDiv);
