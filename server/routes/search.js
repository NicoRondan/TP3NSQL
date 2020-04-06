const {Router} = require('express');
const router = Router();
const {isAuthenticated} = require('./helpers/isAuthenticated');
const {getPlaces, getSearch} = require('../controllers/search.controller');

// router.use((req, res, next) => {
//     isAuthenticated(req, res, next);
//     next();
// });

router.route('/')
    .get(getPlaces)
    .post(getSearch);



module.exports = router;