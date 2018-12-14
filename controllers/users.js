const fs = require('fs');

exports.user_create = function (req, res, next) {
    var data = {
        "nama" : req.body.nama.toLowerCase(),
        "alamat": req.body.alamat,
        "noHp": req.body.noHp
    }
    try {
        var checkData = fs.readFileSync(__dirname + '/../data/users.txt');
        checkData = checkData.toString()
        if (checkData == '') { //null
            fs.writeFileSync(__dirname + '/../data/users.txt', JSON.stringify(data));
        } else {//data
            fs.appendFileSync(__dirname + '/../data/users.txt', ',' + JSON.stringify(data));
        }

        res.json('User created successfully');
    } catch (err) {
        res.status(500).json(err)
    }
}

exports.user_get_all = function (req, res, next) {
    try {
        var user = fs.readFileSync(__dirname + '/../data/users.txt');
        user = user.toString()
        user = JSON.parse('[' + user + ']')
        var data = new Object()
        data = {
            users: user
        } 
        res.json(data)
    } catch (err) {
        res.status(500).json(err)
    }
};

exports.user_get_by_name = function (req, res, next) {
    var nama = req.params.nama.toLowerCase();
    try {
        var user = fs.readFileSync(__dirname + '/../data/users.txt');
        user = user.toString()
        user = JSON.parse('[' + user + ']')
        var userSearched;
        for (var i = 0; i < user.length; i++) {
            if (user[i].nama  == nama) {
                userSearched = user[i]
            }
        }

        var person
        if (userSearched == null) {
            person = {}
        } else {
            person = userSearched
        }

        var data = new Object()
        data = {
            users: person
        } 
        res.json(data)
    } catch (err) {
        res.status(500).json(err)
    }    
};