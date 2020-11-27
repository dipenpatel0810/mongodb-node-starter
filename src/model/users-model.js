const mongoose = require('mongoose');

const UsersSchema = mongoose.Schema({
    name: { type: String },
    email: { type: String },
    password: { type: String }
});

module.exports = mongoose.model('users', UsersSchema);