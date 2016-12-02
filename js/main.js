


function eventInit() {

    (function () {

        const $popup = $('.aside-item-generate');
        const $openPopup = $('.content .aside .aside-content .aside-item .aside-item_link');
        const $closePopup = $('.aside-item_close');

        $closePopup.click(function () {
            $popup.css({'left': '-100%'});
        });

        $openPopup.click(function () {
            $popup.css({'left': '0%'});
        });
    }());

    // end
    (function () {
        const $popup = $('.guide-item-popup');
        const $openPopup = $('.guide-item a');
        const $closePopup = $('.popup-close');

        $closePopup.click(function () {
            $popup.css({'top': '-100%'});
        });

        $openPopup.click(function () {
            $popup.css({'top': '0%'});
        });
    }());




}
eventInit();