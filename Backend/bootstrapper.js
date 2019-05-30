const Loader = require("./Loaders/Loader");
const Middleware = require("./Loaders/Middleware");
const Routes = require("./Loaders/Routes");




function bootstrap(app) {

    const loader = new Loader(app);

    loader.Load(Middleware);
    loader.Load(Routes);

    

}

module.exports = bootstrap;