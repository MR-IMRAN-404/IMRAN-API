var owner = "Mohammad Imran"
var caption = "☆《STATUS VIDEO》\n\n 《IMRAN API》☆"
exports.name = '/video/status1';
exports.index = async(req, res, next) => {
    try {
        const n = require('./data/status1.json');
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