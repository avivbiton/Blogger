require("dotenv").config();
const path = require("path");
const express = require('express');
const helmet = require("helmet");
const bootstrapper = require("./Backend/bootstrapper");

const app = express();

const PORT = process.env.PORT || 4000;

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));


require("./Backend/Database/connection");
bootstrapper(app);

app.listen(PORT, () => {
    console.log(`Application running on port ${PORT}`);
});

module.exports = app;
