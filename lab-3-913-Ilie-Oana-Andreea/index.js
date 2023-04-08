const express = require('express')
const mongoose = require('mongoose')

require('dotenv').config();
/*
const mongoString = "mongodb+srv://cranberries:MareParola@cluster0.eytfjtp.mongodb.net/test"

mongoose.connect(mongoString);
const database = mongoose.connection


database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
*/
const app = express();
const port = 4000;

app.use(express.json());


require('./routes/concertRoute.js')(app);
require('./routes/locationRoute.js')(app);
require('./routes/artistRoute.js')(app);

mongoose.connect('mongodb+srv://cranberries:MareParola@cluster0.eytfjtp.mongodb.net/test')
    .then(() => {
        console.log('Connected to database');
        app.listen(port, () => { console.log(`Hello world app listening on port ${port}!`);});
    })
    .catch(() => {
        console.log('Connection failed');
    });
