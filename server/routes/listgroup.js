const {Router} = require('express');
const router = Router();
const {isAuthenticated} = require('./helpers/isAuthenticated');
const {getPlace} = require('../controllers/listgroup.controller');

// router.use((req, res, next) => {
//     isAuthenticated(req, res, next);
//     req.next();
// });

router.route('/:place')
    .get(getPlace);



module.exports = router;