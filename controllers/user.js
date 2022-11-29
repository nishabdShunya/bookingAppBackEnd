const User = require('../models/user');

exports.getUsers = (req, res, next) => {
    User.findAll()
        .then(result => {
            res.json(result);
        })
        .catch(err => console.log(err));
};

exports.postAddUser = (req, res, next) => {
    const username = req.body.username;
    const email = req.body.email;
    const phno = req.body.phno;
    User.create({
        username: username,
        email: email,
        phno: phno
    })
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            console.log(err);
        });
};

exports.deleteUser = (req, res, next) => {
    const userId = req.params.userId;
    User.destroy({ where: { id: userId } })
        .then(result => {
            res.json(result);
        })
        .catch(err => console.log(err));
};