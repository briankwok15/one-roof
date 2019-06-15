const db = require('./index.js');

module.exports = {
  // go back and change to include other info like apartment address
  getAllUsers(req, res, next) {
    const queryString = 'SELECT * FROM users';
    db.query(queryString, (err, result) => {
      if (err) {
        return next(err);
      }
      res.locals.result = result.rows;
      return next();
    });
  }
};