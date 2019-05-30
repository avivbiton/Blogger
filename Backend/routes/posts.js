const express = require("express");
const router = express.Router();


router.get("/", (req, res, next) => {

    return res.json([{ id: 1, text: "first Post" }, { id: 2, text: "Second post" }]);

});


module.exports = router;
