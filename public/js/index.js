$(function(){
    $.ajax({
        url:"http://localhost:3000/index/getImg",
        type:"get",
        dataType:"json",
        success:function(res){
            console.log(res);
            var {imgUrl}=res[0];
            //console.log(img);
            var html=`<img src="${imgUrl}" class="img_back"/>`;
            var divCard=document.querySelector("#fl>a");
            divCard.innerHTML=html;

            var {imgUrl}=res[2];
            var html=`<img src="${imgUrl}" class="img_back"/>`;
            var divCard=document.querySelector("#fl a:nth-child(2)");
            divCard.innerHTML=html;

            var {imgUrl}=res[1];
            var html=`<img src="${imgUrl}" class="img_back"/>`;
            var divCard=document.querySelector("#fl a:nth-child(3)");
            divCard.innerHTML=html;

            var {imgUrl}=res[3];
            var html=`<img src="${imgUrl}" class="img_back"/>`;
            var divCard=document.querySelector("#fl a:nth-child(4)");
            divCard.innerHTML=html;

            var {imgUrl}=res[4];
            var html=`<img src="${imgUrl}" class="img_back"/>`;
            var divCard=document.querySelector("#fl a:nth-child(5)");
            divCard.innerHTML=html;
        }
    })
})