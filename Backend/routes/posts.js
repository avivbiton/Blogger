const express = require("express");
const router = express.Router();

const restrictedEndpoint = require("../middleware/restrictedEndpoint");
const Post = require("../Models/Post");

router.get("/", (req, res, next) => {
    Post.find({}, "_id title image date", { limit: 10 }, (error, results) => {
        if (error) return next(error);
        return res.json(results);
    });
});

router.get("/:id", async (req, res, next) => {

    const id = req.params.id;
    try {
        const post = await Post.findById(id);
        return res.json(post);
    } catch (error) {
        next(error);
    }

});


router.post("/",
    restrictedEndpoint,
    async (req, res, next) => {

        const { title, text, image } = req.body;
        const newPost = new Post({
            title: title,
            text: text,
            image: image
        });

        try {
            await newPost.save();
            return res.json({ saved: true });
        }
        catch (error) {
            next(error);
        }
    });

module.exports = router;
