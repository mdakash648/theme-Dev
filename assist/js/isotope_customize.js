//isotope start

document.addEventListener("DOMContentLoaded", function () {
    var grid = document.querySelector('.grid');
    var iso = new Isotope(grid, {
        itemSelector: '.grid-item',
        layoutMode: 'fitRows'
    });

    var buttons = document.querySelectorAll('.button');
    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            var filterValue = button.getAttribute('data-filter');
            iso.arrange({
                filter: filterValue
            });
        });
    });
});
var allButton = document.querySelector('.button[data-filter=".mobile"]');
allButton.click();


window.onload = function () {
    var buttons = document.querySelectorAll('.button');
    buttons.forEach(function (btn) {
        btn.classList.remove('active');
    });
    buttons[0].classList.add('active');
};

function toggleActive(element) {
    var buttons = document.querySelectorAll('.button');
    buttons.forEach(function (btn) {
        btn.classList.remove('active');
    });
    element.classList.add('active');
}

//isotope end