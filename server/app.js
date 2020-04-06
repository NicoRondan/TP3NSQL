const express = require('express');
const cors = require('cors');
const engine = require('ejs-mate');
const path = require('path');
const morgan = require('morgan');
const passport = require('passport');
const session = require('express-session');
const flash = require('connect-flash');

//Initializations
const app = express();
require('./database');
require('./passport/local-auth');

// Settings
app.set('views', path.join(__dirname, 'views'))
app.engine('ejs', engine);
app.set('view engine', 'ejs')
app.set('port', process.env.PORT || 4000);


// Middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(session({
    secret: 'nosqlapp',
    resave: false,
    saveUninitialized: false
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
    app.locals.signupMessage = req.flash('signupMessage');
    app.locals.signinMessage = req.flash('signinMessage');
    app.locals.addGroupMessage = req.flash('addGroupMessage');
    app.locals.user = req.user;
    next();
});

// Routes
app.use('/', require('./routes/index'));
app.use('/signup', require('./routes/signup'));
app.use('/signin', require('./routes/signin'));
app.use('/logout', require('./routes/logout'));
app.use('/places', require('./routes/places'));
app.use('/listgroup', require('./routes/listgroup'));
app.use('/add', require('./routes/addgroup'));
app.use('/search', require('./routes/search'));




//Server Listening
app.listen(app.get('port'), function() {
    console.log('Server running on port ' + app.get('port'));
});