const logger = require("../config/log")
     ,fs = require('fs')
     ,imageModel = require("../model/image.model");

module.exports.append = async (req, res) => {''
    try {
        logger.info('Request Name:' + req.file.originalname + 
                    ' Description: ' + req.body.description + 
                    ' originalname: ' + req.file.originalname + 
                    ' filename: ' + req.file.filename + 
                    ' filesize: ' + req.file.size + 
                    ' Idsystem: ' + req.body.idsystem);

        const image = await imageModel.append(req.body.name, req.body.description, req.file.originalname, req.file.filename, req.file.size, req.body.idsystem);

        if (image) {
            return res.status(200).send(image);
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
        const image = await imageModel.remove(id);
        if (image) {
            await fs.unlinkSync('uploads/' + image.filename);
            return res.status(200).send(image);
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
        const image = await imageModel.update(id, req.body.name, req.body.description, req.body.idsystem);

        if (image) {
            return res.status(200).send(image);
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
            return res.status(200).send(images);
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
        const image = await imageModel.getById(id);

        if (image) {
            return res.status(200).send(image);
        } else {
            res.status(400).send({ error: "Error no banco"});
        }
    } catch(error) {
        return res.status(400).send(error);
    }
}