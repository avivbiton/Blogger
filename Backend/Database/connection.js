const mongoose = require("mongoose");

mongoose.connect(process.env.db_connection_string)
    .then(() => {
        console.log("Connected to the database successfully");
    }).catch(error => {
        console.error("Failed to connect to database \n" + error);
    });