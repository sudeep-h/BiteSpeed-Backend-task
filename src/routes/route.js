const express = require('express');
const router=express.Router();
const {identifyContact} = require('../controllers/controllers.js');

router.post('/identify',identifyContact);

module.exports=router;

