const Loader = require("./Loaders/Loader");
const Middleware = require("./Loaders/Middleware");
const Routes = require("./Loaders/Routes");

function bootstrap(app) {
    const loader = new Loader(app);

    loader.Load(Middleware);
    loader.Load(Routes);

    app.use(function (req, res, next) {
        return res.status(404).send("404 - Not Found");
    });

    app.use(function (error, req, res, next) {
        if(process.env.NODE_ENV != "Production") {
            return res.status(500).send(error);
        }else{
            return res.status(500).send("500 - Internal server error");
        }
    });
}

module.exports = bootstrap;