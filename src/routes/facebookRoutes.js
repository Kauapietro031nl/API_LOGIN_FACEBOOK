const express = require('express');
const passport = require('passport');
const router = express.Router();
const facebookController = require('../controllers/facebookController');


router.get('/facebook', passport.authenticate('facebook', { scope: ['email'] }));


router.get('/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  facebookController.facebookCallback
);

module.exports = router;
