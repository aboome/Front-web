
/**
 * Created by zhan on 2016/11/4.
 */

$(function(){
    windowWidth();
    window.onresize = windowWidth;	
});

var page = {
    w: '',
    h: ''
};

function windowWidth () {
    page.w = $(window).width();
    page.h = $(window).height();

    if(page.w < 1024){
        $('.left-menu-opr').css('display','block');
        $('.left-menu').css('left', '-220px');
        $('.left-menu-opr').css('left', '2px');

        $('#right-container').css('margin-left','25px');
        $('#right-container').css('width', 1200 - 30 + 'px');

    } else {
        $('.left-menu').css('left', '0');
        $('#right-container').css('margin-left','225px');
        $('#right-container').css('margin-left','225px');
        $('#right-container').css('width', page.w - 230 + 'px');

    }

    $('.left-menu').css('height', page.h - 46 + 'px');
    $("#bridgeTree").css('height', page.h - 2 + 'px');
    $('#allmap').css('height', page.h - 46 + 'px');
    /*$('body').css('width', page.w + $(document).scrollLeft() + 'px');*/

}

$('#left-menu-opr-js').on('click', function(){
    $('.left-menu').css('left', '0px');
    $('.left-menu-opr').css('left', '222px');
    $('.left-menu-opr').css('display','none');
    $('#right-content').css('left','222px');
    $('#right-content').css('width', page.w -225 + 'px');
    $('#right-container').css('margin-left','225px');
    $('#right-container').css('width', 1200 - 225 + 'px');
});


/*退出登录*/
$(".menu-body").on('click','#exit',function(){
    $.cookie('userName', '', {
        expires: 7,
        path: '/'
    });
    window.location.href = 'login.html';
});

