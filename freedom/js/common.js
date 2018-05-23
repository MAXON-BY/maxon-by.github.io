//alert('Приветствую! Загружается задание "Калькулятор".... Нажми "Ок" для продолжения.');
//
//var a = +prompt('Введите первое число',''),
//    b =  prompt('Введите оператор * + - /',''),
//    c = +prompt('Введите второе число','');
//
//    if (a === '' || a  === null || b === '' || b  === null || c === '' || c  === null) {
//        alert('Вы не ввели число или оператор!');
//    } else {
//        alert('Смотрим результат в консоли!');
//
//        if(b == '+'){
//            console.log(a+c);
//        } else if (b == '-'){
//            console.log(a-c);
//        } else if (b == '*'){
//            console.log(a*c);
//        } else if (b == '/'){
//            console.log(a/c);
//        } else{
//            console.log('Вы ввели неправильный оператор!!! Результат не выполнен, повторите снова!')
//        }
//    }

var arr = [];

var input = document.querySelector('input');
var form = document.querySelector('form');
var ul = document.querySelector('ul');

form.onsubmit = function (e) {
    e.preventDefault();
    var newObject = {
        name: input.value
    };
    arr.push(newObject);
    input.value = '';
    doMarkup();
    console.log(arr);
};

function doMarkup() {
    ul.innerHTML = '';
    for(var i = 0; i < arr.length; i++){
        var newLi = document.createElement('li');
        newLi.textContent = arr[i].name;
        ul.appendChild(newLi);
    }
}

doMarkup();
