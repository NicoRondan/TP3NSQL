//Funcion para proteger rutas

function isAuthenticated(req, res, next) {
    //Verificar si el usuario está autenticado
    if (req.isAuthenticated()){
        //Si es true, continua con la siguiente ruta
        return next();
    }
    //En caso contrario
    res.redirect('/');
};

module.exports = {isAuthenticated};