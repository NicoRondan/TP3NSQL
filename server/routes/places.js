const {Router} = require('express');
const router = Router();
const {getPlaces} = require('../controllers/places.controller');


router.route('/')
    .get(getPlaces);



module.exports = router;