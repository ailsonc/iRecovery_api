var db = require('../config/db');

module.exports.getAll = async () => {
    try {
        const { rows } = await db.query('SELECT ID, NAME, DESCRIPTION ,FILENAME ,FILEPATH ,FILEHASH FROM F_IMAGE');
        return rows;
    } catch(error) {
        throw error;
    }
}

module.exports.setImage = async (name, description, filename, filepath, filehash) => {
    try {
        const { rows } = await db.query('INSERT INTO F_IMAGE(NAME, DESCRIPTION,FILENAME,FILEPATH,FILEHASH) VALUES($1, $2, $3, $4, $5) RETURNING ID, NAME, DESCRIPTION ,FILENAME ,FILEPATH ,FILEHASH', [name, description, filename, filepath, filehash]);
        return rows;
    } catch(error) {
        throw error;
    }
}