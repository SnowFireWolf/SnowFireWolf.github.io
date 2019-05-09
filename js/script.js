particlesJS.load('particles-js', '/js/particlesjs-config.json');
$(document).ready(function () {
        var icon = new WOW({
            boxClass:     'icon',
            animateClass: 'animated',
            offset:       0,
            mobile:       true,
            live:         true,
            callback:     function(box) {
                var icon = anime({
                    targets: '.icon',
                    translateX: [-100, 0], // Translate X from 100 to 200
                       scale: ['*=2', 1], // Scale from 2 times the original value to 1,
                    duration: 1500
                });
            },
            scrollContainer: null,
            resetAnimation: true,
        });
        icon.init();

        var yearNumber = new WOW({
            boxClass:     'Ynumber',
            animateClass: 'animated',
            offset:       0,
            mobile:       true,
            live:         true,
            callback:     function(box) {
                var Ynumber = anime({
                    targets: '.Ynumber',
                    innerHTML: 2019,
                    round: 1,
                    easing: 'easeInOutExpo'
                });
            },
            scrollContainer: null,
            resetAnimation: true,
        });
        yearNumber.init();
        var html5 = anime({
            targets: '#html5',
            innerHTML: '87%',
            round: 1,
            easing: 'easeInOutExpo'
        });
        var css3 = anime({
            targets: '#css3',
            innerHTML: '87%',
            round: 1,
            easing: 'easeInOutExpo'
        });
        var php = anime({
            targets: '#php',
            innerHTML: '38%',
            round: 1,
            easing: 'easeInOutExpo'
        });
        var nodejs = anime({
            targets: '#nodejs',
            innerHTML: '8%',
            round: 1,
            easing: 'easeInOutExpo'
        });
        var javascript = anime({
            targets: '#javascript',
            innerHTML: '35%',
            round: 1,
            easing: 'easeInOutExpo'
        });
        var jquery = anime({
            targets: '#jquery',
            innerHTML: '65%',
            round: 1,
            easing: 'easeInOutExpo'
        });
        var photoshop = anime({
            targets: '#photoshop',
            innerHTML: '51%',
            round: 1,
            easing: 'easeInOutExpo'
        });
        var illustrator = anime({
            targets: '#illustrator',
            innerHTML: '55%',
            round: 1,
            easing: 'easeInOutExpo'
        });

        $('#pro').click(function () {
            var progress = anime({
                targets: '#progress',
                value: [0, 50],
                round: 1,
                easing: 'easeInOutExpo'
            });
        });

        $('body').css('overflow-y', 'scroll');
});