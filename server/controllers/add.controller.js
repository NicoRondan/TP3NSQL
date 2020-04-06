const {redisClient} = require('../database');
const addCtrl = {};


addCtrl.addGroup = async (req, res) => {
    //Obtenemos datos del formulario
    const {group, place, longitude, latitude} = req.body;
    await redisClient.geoaddAsync(group, longitude, latitude, place );
    req.flash('addGroupMessage', 'Group Created!')
    res.redirect(`/listgroup/${group}`);
};

module.exports = addCtrl;