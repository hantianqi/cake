const express=require("express")
const router=express.Router()
const pool=require("../pool")

router.get("/getImg",(req,res)=>{
    var sql="SELECT * FROM xm_img";
    pool.query(sql,(err,result)=>{
        if(err)   console.log(err);
        res.send(result);
        //var img=result[0].imgUrl;
        //res.send(img);
    })
})
module.exports=router;