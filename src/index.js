const express = require('express');

// create express app
const app = express();

// define a simple route
app.get('/', (req, res) => {
    res.json({ "message": "MongoDb Node Starter Sample Code" });
});

require('../services/mongo-services')(app);

// listen for requests
app.listen(process.env.PORT || 3000, () => {
    console.log("Server is listening on port 3000");
});