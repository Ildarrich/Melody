$(document).ready(function() {
    var currentFloor = 2; // переменная, где хранится значение текущего этажа
    var floorPath = $(".home-image path"); //каждый отдельный этаж в SVG
    var counterUp = $(".counter-up") /*Кнопка увеличения этажа*/
    var counterDown = $(".counter-down") /*Кнопка уменьшения этажа*/
        //Функция при наведении мышью на этаж
    floorPath.on('mouseover', function() {
        floorPath.removeClass('current-floor'); //Удаляем активный класс у этажей
        currentFloor = $(this).attr('data-floor'); //подучаем значение текущего этажа
        $(".counter").text(currentFloor) //записываем значение этажа в счетчик справа
    });

    counterUp.on("click", function() { //отслеживаем клик по кнопке вверх
        if (currentFloor < 18) { //проверяем значение этажа, оно не должно быть больше 18
            currentFloor++; //прибавляем 1 этаж
            usCurrentFloor = currentFloor.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false }); //форматируем переменную с этажем, чтобы было 01, а не 1
            $(".counter").text(usCurrentFloor); //записываем значение этажа в счетчик справа
            floorPath.removeClass('current-floor'); //Удаляем активный класс у этажей
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor'); //подсвечиваем текущий этаж
        }
    });


    counterDown.on("click", function() {
        if (currentFloor > 2) {
            currentFloor--;
            usCurrentFloor = currentFloor.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
            $(".counter").text(usCurrentFloor);
            floorPath.removeClass('current-floor');
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
        }
    });
});