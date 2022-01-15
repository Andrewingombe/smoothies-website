module.exports.login_get = (req, res) => {
  res.status(200).render("login");
};

module.exports.signup_get = (req, res) => {
  res.status(200).render("signup");
};

module.exports.login_post = (req, res) => {
  res.send("Login successful");
};

module.exports.signup_post = (req, res) => {
  res.send("Signup sucessful");
};

module.exports.logout = (req, res) => {
  res.send("Logout was successful");
};
