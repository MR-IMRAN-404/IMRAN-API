var owner = "Mohammad IMRAN"
var caption = "☆ALON VIDEO☆"
exports.name = '/video/alon';
exports.index = async(req, res, next) => {
    try {
        const n = require('./data/ai.json');
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
