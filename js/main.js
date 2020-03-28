$(document).ready(function () {
    let tabsLink = $('.tabs__link');

    tabsLink.on('click', function (e) {
        e.preventDefault();
        let activeTab = $(this).attr('href');

        $('.visible').toggleClass('visible');
        $(activeTab).toggleClass('visible');
        $('.tabs__link--active').toggleClass('tabs__link--active');
        $(this).toggleClass('tabs__link--active');
    });
});