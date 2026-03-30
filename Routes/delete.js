const express=require("express");
const router = express.Router();
const Task=require("../Models/tasks");

router.get("/",(req,res)=>{
    const id=req.query.id;
    Task.findByIdAndDelete(id)
        .then((task)=>{res.redirect("../")})
        .catch((err)=>{console.log("error occurred"+err)});
})

module.exports = router;