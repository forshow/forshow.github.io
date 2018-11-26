$(document).ready(ready);

let element = $('#top');

function ready() {
    element.click(steady)
    //setTimeout(steady, 5000)
}

function steady() {
    if(element.hasClass('upMe')) {
        element.removeClass('upMe')
    } else {
        element.addClass('upMe')
    }
};
