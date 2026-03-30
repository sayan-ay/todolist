const express=require("express");
const router = express.Router();
const Task=require("../Models/tasks");



router.get("/", (req,res)=>{


    Task.find().lean()
        .then(
            tasks =>
            {
                const items=tasks;
                res.render("index",{ items });
            }
        )
        .catch(err =>
            {
            console.log(`error has occurred ${err}`);
            res.send("error");
            }

        );



})

module.exports=router;
