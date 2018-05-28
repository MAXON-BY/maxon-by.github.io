document.addEventListener('DOMContentLoaded', function () {

    var messageWindow = document.querySelector('.message-window'),
        messageAdd    = document.querySelector('.message-add'),
        textArea = document.querySelector('textarea');

    messageAdd.addEventListener('click', addObject);

    var arr=[];
    function addObject(e){
        e.preventDefault();

        var newObject = {
            text: textArea.value
        };

        arr.push(newObject);

        doMarkup();
        console.log(arr);
    }

    function doMarkup() {
        messageWindow.innerHTML = '';

        arr.map(function(item,index,currentArr){
            createMessage(item.text,index,currentArr);
        });
    }
    doMarkup();


    /* функция создания блока вывода create-list-block */
    function createMessage(textObj,index,currentArr){

        /* общий блок message */
        var messageBlock = document.createElement('div');
            messageBlock.classList.add('message');

            /* ----- блок с кнопкой удаления ----- */
            var blockDelete = document.createElement('div');
                blockDelete.className = 'delete';

                /* кнопка удаления */
                var btnDelete = document.createElement('img');
                    btnDelete.className = 'delete-btn';
                    btnDelete.setAttribute('src','https://edstoneinc.com/wp-content/themes/edstoneinc/img/trash-icon.png');
                    btnDelete.setAttribute('title','Delete message');
                    btnDelete.onclick = function () {
                        currentArr.splice(index,1);
                        doMarkup();
                    };

            /* ----- поле ввода текста ----- */
        var textareaInput = document.createElement('textarea');
            textareaInput.setAttribute('placeholder', 'Your message ...');
            textareaInput.textContent = textObj;

            /* создание блока message-btn */
            var messageBtn = document.createElement('div');
                messageBtn.className = 'message-btn';

                /* создание кнопки "Save" */
                var saveBtn = document.createElement('button');
                    saveBtn.className = 'btn btn-save';
                    saveBtn.textContent = 'Save message';
                    saveBtn.onclick = function () {
                        this.style.display = 'none';
                        editBtn.style.display = 'block';
                        textareaInput.setAttribute('disabled', 'disable');
                    };

                /* создание кнопки "Edit" */
                var editBtn = document.createElement('button');
                    editBtn.className = 'btn btn-edit';
                    editBtn.style.display = 'none';
                    editBtn.textContent = 'Edit message';
                    editBtn.onclick = function () {
                        this.style.display = 'none';
                        saveBtn.style.display = 'block';
                        textareaInput.removeAttribute('disabled');
                    };


        /* собираем и оборачиваем элементы в один блок*/
        messageWindow.appendChild(messageBlock);
        messageBlock.appendChild(blockDelete);
        blockDelete.appendChild(btnDelete);

        messageBlock.appendChild(textareaInput);

        messageBlock.appendChild(messageBtn);
        messageBtn.appendChild(saveBtn);
        messageBtn.appendChild(editBtn);



        var mouseX = 0;
        var mouseY = 0;
        var divY = 0;
        var divX = 0;

        var divForScroll = document.querySelector('.message');

        var x = localStorage.getItem('x');
        var y = localStorage.getItem('y');

        divForScroll.style.left = x;
        divForScroll.style.top = y;

        function dragElement(e) {
            mouseX = e.pageX;
            mouseY = e.pageY;
            divForScroll.style.left = (mouseX - deltaX) + "px";
            divForScroll.style.top = (mouseY - deltaY) + "px";
            localStorage.setItem('x', (mouseX - deltaX));
            localStorage.setItem('y', (mouseY - deltaY));
        }


        divForScroll.onmousedown = function (e) {
            mouseX = e.pageX;
            mouseY = e.pageY;
            divY = divForScroll.offsetTop;
            divX = divForScroll.offsetLeft;
            deltaX = mouseX - divX;
            deltaY = mouseY - divY;
            window.addEventListener("mousemove", dragElement);
        };

        divForScroll.onmouseup = function (e) {
            window.removeEventListener("mousemove", dragElement);
        };
    }




});
