const Users = require('../model/users-model');

exports.findAll = (req, res) => {
    Users.find()
        .then(users => {
            res.send(users);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Users."
            });
        });
};