const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const {redisClient} = require('../database');

passport.serializeUser((user, done) => {
    done(null, user.username)
});

passport.deserializeUser( (username, done) => {
    redisClient.get(username, (err, reply) => {
        if (err) throw err;
        //reply en este caso es el password
        const user = {username, reply};
        done(null, user)
    })  
});

passport.use('local-signup', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
}, (req, username, password, done) => {
    redisClient.get(username, (err, reply) => {
        if (err) req.next();
        //Si existe el usuario
        if (reply) {
            return done(null, false, req.flash('signupMessage', 'Username is already taken.'));
        } else {
            //Crear usuario
            redisClient.set(username, password);
            const user = {username, password}
            done(null, user);
        }
    });
}));

passport.use('local-signin', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
}, (req, username, password, done) => {
    redisClient.get(username, async (err, reply) => {
        if (err) req.next();
        //En caso de que no exista el user en la bbdd
        if (!reply) {
            return done(null, false, req.flash('signinMessage', 'No user found.'));
        } else {
            //Si la contraseña no coincide
            if (password !== reply) {
                return done(null, false, req.flash('signinMessage', 'Incorrect password.'));
            }
            const user = {username, password}
            done(null, user);
        }
    });
}));