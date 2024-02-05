var owner = "Mohammad IMRAN"
var caption = "☆《CUTE BABY VIDEO》\n\n 《IMRAN API》☆"
exports.name = '/video/baby';
exports.index = async(req, res, next) => {
    try {
        const n = require('./data/baby.json');
        var video = n[Math.floor(Math.random() * n.length)].trim();
        res.jsonp({
            data: video,
            count: n.length,
            owner: `${owner}`,
            imran: `${caption}`
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}