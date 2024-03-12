const {Schema, model} = require("mongoose");

const postSchema = new Schema (
    {
        image: {
            type: String
        },
        text: {
            type: String,
            required: [true]
        },
        username: {
            type: String,
            required: [true]
        },
        userId : {
            type: String,
            required: [true]
        },
        userPhoto: {
            type: String,
            required: [true]
        }
    },
    {
        timestamps: true,
    }
)

const Post = model("Post", postSchema);

module.exports = Post;