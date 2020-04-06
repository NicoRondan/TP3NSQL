const redis = require('redis');
const bluebird = require('bluebird');

//Manejar asincronia de redis
bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

const redisClient = redis.createClient(6379, 'redis');

redisClient.on('connect', () => {
    console.log('Connected to redis server')
});

const initialize = () => {
    redisClient.geoadd('Breweries', -58.235343, -32.479674,'7 Colinas', -58.248284, -32.477277, 'Lagash');
    redisClient.geoadd('Universities', -58.233333, -32.479041,'UADER FCyT', -58.231287, -32.483869,'UNER');
    redisClient.geoadd('Pharmacies', -58.228369, -32.482140, 'Del Pueblo', -58.231426, -32.483661,'Ramirez');
    redisClient.geoadd('Medical Emergencies', -58.230954, -32.482792, 'VIDA', -58.236705, -32.483950, 'ALERTA');
    redisClient.geoadd('Supermarkets', -58.232671, -32.486158, 'Supremo', -58.227103, -32.482285, 'Estrella');
};

//redisClient.flushdb();
initialize();

module.exports = {redisClient};