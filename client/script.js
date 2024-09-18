
document.addEventListener('DOMContentLoaded', function () {
    var dropdownButton = document.querySelector('.dropdown-button');
    var dropdownMenu = document.querySelector('.dropdown-menu');

    dropdownButton.addEventListener('click', function () {
        dropdownMenu.classList.toggle('show');
    });

    // Fechar o menu quando clicar fora dele
    document.addEventListener('click', function (event) {
        if (!dropdownButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.remove('show');
        }
    });
});