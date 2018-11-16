
(function () {
    'use strict'

    var $html = document.querySelector('html');
    var $btnMenu = document.querySelector('.header-nav__hamburgger');

    // INDPENDENTE DE JAVASCRIPT NOSSO HTML TEM QUE ESTAR SEMPRE FUNCIONANDO
    $html.classList.remove('no-js');
    $html.classList.add('js');

    $btnMenu.addEventListener('click', function(e) {
        $html = document.querySelector('html');

        $html.classList.toggle('menu-opened');
    });

})();