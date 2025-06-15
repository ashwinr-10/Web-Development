// import model 
const Post = require("../models/postModel");
const Comment = require("../models/commentModel");
const { response } = require("express");

// business Logic
exports.createComment = async (req, res) => {
    try {
        const { post, user, body } = req.body;

        const comment = new Comment({
            post, user, body
        })

        const savedComment = await comment.save();

     const updatedPost = await Post.findByIdAndUpdate(post, { $push: { comments: savedComment._id } },
            { new: true })
            .populate("comments") //Populates the comment array with the comments document
            .exec();

        res.json({
            post: updatedPost,
        })
    }
    catch (err) {
        return res.status(500).json({
            error : "Error while creating comment",            
        })
    }
}