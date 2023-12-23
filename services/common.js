const passport = require("passport");

exports.isAuth = (req, res, done) => {
  return passport.authenticate("jwt");
};

exports.sanitizeUser = (user) => {
  return { id: user.id, role: user.role };
};

exports.cookieExtractor = function (req) {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies["jwt"];
  }
  //TODO : this is temporary token for testing without cookie
  //dummy token
  //token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ODM0MDllZTdhY2Q1YzM4YTIxODFmYiIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzAzMTg1NjM1fQ.0f_rIh7OTW4L8VKhJdFe9FHQ9cuNglnsEHw6wSaxRp0";

  //admin token
  //token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ODNiOTBkOWE5MDZiOGQ1ZWY4M2RjZiIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcwMzE4NTc4Mn0.-r1yj7pD3W73DYf-hX5AWeMqtSpKSLQLDbQZ0_FCSuY";
  return token;
};
