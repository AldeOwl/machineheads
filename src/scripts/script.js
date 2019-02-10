let modelItem = ['4','4s','5','5s','SE','6','6Plus','6s','7','7Plus','8','8Plus','X','Xs','XsMax'];

let problem = [
    {
        title: 'Дисплей',
        problem: [
            'Разбит экран',
            'Не работает экран',
            'Разбит экран',
            'Не работает экран',
            'Разбит экран',
            'Не работает экран',
            'Разбит экран',
            'Не работает экран',
        ]
    },
    {
        title: 'Электроника',
        problem: [
            'Разбит экран',
            'Не работает экран',
            'Разбит экран',
            'Не работает экран',
            'Разбит экран',
            'Не работает экран',
            'Разбит экран',
        ]
    },
    {
        title: 'Корпус',
        problem: [
            'Разбит экран',
            'Не работает экран',
            'Разбит экран',
            'Не работает экран',
            'Разбит экран',
            'Не работает экран',
            'Разбит экран',
        ]
    },
    {
        title: 'Фурнитура',
        problem: [
            'Разбит экран',
            'Не работает экран',
            'Разбит экран',
            'Не работает экран',
            'Разбит экран',
            'Не работает экран',
            'Разбит экран',
        ]
    },
    {
        title: 'Аудио',
        problem: [
            'Разбит экран',
            'Не работает экран',
            'Разбит экран',
            'Не работает экран',
            'Разбит экран',
            'Не работает экран',
            'Разбит экран',
        ]
    }
];

//функция рисует меню моделей Iphone в выпадающем меню
function drowProblemModel(){
    $("<h4 class='problem-model__title'>Выберте модель</h4>").prependTo($(".device-problem"));
    $( ".device-problem" ).prepend( "<div class='problem-model'>" );
    
    modelItem.forEach(item => {
        $("<span class='problem-model__item'></span>").html(item)
            .appendTo($(".problem-model"));
    });
    $("<a class='problem-model__btn'>Все iPhone</a>").appendTo($(".problem-model"));
}
//функция рисует список возможных неисправностей по категориям
function drowProblemList(arr){
    arr.forEach(item => {
        let table = $('<div/>', {
            class:  'problem-list__table',
        });
        let title = $('<h5/>', {
            class:  'problem-list__table-title',
            text: item.title
        });
        table.append(title);
        item.problem.forEach(problem => {
            let text = $('<a/>', {
                class:  'problem-list__table-item',
                text: problem
            });
            table.append(text);
        });
        $(".problem-list").append(table);
    });
}

//обработка кликов по всем менюшкам и кнопкам
$('#repairs').on('click', () => {
    $('.drop-window-problem').css('display', 'none');
    $('.drop-window-pair').toggle();
});
$('#problem').on('click', () => {
    $('.drop-window-pair').css('display', 'none');
    $('.drop-window-problem').toggle();
});
$('#mobile-repairs').on('click', () => {
    $('.mobile-menu').removeClass('mobile-menu-active');
    $('.drop-window-problem').css('display', 'none');
    $('.drop-window-pair').toggle();
});
$('#mobile-problem').on('click', () => {
    $('.mobile-menu').removeClass('mobile-menu-active');
    $('.drop-window-pair').css('display', 'none');
    $('.drop-window-problem').toggle();
});
$('#pairClose').on('click', () => {
    $('.drop-window-pair').toggle();
});
$('#problemClose').on('click', () => {
    $('.drop-window-problem').toggle();
});
$('.device-menu__item').on('click', function() {
    $('.device-menu__item').removeClass('device-menu__item-active');
    $(this).addClass('device-menu__item-active');
});
$('#menu-btn').on('click', function() {
    $('.mobile-menu').addClass('mobile-menu-active');
});
$('#main-btn').on('click', function() {
    $('.mobile-menu').addClass('mobile-menu-active');
});
$('#menu-btn').on('click', function() {
    $('.mobile-menu').removeClass('mobile-menu-active');
});
$('#checkPrice').on('click', function() {
    $('.thank-you').addClass('thank-you-active');
});
$('#thankYouClose').on('click', function() {
    $('.thank-you').removeClass('thank-you-active');
});
$('#thankYouBtn').on('click', function() {
    $('.thank-you').removeClass('thank-you-active');
});
$('#diagnostic').on('click', function() {
    $('.singup').addClass('singup-active');
});
$('#singUpClose').on('click', function() {
    $('.singup').removeClass('singup-active');
});
$('#singUp').on('click', function() {
    $('.singup').removeClass('singup-active');
    $('.thank-you').addClass('thank-you-active');
});
$('#diagnosticMobile').on('click', function() {
    $('.mobile-menu').removeClass('mobile-menu-active');
    $('.singup').addClass('singup-active');
});
$('#clients').on('mouseover', function() {
    $('.clients').show();
});
$('#clients').on('mouseout', function() {
    $('.clients').hide();
});
$('.clients').on('mouseover', function() {
    $('.clients').show();
});
$('.clients').on('mouseout', function() {
    $('.clients').hide();
});
$('#mobileClients').on('click', function() {
    $('.mobile-clients').toggle();
    $('.list-menu').toggleClass('list-menu-active');
});


drowProblemModel();
drowProblemList(problem);
