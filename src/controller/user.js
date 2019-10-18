const logger = require("../config/log")
     ,crypt = require("../utils/crypt")
     ,userModel = require("../model/user.model");

module.exports.append = async (req, res) => {
    try {
        logger.info('Request Name:' + req.body.username);

        const cryptPassword = await crypt.encrypt(req.body.password);

        const user = await userModel.append(req.body.username, cryptPassword);

        if (user) {
            return res.status(200).send({ 'user' : user });
        } else {
            res.status(400).send({ error: "Error no banco"});
        }  
    } catch(error) {
        return res.status(400).send(error);
    }
}

module.exports.remove = async (req, res) => {
    try {
        const user = await userModel.remove(req.body.id);

        if (user) {
            return res.status(200).send({ 'user' : user });
        } else {
            res.status(400).send({ error: "Error no banco"});
        }  
    } catch(error) {
        return res.status(400).send(error);
    }
}

module.exports.update = async (req, res) => {
    try {
        const cryptPassword = await crypt.encrypt(req.body.password);
        
        const user = await userModel.update(req.body.id, req.body.username, cryptPassword, req.body.status);

        if (user) {
            return res.status(200).send({ 'user' : user });
        } else {
            res.status(400).send({ error: "Error no banco"});
        }  
    } catch(error) {
        return res.status(400).send(error);
    }
}

module.exports.getAll = async (req, res) => {
    try {
        const users = await userModel.getAll();

        if (user) {
            return res.status(200).send({ 'users' : users });
        } else {
            res.status(400).send({ error: "Error no banco"});
        }
    } catch(error) {
        return res.status(400).send(error);
    }
}