var owner = "Mohammad Imran"
var caption = "☆《ITEM VIDEO》\n\n 《IMRAN API》☆"
exports.name = '/video/item';
exports.index = async(req, res, next) => {
    try {
        const n = require('./data/item.json');
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