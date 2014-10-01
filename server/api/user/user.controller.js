var users = {};
users.index = function (req, res) {
    res.json({
        users: []
    });
};
module.exports = users;