var db = require('../config/db');

module.exports.getAll = async () => {
    try {
        const { rows } = await db.query('SELECT ID, NAME, DESCRIPTION ,FILENAME ,FILEPATH ,FILEHASH FROM F_IMAGE');
        return rows;
    } catch(error) {
        throw error;
    }
}

module.exports.append = async (name, description, filename, filepath, filehash) => {
    try {
        const { rows } = await db.query('INSERT INTO F_IMAGE(NAME, DESCRIPTION,FILENAME,FILEPATH,FILEHASH) VALUES($1, $2, $3, $4, $5) RETURNING ID, NAME, DESCRIPTION ,FILENAME ,FILEPATH ,FILEHASH', [name, description, filename, filepath, filehash]);
        return rows;
    } catch(error) {
        throw error;
    }
}

module.exports.remove = async (id) => {
    try {
        const { rows } = await db.query('DELETE FROM F_IMAGE WHERE ID = $1 RETURNING *', [id]);
        return rows;
    } catch(error) {
        throw error;
    }
}

module.exports.update = async (id, name, description, filename, filepath, filehash) => {
    try {
        const { rows } = await db.query('UPDATE F_IMAGE SET NAME = $1, DESCRIPTION = $2, FILENAME = $3, FILEPATH = $4, FILEHASH = $5, MODIFIED=CURRENT_TIMESTAMP WHERE ID = $6 RETURNING *', [name, description, filename, filepath, filehash, id]);
        return rows;
    } catch(error) {
        throw error;
    }
}