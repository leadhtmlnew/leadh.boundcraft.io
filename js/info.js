

$(function() {

    let body = $('body');
    let dnInfo = $('#donateInfo');

    let dnDeskBTN = $('#dnDeskBTN');
    let dnStrokeBTN = $('#dnStrokeBTN');

    dnDeskBTN.on('click', function(event) {
        event.preventDefault();

        dnInfo.addClass('dnShow');
    });

    dnStrokeBTN.on('click', function(event) {
        event.preventDefault();

        dnInfo.removeClass('dnShow');
    });
});