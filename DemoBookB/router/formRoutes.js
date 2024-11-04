

const express = require('express');
const router = express.Router();
const { handleFormSubmit } = require('../controller/formController');


router.post('/submit', handleFormSubmit);

module.exports = router;
