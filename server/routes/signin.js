const {Router} = require('express');
const router = Router();
const {getForm, loginUser} = require('../controllers/signin.controller');

router.route('/')
    .get(getForm)
    .post(loginUser);


module.exports = router;