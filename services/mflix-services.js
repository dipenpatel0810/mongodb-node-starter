module.exports = (app) => {
    const movies = require('../src/controller/movies-controller');
    const users = require('../src/controller/users-controller');

    // get all movies 
    app.get('/movies', movies.findAll);

    //get all users
    app.get('/users', users.findAll);
}
