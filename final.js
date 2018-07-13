$(function () {
    var $element = $('.lleft');
    function fadeInOut () {
        $element.fadeIn(300, function () {
            $element.fadeOut(200, function () {
                $element.fadeIn(300, function () {
                    setTimeout(fadeInOut, 200);
                });
            });
        });
    }

    fadeInOut();
});


$(function () {
    var $element = $('.rright');
    function fadeInOut () {
        $element.fadeIn(200, function () {
            $element.fadeOut(300, function () {
                $element.fadeIn(200, function () {
                    setTimeout(fadeInOut, 300);
                });
            });
        });
    }

    fadeInOut();
});
