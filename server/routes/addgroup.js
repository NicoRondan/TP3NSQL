const {Router} = require('express');
const router = Router();
const {isAuthenticated} = require('./helpers/isAuthenticated');
const {addGroup} = require('../controllers/add.controller');

// router.use((req, res, next) => {
//     isAuthenticated(req, res, next);
//     req.next();
// });

router.route('/')
    .post(addGroup);



module.exports = router;