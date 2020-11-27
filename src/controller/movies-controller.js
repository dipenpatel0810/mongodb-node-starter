const Movies = require('../model/movies-model');

exports.findAll = (req, res) => {
    Movies.find()
        .then(movies => {
            res.send(movies);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Movies."
            });
        });
};