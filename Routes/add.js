const express=require("express");
const router = express.Router();
const Task=require("../Models/tasks");


router.get("/",(req,res)=>{
    res.render("add");
})



router.post("/",(req,res)=>{
    console.log(req.body);

    Task.create(
        {
            taskName: req.body.task,
            time: req.body.time,
            description: req.body.description,
        }
    )
        .then((doc)=>{console.log("doc created")})
        .catch((err)=>{console.log(err)});




    res.redirect("/../");
})

module.exports= router;
