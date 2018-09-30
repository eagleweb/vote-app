// BASE SETUP

// CALL THE PACKAGES
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('./config');
const path = require('path');
const helmet = require('helmet');
const questionRouter = require ("./backend/routes/questionRouter");


// connect to DB on Mongolab
mongoose.connect(config.database, {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
    console.log("connected");
});

exports.test = function(req,res) {
    res.render('test');
};

// APP CONFIGURATION =================================================
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(helmet());

app.use(cors(config.corsOptions));

app.use(morgan('dev'));


// ROUTES FOR API =====================================================

app.use('/api/question', questionRouter);


//START SERVER ========================================================
app.listen(config.port);
console.log('Server start on port ' + config.port);