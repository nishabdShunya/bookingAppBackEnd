const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const userRoutes = require('./routes/user');
const sequelize = require('./util/database');

app.use(bodyParser.json({ extended: false }));
app.use(cors());

app.use('/user', userRoutes);

sequelize.sync()
    .then(result => {
        app.listen(3000);
    })
    .catch(err => { console.log(err) });