const express = require("express");
const router = express.Router();

const restrictedEndpoint = require("../middleware/restrictedEndpoint");

router.get("/validate", restrictedEndpoint, (req, res, next) => {
    return res.status(200).json({ Authorized: true });
});

module.exports = router;