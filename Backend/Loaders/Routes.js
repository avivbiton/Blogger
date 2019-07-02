const postsRoute = require("../routes/posts");
const authRoute = require("../routes/auth");

module.exports = (app) => {
    app.use("/posts", postsRoute);
    app.use("/auth", authRoute);
}