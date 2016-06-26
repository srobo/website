$(function () {
    var $navigation = $("#navigation");
    var $navigationToggle = $("#navigation_toggle");

    $navigationToggle.on('click', function () {
        $navigation.fadeToggle();
    });
});
