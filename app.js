const express = require('express');
const session = require('express-session');
const passport = require('passport');

require('./src/config/passportFacebook');

const facebookRoutes = require('./src/routes/facebookRoutes');

const app = express();

app.use(session({ secret: 'seuSegredo', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', facebookRoutes);

module.exports = app;
