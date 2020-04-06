const registerCtrl = {};
const passport = require('passport');

registerCtrl.createUser = passport.authenticate('local-signup', {
    successRedirect: '/',
    failureRedirect: '/signup',
    passReqToCallback: true
});

registerCtrl.getForm = (req, res) => {
    res.render('signup');
};


module.exports = registerCtrl;