/**
 * ҳ���ֲ�
 */
$((()=>{
    let imgArr = ["b5","b4","b3","b2","b1"];
let index  = 0;
let timer  = null;
/**
 * ������һ��
 */
function nextImg(){
    imgArr.push(imgArr[0]);
    imgArr.shift();
    $("#show li").each((i,e)=>$(e).removeClass().addClass(imgArr[i]));
    index ++;
    if (index > 4) index = 0;
}
/**
 * ������һ��
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
//��һ�Ű󶨵���������Ƴ��¼�
$("#prev").click(()=>prevImg()).mouseover(()=>{
    clearInterval(timer);
timer = null;
}).mouseleave(()=>timer = setInterval(nextImg,5000));
//��һ�Ű󶨵���������Ƴ��¼�
$("#next").click(()=>nextImg()).mouseover(()=>{
    clearInterval(timer);
timer = null;
}).mouseleave(()=>timer = setInterval(nextImg,5000));
//������������ʱ��������Ƴ���ʼ��ʱ��
$("#show").mouseover(()=>{
    clearInterval(timer);
timer = null;
}).mouseleave(()=>timer = setInterval(nextImg,5000));
//����ҳ����Զ���ʼ��ʱ��
timer = setInterval(nextImg,5000);
})());
/*$(function(){
    var timer = null;
    var cur = 0;
    var len = $("#ads li").length;

    //��껬������ֹͣ����
    $("#ads").hover(function(){
        clearInterval(timer);
    },function(){
        showImg();
    });
    // ��������Բ�㵼��ʵ�ֻ����л�����Ӧ��ͼƬ
    $("#ads li").click(function(){
        clearInterval(timer);
        cur = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        $("#ads img").eq(cur).fadeIn(200).siblings("img").fadeOut(200);
    });

    //����ͼƬ�л�����
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
  ҳ���ֲ�
 */
/*$((()=>{
    let imgArr = ["b5","b4","b3","b2","b1"];
let index  = 0;
let timer  = null;*/
/**
 * ������һ��
 */
/*function nextImg(){
    imgArr.push(imgArr[0]);
    imgArr.shift();
    $("#show li").each((i,e)=>$(e).removeClass().addClass(imgArr[i]));
    index ++;
    if (index > 4) index = 0;
}*/
/**
 * ������һ��
 */
/*function prevImg(){
    imgArr.push(imgArr[0]);
    imgArr.shift();
    $("#show li").each((i,e)=>$(e).removeClass().addClass(imgArr[i]));
    index --;
    if (index<0) index = 5;
}
//��һ�Ű󶨵���������Ƴ��¼�
$("#prev").click(()=>prevImg()).mouseover(()=>{
    clearInterval(timer);
timer = null;
}).mouseleave(()=>timer = setInterval(nextImg,3000));
//��һ�Ű󶨵���������Ƴ��¼�
$("#next").click(()=>nextImg()).mouseover(()=>{
    clearInterval(timer);
timer = null;
}).mouseleave(()=>timer = setInterval(nextImg,3000));
//������������ʱ��������Ƴ���ʼ��ʱ��
$("#show").mouseover(()=>{
    clearInterval(timer);
timer = null;
}).mouseleave(()=>timer = setInterval(nextImg,3000));
//����ҳ����Զ���ʼ��ʱ��
timer = setInterval(nextImg,3000);
})());
*/