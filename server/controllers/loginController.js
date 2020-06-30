const request = require('superagent');
const db = require('../db.js');

const loginController = {};

const client_id = '77iojwzvr5axo9';
const client_secret = '2Ul4nGyuuFbylkm5';
const redirect_uri = 'http://localhost:3000/login/authCode';

loginController.sendToLinkedIn = (req, res) =>
  res.redirect(
    `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${client_id}&redirect_uri=${redirect_uri}&scope=r_liteprofile%20r_emailaddress`
  );

loginController.getAccessToken = (req, res, next) => {
  const { code } = req.query;

  request
    .post(
      `https://www.linkedin.com/oauth/v2/accessToken?grant_type=authorization_code&code=${code}&redirect_uri=${redirect_uri}&client_id=${client_id}&client_secret=${client_secret}`
    )
    .then((accessRes) => {
      res.locals.accessToken = accessRes.body.access_token;
      // res.cookie('accessToken', res.locals.accessToken, {
      //   httpOnly: true,
      //   secure: true,
      // });
      // console.log('lev1', res.locals.accessToken);
      return request
        .get(
          'https://api.linkedin.com/v2/me?projection=(id,firstName,lastName,profilePicture(displayImage~:playableStreams))'
        )
        .set('Authorization', `Bearer ${res.locals.accessToken}`);
    })
    .then((userRes) => {
      // console.log(
      //   userRes.body.profilePicture['displayImage~'].elements[1].identifiers[0]
      //     .identifier
      // );
      const firstName = Object.values(userRes.body.firstName.localized)[0];
      const lastName = Object.values(userRes.body.lastName.localized)[0];
      const { id } = userRes.body;
      const imgUrl =
        userRes.body.profilePicture['displayImage~'].elements[1].identifiers[0]
          .identifier;

      res.locals.newUser = {
        firstName: `${firstName}`,
        lastName: `${lastName}`,
        //  userid: id,
        imgUrl,
      };
      return request
        .get(
          'https://api.linkedin.com/v2/emailAddress?q=members&projection=(elements*(handle~))'
        )
        .set('Authorization', `Bearer ${res.locals.accessToken}`);
    })
    .then((emailRes) => {
      const email = emailRes.body.elements[0]['handle~'].emailAddress;
      res.locals.newUser.eMail = email;

      const userData = res.locals.newUser;
      const { firstName, lastName, imgUrl, eMail } = userData;

      const selectQueryString = `SELECT username FROM users WHERE username = '${eMail}'`;
      db.query(selectQueryString).then((result) => {
        if (result.rows.length) {
          console.log(result.rows[0].username);
          res.cookie('acceptedBBB', result.rows[0].username);
          return next();
        }

        const sqlQuery = `INSERT INTO users (first_name, last_name, username, photo_url) VALUES ('${firstName}', '${lastName}', '${eMail}', '${imgUrl}')`;
        db.query(sqlQuery).then(() => {
          console.log('WORKINGGGG!');
          // const sqlQuery = `SELECT _id FROM tutors where order`
          // db
          // .query(sqlQuery)
        });
        // cookies?
        // return res.redirect('http://localhost:3000/home');  // es sanaxavia ???
        // cookies with username userargerg eargerg ewt hfes
        return next();
      });
    })

    .catch((err) => {
      return next({
        log: `Error in loginController.getAccessToken: ${err}`,
      });
    });
};

module.exports = loginController;
