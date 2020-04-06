const {Router} = require('express');
const router = Router();
const {getPlace} = require('../controllers/listgroup.controller');



router.route('/:place')
    .get(getPlace);



module.exports = router;