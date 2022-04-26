$(function(){
    $("header > div").click(function(){
        $("#menu-contents").slideToggle();
        if($("#burgur").hasClass('on')){
            $("#burgur").removeClass('on');
          } else{
            $("#burgur").addClass('on');
          }  
    });
    
    let idx = 0;
    let itemcnt = $(".profile-wrap").length-1;
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
});