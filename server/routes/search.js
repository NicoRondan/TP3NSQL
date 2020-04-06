const {Router} = require('express');
const router = Router();
const {getPlaces, getSearch} = require('../controllers/search.controller');


router.route('/')
    .get(getPlaces)
    .post(getSearch);



module.exports = router;