var db = require('../config/db');

module.exports.getAll = async () => {
    try {
        const { rows } = await db.query('SELECT ID, NAME, DESCRIPTION ,FILENAME ,FILEPATH ,FILEHASH, IDSYSTEM FROM F_IMAGE ORDER BY ID');
        return rows;
    } catch(error) {
        throw error;
    }
}

module.exports.append = async (name, description, filename, filepath, filehash, idsystem) => {
    try {
        const { rows } = await db.query('INSERT INTO F_IMAGE(NAME, DESCRIPTION,FILENAME,FILEPATH,FILEHASH, IDSYSTEM) VALUES($1, $2, $3, $4, $5, $6) RETURNING *', [name, description, filename, filepath, filehash, idsystem]);
        return rows[0];
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

module.exports.update = async (id, name, description, filename, filepath, filehash, idsystem) => {
    try {
        const { rows } = await db.query('UPDATE F_IMAGE SET NAME = $1, DESCRIPTION = $2, FILENAME = $3, FILEPATH = $4, FILEHASH = $5, IDSYSTEM = $6, MODIFIED=CURRENT_TIMESTAMP WHERE ID = $7 RETURNING *', [name, description, filename, filepath, filehash, idsystem, id]);
        return rows;
    } catch(error) {
        throw error;
    }
}

module.exports.getById = async (id) => {
    try {
        console.log(id)
        const { rows } = await db.query('SELECT ID, NAME, DESCRIPTION ,FILENAME ,FILEPATH ,FILEHASH, IDSYSTEM FROM F_IMAGE WHERE ID = $1', [id]);
        return rows[0];
    } catch(error) {
        throw error;
    }
}