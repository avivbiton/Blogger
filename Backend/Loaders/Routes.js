const postsRoute = require("../routes/posts");

module.exports = (app) => {
    app.use("/posts", postsRoute);
}