const express = require('express');

// create express app
const app = express();

// define a simple route
app.get('/', (req, res) => {
    res.json({ "message": "MongoDb Node Starter Sample Code" });
});
// other routes
require('../services/mongo-services')(app);

// Configuring the database
const dbConfig = require('../config/config');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to MongoDB Database");
}).catch(err => {
    console.log('Could not connect to the Database. Exiting now!', err);
    process.exit();
});

// listen for requests
app.listen(process.env.PORT || 3000, () => {
    console.log("Server is listening on port 3000");
});