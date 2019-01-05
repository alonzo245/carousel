const auth = require('basic-auth');
const admins = { 'testUser': { password: process.env.USER_PASSWORD } };

module.exports = function (request, response, next) {
  var user = auth(request);
  if (!user || !admins[user.name] || admins[user.name].password !== user.pass) {
    response.set('WWW-Authenticate', 'Basic realm="carousel"');
    return response.status(401).send();
  }
  return next();
};