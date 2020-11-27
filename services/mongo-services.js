module.exports = (app) => {
    app.get('/some/data', (req, res) => {
        res.json({ "message": "Some data from MongoDB would appear here" });
    });
}
