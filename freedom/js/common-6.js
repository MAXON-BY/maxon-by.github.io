document.addEventListener('DOMContentLoaded', function () {

    /* toggle form block */
    var formToggle = document.querySelector('.open-close');
    var formBlock = document.querySelector('.form-block');
    var createListdiv = document.querySelector('.create-list');

    formToggle.addEventListener('click', toggleForm);

    function toggleForm() {
        formBlock.classList.toggle('close')
    }

    /* забираем данные и сохраняем в объект */
    var petName     = document.querySelector('.petname'),
        petOwner    = document.querySelector('.petowner'),
        petDate     = document.querySelector('.date'),
        petTime     = document.querySelector('.time'),
        petNotes    = document.querySelector('.notes'),
        petInput    = document.querySelectorAll('input'),
        petTextarea = document.querySelector('textarea');


    /* кнопка отправки данных из формы в объект */
    var form = document.querySelector('.form-input');
    form.addEventListener('submit', addObject);

    var arr=[];
    function addObject(e){
        e.preventDefault();

        var newObject = {
            name: petName.value,
            owner: petOwner.value,
            date: petDate.value,
            time: petTime.value,
            notes: petNotes.value
        };

        arr.push(newObject);
        /* пустые поля после ввода */
        for (var i = 0; i < petInput.length; i++) {
            petInput[i].value = '';
        }
        petTextarea.value = '';

        doMarkup();
        console.log(arr);
    }

    /* функция создания блока вывода create-list-block */
    function createList(nameObj,ownerObj,dateObj,timeObj,notesObj,index,currentArr){

        /* общий блок list */
        var createListBlock = document.createElement('div');
        createListBlock.classList.add('create-list-block');

        /* ----- блок с кнопкой удаления ----- */
        var blockDelete = document.createElement('div');
        blockDelete.className = 'block-delete';

        /* создание кнопки удаления блока createListBlock */
        var btnDelete = document.createElement('span');
        btnDelete.className = 'btn-delete fa fa-window-close';
        btnDelete.onclick = function () {
            currentArr.splice(index,1);
            doMarkup();
        };

        /* ----- создание кнопки удаления блока createListBlock ----- */
        var blockDescr = document.createElement('div');
        blockDescr.className = 'block-descr';

        /* создание блока descr-wrap */
        var descrWrap = document.createElement('div');
        descrWrap.className = 'descr-wrap';

        /* создание строки h3 имени Клички Животного */
        var hName = document.createElement('h3');
        hName.className = 'name';
        hName.textContent = nameObj;

        /* создание строки вывода Даты и Времени */
        var dateTime = document.createElement('p');
        dateTime.className = 'date';
        dateTime.textContent = dateObj +' '+ timeObj;

        /*  создание Owner - хозяина */
        var owner = document.createElement('p');
        owner.className = 'owner';

        /*  внутренний тег SPAN */
        var ownerSpan = document.createElement('span');
        ownerSpan.textContent  = 'Owner: ';

        /*  внутренний тег SPAN с выводом Имени хозяина */
        var ownerInSpan = document.createElement('span');
        ownerInSpan.textContent = ownerObj;

        /*  создание текстового блока */
        var text = document.createElement('p');
        text.className = 'text';
        text.textContent = notesObj;

        /* собираем и оборачиваем элементы в один блок .create-list */
        createListdiv.appendChild(createListBlock);
        createListBlock.appendChild(blockDelete);
        blockDelete.appendChild(btnDelete);
        createListBlock.appendChild(blockDescr);
        blockDescr.appendChild(descrWrap);
        descrWrap.appendChild(hName);
        descrWrap.appendChild(dateTime);
        blockDescr.appendChild(owner);
        owner.appendChild(ownerSpan);
        owner.appendChild(ownerInSpan);
        blockDescr.appendChild(text);
    }

    function doMarkup() {
        createListdiv.innerHTML = '';

        arr.map(function(item, index, currentArr){
            createList(item.name,item.owner,item.date,item.time,item.notes,index,currentArr);
        });
    }
    doMarkup();

    /* сортировка */
    var select = document.querySelector('select');
    select.onchange = function () {
        var currentSort = select.options[select.selectedIndex].value;
        function compare(a, b) {
            if (a[currentSort] > b[currentSort]) return 1;
            if (a[currentSort] < b[currentSort]) return -1;
        }
        arr.sort(compare);
        doMarkup();
    }

});