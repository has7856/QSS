$(function(){


    // 햄버거 메뉴 이벤트
    $("header > div").click(function(){
        $("#menu-contents").stop().slideToggle();
        if($("#burgur").hasClass('on')){
            $("#burgur").removeClass('on');
          } else{
            $("#burgur").addClass('on');
          }  
    });
    
    // star 슬라이드 이벤트
    if($(window).width() > 767){

        let idx = 0;
        let itemcnt = $(".profile-wrap").length-2;
        $(".prev").click(function(){
            $(".profile-wrap").eq(idx).animate({
                left : "-150%"
            }).animate({
                left : "150%"
            },0);
            idx == itemcnt ? idx = 0 : idx++;
            
            $(".profile-wrap").eq(idx).animate({
                left : "50%"
            });
        });
        $(".next").click(function(){
            $(".profile-wrap").eq(idx).animate({
                left : "150%"
            })
            idx == 0 ? idx = itemcnt : idx--;
            
            $(".profile-wrap").eq(idx).animate({
                left : "-150%"
            },0).animate({
                left : "50%"
            });
        });
        $("#submenu li").click(function(){
            $(".contents").fadeToggle();
        });
    }


    // 이미지 갤러리
    $('#photo-inner img').click(function(event) {
        event.preventDefault();
        var src = $(this).attr('src');
        $('#photo>img').attr({src: src}).css({display: 'none'}).fadeIn(800);
    });


    // about.html

    $(".about-contents p").delay(3000).animate({
        width : 0
    },1000);
});