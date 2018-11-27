$(document).ready(ready);

let element = $('#top');
let main = $('main');

function ready() {
    element.click(steady)
    //setTimeout(steady, 5000)
}

function steady() {
    if(element.hasClass('upMe')) {
        element.removeClass('upMe');
        main.removeClass('main-height')
    } else {
        element.addClass('upMe');
        main.addClass('main-height')
    }
};
