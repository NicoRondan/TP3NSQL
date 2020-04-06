const {Router} = require('express');
const router = Router();
const {isAuthenticated} = require('./helpers/isAuthenticated');
const {getPlaces} = require('../controllers/places.controller');

// router.use((req, res, next) => {
//     isAuthenticated(req, res, next);
//     next();
// });

router.route('/')
    .get(getPlaces);



module.exports = router;