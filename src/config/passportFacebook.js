const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const pool = require('../config/db');
const facebookService = require('../services/facebookService');


passport.use(new FacebookStrategy({
  clientID: process.env.FACEBOOK_APP_ID,
  clientSecret: process.env.FACEBOOK_APP_SECRET,
  callbackURL: process.env.FACEBOOK_CALLBACK_URL,
  profileFields: ['id', 'displayName', 'emails']
}, facebookService.handleFacebookLogin));


passport.serializeUser((user, done) => {
  done(null, user.id); 
});


passport.deserializeUser(async (id, done) => {
  try {
    const [rows] = await pool.query('SELECT * FROM clientes WHERE id = ?', [id]);
    const user = rows[0];
    if (!user) return done(null, false);

    delete user.senha; 
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

module.exports = passport;
