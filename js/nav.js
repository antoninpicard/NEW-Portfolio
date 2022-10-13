var header = document.getElementsByTagName('header')[0];
        header.style.backgroundColor = 'transparent';

        // trigger this function every time the user scrolls
        window.onscroll = function (event) {
            var scroll = window.pageYOffset;
            if (scroll < 150) {
                // green
                header.style.backgroundColor = 'transparent';
            } else {
                // purple
                header.style.backgroundColor = 'black';
            }
        }