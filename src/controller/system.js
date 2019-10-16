const logger = require("../config/log")
     ,systemModel = require("../model/system.model");

module.exports.append = async (req, res) => {
    try {
        logger.info('Request Name:' + req.body.name + ' Description ' + req.body.description);
        const system = await systemModel.append(req.body.name, req.body.description);

        if (system) {
            return res.status(200).send({ 'system' : system });
        } else {
            res.status(400).send({ error: "Error no banco"});
        }  
    } catch(error) {
        return res.status(400).send(error);
    }
}

module.exports.remove = async (req, res) => {
    try {
        const system = await systemModel.remove(req.body.id);

        if (system) {
            return res.status(200).send({ 'system' : system });
        } else {
            res.status(400).send({ error: "Error no banco"});
        }  
    } catch(error) {
        return res.status(400).send(error);
    }
}

module.exports.update = async (req, res) => {
    try {
        const system = await systemModel.update(req.body.id, req.body.name, req.body.description);

        if (system) {
            return res.status(200).send({ 'system' : system });
        } else {
            res.status(400).send({ error: "Error no banco"});
        }  
    } catch(error) {
        return res.status(400).send(error);
    }
}

module.exports.getAll = async (req, res) => {
    try {
        const systems = await systemModel.getAll();

        if (systems) {
            return res.status(200).send({ 'systems' : systems });
        } else {
            res.status(400).send({ error: "Error no banco"});
        }
    } catch(error) {
        return res.status(400).send(error);
    }
}