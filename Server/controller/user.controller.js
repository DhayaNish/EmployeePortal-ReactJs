const Test = require('../module/user.modules');
const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const router = express.Router();
const authorize = require("../middleware/auth");

exports.login = async (req, res) => {
    if (!req.body) {
        return res.status(400).json({
            errors: errors.array()
        });
    }
    const {
        username,
        password
    } = req.body;
    try {
        let user = await Test.findOne({
            username
        });
        if (!user) {
            return res.status(400).json({
                msg: "User Not Exists"
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch)
            return res.status(400).json({
                message: "Incorrect Password !"
            });

        const payload = {
            user: {
                id: user.id
            }
        };

        jwt.sign(
            payload,
            "randomString",
            {
                expiresIn: 3600
            },
            (err, token) => {
                if (err) throw err;
                res.status(200).json({
                    token
                });
            }
        );
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Error in Saving");
    }
}

exports.register = async (req, res) => {
    if (!req.body) {
        return res.status(400).json({
            errors: errors.array()
        });
    }
    const {
        username,
        password,
        name,
        position,
        department,
        email,
        experience,
        status

    } = req.body;
    try {
        let user = await Test.findOne({
            username
        });
        if (user) {
            return res.status(400).json({
                msg: "User Already Exists"
            });
        }

        test = new Test({
            username,
            password,
            name,
            position,
            department,
            email,
            experience,
            status
        });

        const salt = await bcrypt.genSalt(10);
        test.password = await bcrypt.hash(req.body.password, salt);

        let result = await test.save();

        return res.status(200).send({
            result
        });

    } catch (err) {
        console.log(err.message);
        res.status(500).send("Server Error");
    }
}


exports.getall = async (req, res) => {
    Test.find((error, response) => {
        if (error) {
            return next(error)
        } else {
            res.status(200).json(response)
        }
    })
}
exports.getone = async (req, res) => {
    try {
        const user = await Test.findById(req.user.id);
        res.json(user);
    } catch (e) {
        res.send({ message: "Error in Fetching user" });
    }
}
exports.updateuser = async (req, res) => {

    const id = req.params.id;

    const salt = await bcrypt.genSalt(10);
    req.body.password = await bcrypt.hash(req.body.password, salt);

    Test.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found!`
                });
            } else res.send({ data });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Tutorial with id=" + id
            });
        });
}
exports.deletuser = async (req, res) => {
    const id = req.params.id;
    Test.findByIdAndRemove(id, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
                });
            } else {
                res.send({
                    message: "Data was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Tutorial with id=" + id
            });
        });
}
