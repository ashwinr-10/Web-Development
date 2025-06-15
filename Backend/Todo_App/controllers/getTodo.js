const Todo = require("../models/Todo");

exports.getTodo = async(req,res) => {
    try{
        const todos = await Todo.find({});  //{} is an empty filter object used with Mongoose
                                            // {} → no criteria -> return all documents
                                            // { completed: true } → only return documents where completed is true
        res.status(200)
            .json({
                success:true,
                data:todos,
                message:"Entire Todo Data is fetched",
            });
    } catch(err) {
        console.error(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:'Server Error',
        });
       
    }
}

exports.getTodoById = async(req, res) => {
    try {
        const id = req.params.id; // Extracting the id from the request parameters
        const todo = await findById( {_id: id})

        //if data not found for the given id
        if(!todo) {
        return res.status(404).json({
            success:false,
            message:"No Data Found woth Given Id",
        })
       }

       //if data found for the given id
       res.status(200).json({
        success:true,
        data:todo,
        message: `Todo ${id} data successfully fetched`,
       })
    }
    catch(err) {
        console.error(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:'Server Error',
        });
    
    }
}