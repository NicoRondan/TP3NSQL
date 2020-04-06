const {redisClient} = require('../database');
const searchCtrl = {};

searchCtrl.getPlaces = async (req, res) => {
    let places = await redisClient.keysAsync('*');
    //No filtrar usuarios
    places = places.filter(place => (place === 'Breweries' || place === 'Universities' || place === 'Pharmacies' || place === 'Medical Emergencies' || place === 'Supermarkets'));
    res.render('search', {places: places});
};

searchCtrl.getSearch = async (req, res) => {
    //Obtener datos del formulario
    const {group, longitude, latitude} = req.body;
    const data = await redisClient.georadiusAsync(group, longitude, latitude, '5' , 'km', 'WITHDIST');
    console.log(data);
    res.render('radiusgroup', {data: data, group: group});
};

module.exports = searchCtrl;