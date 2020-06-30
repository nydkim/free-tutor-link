const db = require('../db.js');

const sessionController = {};

sessionController.setSSIDCookie = (req, res, next) => {
  res.cookie('ssid', res.locals.newUser.eMail, { httpOnly: true });
  return next();
};

sessionController.startSession = (req, res, next) => {
  const sqlQuery = `INSERT INTO sessions (email, activityTime) VALUES ('${res.locals.newUser.eMail}', '${Date.now}');`;
  db.query(sqlQuery, (err, response) => {
    if (response.rows[0]) {
      res.cookie('id', response.rows[0]._id);
      return next();
    } else res.sendStatus(400);
  });
};

sessionController.isLoggedIn = (req, res, next) => {
  const sqlQuery = `SELECT email, activityTime FROM sessions WHERE email='${req.cookies.ssid}';`;
  db.query(sqlQuery, (err, response) => {
    // console.log(response.rows[0]);
    // error in sqlQuery
    if (err) {
      console.log('error in isLoggedin query');
      return res.status(300).redirect('/');
    }
    // no session
    if (!response.rows[0]) {
      console.log('no active session');
      return res.status(300).redirect('/');
    }
    // there is a session passed 10 minutes from last activity
    if (response.rows[0].activityTime < Date.now - 600000) {
      const sqlQuery = `DELETE FROM sessions WHERE email='${req.cookies.ssid}'`;
      db.query(sqlQuery, (err, response) => {
        if (err) return res.status(400);
        console.log('session deleted!');
        return res.status(300).redirect('/');
      });
    }
    // if the session is still active, update the last activity time to now
    const sqlQuery = `UPDATE sessions SET activityTime = '${Date.now}' WHERE email='${req.cookies.ssid}'`;
    db.query(sqlQuery, (err, response) => {
      if (err) return res.status(400);
      console.log('session upsated!');
      return next();
    });
  });
};
