const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;


// Route includes
const portfolioRouter = require('./routes/portfolio.router');
/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(express.static('build'));
app.use(bodyParser.urlencoded({ extended: true }));
/** ---------- ROUTES ---------- **/
app.use('/portfolio', portfolioRouter);

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});