var db = require('../config/db');

module.exports.getAll = async () => {
    try {
        const { rows } = await db.query('SELECT ID, NAME, DESCRIPTION ,ORIGINALNAME ,FILENAME ,FILESIZE, IDSYSTEM FROM F_IMAGE ORDER BY ID');
        return rows;
    } catch(error) {
        throw error;
    }
}

module.exports.append = async (name, description, originalname, filename, filesize, idsystem) => {
    try {
        const { rows } = await db.query('INSERT INTO F_IMAGE(NAME, DESCRIPTION, ORIGINALNAME, FILENAME, FILESIZE, IDSYSTEM) VALUES($1, $2, $3, $4, $5, $6) RETURNING *', [name, description, originalname, filename, filesize, idsystem]);
        return rows[0];
    } catch(error) {
        throw error;
    }
}

module.exports.remove = async (id) => {
    try {
        const { rows } = await db.query('DELETE FROM F_IMAGE WHERE ID = $1 RETURNING *', [id]);
        return rows[0];
    } catch(error) {
        throw error;
    }
}

module.exports.update = async (id, name, description, idsystem) => {
    try {
        const { rows } = await db.query('UPDATE F_IMAGE SET NAME = $1, DESCRIPTION = $2, IDSYSTEM = $3, MODIFIED=CURRENT_TIMESTAMP WHERE ID = $4 RETURNING *', [name, description, idsystem, id]);
        return rows;
    } catch(error) {
        throw error;
    }
}

module.exports.getById = async (id) => {
    try {
        console.log(id)
        const { rows } = await db.query('SELECT ID, NAME, DESCRIPTION, ORIGINALNAME, FILENAME, FILESIZE, IDSYSTEM FROM F_IMAGE WHERE ID = $1', [id]);
        return rows[0];
    } catch(error) {
        throw error;
    }
}