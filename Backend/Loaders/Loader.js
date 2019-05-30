class Loader {
    constructor(app) {
        this.app = app;
    }

    Load(context) {
        if(typeof context !== "function") {
            throw new Error("Context is not a function");
        }

        context(this.app);
    }
}

module.exports = Loader;