const {Router} = require('express');
const router = Router();
const {createUser, getForm} = require('../controllers/signup.controller');

router.route('/')
    .get(getForm)
    .post(createUser)

module.exports = router;