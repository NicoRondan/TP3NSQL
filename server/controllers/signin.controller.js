const loginCtrl = {};
const passport = require('passport');

loginCtrl.getForm = (req, res) => {
    res.render('signin');
};

loginCtrl.loginUser = passport.authenticate('local-signin', {
    successRedirect: '/places',
    failureRedirect: '/signin',
    passReqToCallback: true
});

module.exports = loginCtrl;