const logger = require("../config/log")
     ,userModel = require("../model/user.model");

module.exports.append = async (req, res) => {
    try {
        logger.info('Request Name:' + req.body.username);
        const user = await userModel.append(req.body.username, req.body.email, req.body.password);

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
        const user = await userModel.update(req.body.id, req.body.username, req.body.email, req.body.password);

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