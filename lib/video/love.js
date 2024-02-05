var owner = "Mohammad Imran"
var caption = "☆《LOVE VIDEO》\n\n 《IMRAN API》☆"
exports.name = '/video/love';
exports.index = async(req, res, next) => {
    try {
        const n = require('./data/love.json');
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