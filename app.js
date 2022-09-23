const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
var cors = require('cors')
require('dotenv/config');


const subjectRoute = require('./routes/subjects');
const trainingRoute = require('./routes/trainings');
const userRoute = require('./routes/users');

// Middlewares
app.use(cors())
app.use(bodyParser.json())
app.use(passport.initialize());
require('./middleware/passport')(passport);

app.use('/subjects', subjectRoute);
app.use('/trainings', trainingRoute);
app.use('/users', userRoute);

app.get('/', (req, res) => {
    res.send('testing');
})

mongoose.connect(process.env.DB_CONNECTION, () => console.log('Connected to DB'));

app.listen(3000);