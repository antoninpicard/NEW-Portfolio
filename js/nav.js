var header = document.getElementsByTagName('header')[0];
        header.style.backgroundColor = 'transparent';

        window.onscroll = function (event) {
            var scroll = window.pageYOffset;
            if (scroll < 150) {

                header.style.backgroundColor = 'transparent';
            } else {
                header.style.backgroundColor = 'black';
            }
        }