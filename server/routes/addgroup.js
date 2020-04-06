const {Router} = require('express');
const router = Router();
const {addGroup} = require('../controllers/add.controller');



router.route('/')
    .post(addGroup);



module.exports = router;