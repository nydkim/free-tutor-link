const express = require('express');
const router = express.Router();
const addSkillController = require('../controllers/addSkillComponent');

router.post('/', addSkillController.addSkill);

module.exports = router;
