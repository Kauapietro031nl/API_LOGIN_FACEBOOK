const FacebookStrategy = require('passport-facebook').Strategy;
const facebookService = require('../services/facebookService');

const getFacebookStrategy = () => {
  return new FacebookStrategy({
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: process.env.FACEBOOK_CALLBACK_URL,
    profileFields: ['id', 'displayName', 'emails']
  }, facebookService.handleFacebookLogin);
};

module.exports = getFacebookStrategy;
