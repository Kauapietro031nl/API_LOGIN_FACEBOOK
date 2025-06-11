const facebookRepository = require('../repositories/facebookRepository');
const { v4: uuidv4 } = require('uuid');

async function handleFacebookLogin(accessToken, refreshToken, profile, done) {
  try {
    const facebookId = profile.id;
    const email = profile.emails?.[0]?.value || null;

    const existingUser = await facebookRepository.findByFacebookIdOrEmail(facebookId, email);

    if (existingUser) {
      if (!existingUser.facebook_id) {
        await facebookRepository.updateFacebookId(email, facebookId);
      }
      return done(null, existingUser);
    }

    const newUser = {
      id: uuidv4(),
      nome: profile.displayName,
      email,
      facebook_id: facebookId
    };

    await facebookRepository.createUser(newUser);
    return done(null, newUser);
  } catch (error) {
    return done(error, null);
  }
}

module.exports = { handleFacebookLogin };
