const pool = require('../config/db');

async function findByFacebookIdOrEmail(facebookId, email) {
  const [users] = await pool.query(
    'SELECT * FROM clientes WHERE facebook_id = ? OR email = ?',
    [facebookId, email]
  );
  return users[0];
}

async function updateFacebookId(email, facebookId) {
  await pool.query(
    'UPDATE clientes SET facebook_id = ? WHERE email = ?',
    [facebookId, email]
  );
}

async function createUser(user) {
  const { id, nome, email, facebook_id } = user;
  await pool.query(
    'INSERT INTO clientes (id, nome, email, facebook_id) VALUES (?, ?, ?, ?)',
    [id, nome, email, facebook_id]
  );
}

module.exports = {
  findByFacebookIdOrEmail,
  updateFacebookId,
  createUser
};
