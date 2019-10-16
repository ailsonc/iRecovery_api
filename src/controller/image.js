const logger = require("../config/log")
     ,imageModel = require("../model/image.model");

module.exports.append = async (req, res) => {
    try {
        logger.info('Request Name:' + req.body.name + ' Description ' + req.body.description);
        const image = await imageModel.append(req.body.name, req.body.description, req.body.filename, req.body.filepath, req.body.filehash, req.body.idsystem);

        if (image) {
            return res.status(200).send({ 'image' : image });
        } else {
            res.status(400).send({ error: "Error no banco"});
        }  
    } catch(error) {
        return res.status(400).send(error);
    }
}

module.exports.remove = async (req, res) => {
    try {
        const image = await imageModel.remove(req.body.id);

        if (image) {
            return res.status(200).send({ 'image' : image });
        } else {
            res.status(400).send({ error: "Error no banco"});
        }  
    } catch(error) {
        return res.status(400).send(error);
    }
}

module.exports.update = async (req, res) => {
    try {
        const image = await imageModel.update(req.body.id, req.body.name, req.body.description, req.body.filename, req.body.filepath, req.body.filehash, req.body.idsystem);

        if (image) {
            return res.status(200).send({ 'image' : image });
        } else {
            res.status(400).send({ error: "Error no banco"});
        }  
    } catch(error) {
        return res.status(400).send(error);
    }
}

module.exports.getAll = async (req, res) => {
    try {
        const images = await imageModel.getAll();

        if (images) {
            return res.status(200).send({ 'images' : images });
        } else {
            res.status(400).send({ error: "Error no banco"});
        }
    } catch(error) {
        return res.status(400).send(error);
    }
}