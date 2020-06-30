const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');

// router.get('/authCode', loginController.getAccessToken);
router.get('/authCode', loginController.getAccessToken, (req, res) => {
  res.status(200).redirect('http://localhost:8080/');
});
router.get('/', loginController.sendToLinkedIn);

module.exports = router;
