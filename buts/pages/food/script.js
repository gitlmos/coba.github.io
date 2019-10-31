// event loadmore
$(function () {
    $(".card").slice(0, 8).show();
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $(".card:hidden").slice(0, 4).show([1000], 'slide');
        if ($(".card:hidden").length == 10) {
            $("#loadMore").fadeOut("slow");
        }
        $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 1500);
    });
});