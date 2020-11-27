const mongoose = require('mongoose');

const MoviesSchema = mongoose.Schema({
    title: { type: String },
    plot: { type: String }
});

module.exports = mongoose.model('movies', MoviesSchema);