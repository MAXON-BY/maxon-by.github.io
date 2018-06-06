document.addEventListener('DOMContentLoaded', function () {

    var messageWindow = document.querySelector('.message-window'),
        messageAdd    = document.querySelector('.message-add');
    var arr=[];

    messageAdd.addEventListener('click', createNewMessage);

    /* функция создания блока вывода create-list-block */
    function Message(text,offsetX,offsetY){

        this.text = text;
        this.offsetTop = offsetX;
        this.offsetLeft = offsetY;

        this.div;

        this.drawDiv = function() {
            var that = this;

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
                                console.log(currentArr);
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

        };


        /* позиционирование элемента в пространстве */
        var mouseX = 0;
        var mouseY = 0;
        var divY = offsetY;
        var divX = offsetX;

        var x = localStorage.getItem('x');
        var y = localStorage.getItem('y');

        function dragElement(e) {
            mouseX = e.pageX;
            mouseY = e.pageY;
            messageBlock.style.left = (mouseX - deltaX) + "px";
            messageBlock.style.top = (mouseY - deltaY) + "px";
            localStorage.setItem('x', (mouseX - deltaX));
            localStorage.setItem('y', (mouseY - deltaY));
        }


        messageBlock.onmousedown = function (e) {
            mouseX = e.pageX;
            mouseY = e.pageY;
            divY = messageBlock.offsetTop;
            divX = messageBlock.offsetLeft;
            deltaX = mouseX - divX;
            deltaY = mouseY - divY;
            window.addEventListener("mousemove", dragElement);
        };

        messageBlock.onmouseup = function (e) {
            window.removeEventListener("mousemove", dragElement);
        };

    }

    function createNewMessage(e){
        e.preventDefault();

        var note = new createMessage();

        arr.push(note);
        console.log(arr);
    }

    function doMarkup() {
        messageWindow.innerHTML = '';
        createMessage();
    }
    doMarkup();

});
