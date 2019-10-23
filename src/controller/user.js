const logger = require("../config/log")
     ,crypt = require("../utils/crypt")
     ,userModel = require("../model/user.model");

module.exports.append = async (req, res) => {
    try {
        logger.info('Request Name:' + req.body.username);

        const cryptPassword = await crypt.encrypt(req.body.password);
        const status = req.body.status;

        if (status < 0 || status > 1 ) {
            res.status(400).send({ error: "Status não permitido"});
        }

        const user = await userModel.append(req.body.username, cryptPassword, status);

        if (user) {
            return res.status(200).send(user);
        } else {
            res.status(400).send({ error: "Error no banco"});
        }  
    } catch(error) {
        return res.status(400).send(error);
    }
}

module.exports.remove = async (req, res) => {
    try {
        const { id } = req.params
        const user = await userModel.remove(id);

        if (user) {
            return res.status(200).send(user);
        } else {
            res.status(400).send({ error: "Error no banco"});
        }  
    } catch(error) {
        return res.status(400).send(error);
    }
}

module.exports.update = async (req, res) => {
    try {
        const { id } = req.params
        const cryptPassword = await crypt.encrypt(req.body.password);
        const status = req.body.status;

        if (status < 0 || status > 1 ) {
            res.status(400).send({ error: "Status não permitido"});
        }

        const user = await userModel.update(id, req.body.username, cryptPassword, status);

        if (user) {
            return res.status(200).send(user);
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

        if (users) {
            return res.status(200).send(users);
        } else {
            res.status(400).send({ error: "Error no banco"});
        }
    } catch(error) {
        return res.status(400).send(error);
    }
}

module.exports.getById = async (req, res) => {
    try {
        const { id } = req.params;
        const users = await userModel.getById(id);

        if (users) {
            return res.status(200).send(users);
        } else {
            res.status(400).send({ error: "Error no banco"});
        }
    } catch(error) {
        return res.status(400).send(error);
    }
}