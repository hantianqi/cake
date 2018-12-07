$(function(){
    $("<link rel='stylesheet' href='../css/footer.css'>").appendTo("head");
    //$("<link rel='stylesheet' href='../css/base.css'>").appendTo("head");
    $.ajax({
        url:"http://localhost:3000/footer.html",
        type:"get",
        success:function(res){
            $("#footer").replaceWith(res)
        }
    })
});
/*$(".footer-weixin").hover(function(){
    $('.footer-weixin-erweima').show().find('img').animate({top:0}, 200);
},function(){
    $('.footer-weixin-erweima').hide().find('img').css('top','100%');
});
 $(".footer-app").hover(function(){
    $('.footer-app-erweima').show().find('img').animate({top:0}, 200);
},function(){
    $('.footer-app-erweima').hide().find('img').css('top','100%');
})
$(document).ready(function(){
    $('div[id*="xunlei_com"]').remove();
    $('#jcps').remove();
});*/
 