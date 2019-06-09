const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title: String,
    text: String,
    date: {
        type: Date,
        default: Date.now
    },
    image: {
        type: String,
        default: "/images/not-found.jpg"
    }
});


module.exports = mongoose.model("Post", postSchema);