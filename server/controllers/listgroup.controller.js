const {redisClient} = require('../database');
const placeCtrl = {};


placeCtrl.getPlace = async (req, res) => {
    const {place} = req.params;
    //Lista ordenada
    let groups = await redisClient.zrangeAsync(place, 0, -1);
    for (let index = 0; index < groups.length; index++) {
        const element = groups[index];
        //Obtenemos coordenadas
        let cors = await redisClient.geoposAsync(place, element);
        cors = cors[0];
        const object = {
            name: element,
            longitude: cors[0],
            latitude: cors[1]
        }
        groups[index] = object;
    }
    res.render('listgroup', {groups: groups, place: place} );   
}





module.exports = placeCtrl;