const mongoose = require('mongoose');

mongoose.connect('mongodb://db/mydatabase')
    .then(db => console.log('DB is connected', db.connection.host))
    .catch(err => console.error(err));