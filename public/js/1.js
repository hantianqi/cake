/**
 * 页面轮播
 */
$((()=>{
    let imgArr = ["b5","b4","b3","b2","b1"];
let index  = 0;
let timer  = null;
/**
 * 播放下一张
 */
function nextImg(){
    imgArr.push(imgArr[0]);
    imgArr.shift();
    $("#show li").each((i,e)=>$(e).removeClass().addClass(imgArr[i]));
    index ++;
    if (index > 4) index = 0;
}
/**
 * 播放上一张
 */
function prevImg(){
    imgArr.push(imgArr[0]);
    imgArr.shift();
    $("#show li").each((i,e)=>$(e).removeClass().addClass(imgArr[i]));
    index --;
    if (index<0) index = 5;
}
$("#banner").hover(function(){
    clearInterval(timer);
},function(){
    nextImg();
    prevImg();
});
//上一张绑定点击和移入移出事件
$("#prev").click(()=>prevImg()).mouseover(()=>{
    clearInterval(timer);
timer = null;
}).mouseleave(()=>timer = setInterval(nextImg,5000));
//下一张绑定点击和移入移出事件
$("#next").click(()=>nextImg()).mouseover(()=>{
    clearInterval(timer);
timer = null;
}).mouseleave(()=>timer = setInterval(nextImg,5000));
//鼠标移入清除定时器，鼠标移出开始定时器
$("#show").mouseover(()=>{
    clearInterval(timer);
timer = null;
}).mouseleave(()=>timer = setInterval(nextImg,5000));
//进入页面后自动开始定时器
timer = setInterval(nextImg,5000);
})());
/*$(function(){
    var timer = null;
    var cur = 0;
    var len = $("#ads li").length;

    //鼠标滑过容器停止播放
    $("#ads").hover(function(){
        clearInterval(timer);
    },function(){
        showImg();
    });
    // 遍历所有圆点导航实现划过切换至对应的图片
    $("#ads li").click(function(){
        clearInterval(timer);
        cur = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        $("#ads img").eq(cur).fadeIn(200).siblings("img").fadeOut(200);
    });

    //定义图片切换函数
    function showImg(){
        timer = setInterval(function(){
            cur++;
            if( cur>=len ){ cur=0; }
            $("#ads img").eq( cur ).fadeIn(200).siblings("img").fadeOut(200);
            $("#ads li ").eq( cur ).addClass("active").siblings().removeClass("active");

        },1000);
    }
    showImg();
});*/
/*
  页面轮播
 */
/*$((()=>{
    let imgArr = ["b5","b4","b3","b2","b1"];
let index  = 0;
let timer  = null;*/
/**
 * 播放下一张
 */
/*function nextImg(){
    imgArr.push(imgArr[0]);
    imgArr.shift();
    $("#show li").each((i,e)=>$(e).removeClass().addClass(imgArr[i]));
    index ++;
    if (index > 4) index = 0;
}*/
/**
 * 播放上一张
 */
/*function prevImg(){
    imgArr.push(imgArr[0]);
    imgArr.shift();
    $("#show li").each((i,e)=>$(e).removeClass().addClass(imgArr[i]));
    index --;
    if (index<0) index = 5;
}
//上一张绑定点击和移入移出事件
$("#prev").click(()=>prevImg()).mouseover(()=>{
    clearInterval(timer);
timer = null;
}).mouseleave(()=>timer = setInterval(nextImg,3000));
//下一张绑定点击和移入移出事件
$("#next").click(()=>nextImg()).mouseover(()=>{
    clearInterval(timer);
timer = null;
}).mouseleave(()=>timer = setInterval(nextImg,3000));
//鼠标移入清除定时器，鼠标移出开始定时器
$("#show").mouseover(()=>{
    clearInterval(timer);
timer = null;
}).mouseleave(()=>timer = setInterval(nextImg,3000));
//进入页面后自动开始定时器
timer = setInterval(nextImg,3000);
})());
*/