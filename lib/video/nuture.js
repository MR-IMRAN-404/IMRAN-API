var owner = "Mohammad IMRAN"
var caption = "☆《NATURAL VIDEO》\n\n 《IMRAN API》 ☆"
exports.name = '/video/nuture';
exports.index = async(req, res, next) => {
    try {
        const n = require('./data/nuture.json');
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
