const db = require('../db.js');

const addSkillController = {};

addSkillController.addSkill = (req, res, next) => {
  // som stuff here
  console.log('REQ.BODY*****', req.cookies);
  for (let i = 0; i < req.body.length; i++) {
    console.log(req.body[i]);
    const addSkillQuery = `INSERT INTO tutors_skills (skill_id,tutor_id) VALUES ('${req.body[i]}', '${req.cookies.acceptedBBB}');`;
    db.query(addSkillQuery);
  }
};

module.exports = addSkillController;
