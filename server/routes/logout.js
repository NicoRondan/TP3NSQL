const {Router} = require('express');
const router = Router();
//const {getForm} = require('../controllers/signin.controller');

router.route('/')
    .get((req, res, next) => {
        req.logout();
        res.redirect('/');
    })

module.exports = router;