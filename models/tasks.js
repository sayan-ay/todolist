const mongoose=require('mongoose');

const tasksSchema= new mongoose.Schema(

{
    taskName:
        {
            type:String,
            required:true
        },
        time:
            {
                type:String,
                required:true
            },
    description:
        {
            type:String,
            required:false
        }
    }

);

module.exports=mongoose.model('Task',tasksSchema);