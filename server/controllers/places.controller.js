const {redisClient} = require('../database');
const placesCtrl = {};

placesCtrl.getPlaces = (req, res) => {
    redisClient.keys('*', (err, reply) => {
        if (!err){
            const places = reply.filter(place => (place === 'Breweries' || place === 'Universities' || place === 'Pharmacies' || place === 'Medical Emergencies' || place === 'Supermarkets'));
            res.render('places', {places: places});
        }
    });
    
}

module.exports = placesCtrl;