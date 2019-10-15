const logger = require("../config/log")
     ,imageModel = require("../model/image.model");

module.exports.create = async (req, res) => {
    try {
        logger.info('Request Name:' + req.body.name + ' Description ' + req.body.description);
        const image = await imageModel.setImage(req.body.name, req.body.description, req.body.filename, req.body.filepath, req.body.filehash);

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
        const image = await imageModel.getAll();

        if (image) {
            return res.status(200).send({ 'images' : image });
        } else {
            res.status(400).send({ error: "Error no banco"});
        }
    } catch(error) {
        return res.status(400).send(error);
    }
}