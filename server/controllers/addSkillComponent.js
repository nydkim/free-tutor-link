const db = require('../db.js');

const addSkillController = {};

addSkillController.addSkill = (req, res, next) => {
  // som stuff here
  console.log('REQ.BODY*****', req.body);
};

module.exports = addSkillController;
