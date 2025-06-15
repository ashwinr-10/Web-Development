const Todo = require("../models/Todo");

exports.deleteTodo = async (req, res) => {
    try{
        const {id} = req.params;
        await Todo.findByIdAndDelete(id);
    
        res.status(200).json({
            success: true,
            message: `Todo with ID ${id} deleted successfully`
        });
    }
    catch(err) {
        console.error(err);
        res.status(500).json({
            success: false,
            error: err.message,
            message: 'Server Error',
        });
    }
}