const express = require("express");
const router = express.Router();

const Post = require("../Models/Post");

router.get("/", (req, res, next) => {
    Post.find({}, null, { limit: 10 }, (error, results) => {
        if (error) return next(error);
        return res.json(results);
    });
});


router.post("/", async (req, res, next) => {

    const { title, text } = req.body;
    const newPost = new Post({
        title: title,
        text: text
    });

    try {
        await newPost.save();
        return res.json({ saved: true });
    }
    catch(error) {
        next(error);
    }
});

module.exports = router;
