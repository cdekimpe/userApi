const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    User = require('./api/models/userModel'),
    bodyParser = require('body-parser');

// Mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Userdb', { useMongoClient: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((req, res) => res.status(404).send({ url: req.originalUrl + ' not found'}));

var routes = require('./api/routes/userRoutes');
routes(app);

app.listen(port);

console.log('User RESTful API server started on: ' + port);