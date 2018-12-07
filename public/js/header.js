$(function(){
    $("<link rel='stylesheet' href='../css/header.css'>").appendTo("head");
    //$("<link rel='stylesheet' href='../css/base.css'>").appendTo("head");
    $.ajax({
        url:"http://localhost:3000/header.html",
        type:"get",
        success:function(res){
            $("#header").replaceWith(res)
        }
    })
});