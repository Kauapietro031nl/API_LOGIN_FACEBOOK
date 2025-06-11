function facebookLogin(req, res) {
  res.send('Login com Facebook em andamento...');
}

function facebookCallback(req, res) {
  // Redireciona após login com sucesso
  res.redirect('/dashboard');
}

module.exports = { facebookLogin, facebookCallback };
