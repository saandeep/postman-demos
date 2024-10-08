module.exports = function (app) {
  /*
  * Routes
  */
  app.use('/v2', require('./routes/v2.route'));

};
