var db = require('../config/db');

module.exports.getAll = async () => {
    try {
        const { rows } = await db.query('SELECT ID, NAME, DESCRIPTION FROM F_SYSTEM ORDER BY ID');
        return rows;
    } catch(error) {
        throw error;
    }
}

module.exports.getById = async (id) => {
    try {
        console.log(id)
        const { rows } = await db.query('SELECT ID, NAME, DESCRIPTION FROM F_SYSTEM WHERE ID = $1', [id]);
        return rows[0];
    } catch(error) {
        throw error;
    }
}

module.exports.append = async (name, description) => {
    try {
        const { rows } = await db.query('INSERT INTO F_SYSTEM(NAME, DESCRIPTION) VALUES($1, $2) RETURNING *', [name, description]);
        return rows[0];
    } catch(error) {
        throw error;
    }
}

module.exports.remove = async (id) => {
    try {
        const { rows } = await db.query('DELETE FROM F_SYSTEM WHERE ID = $1 RETURNING *', [id]);
        return rows;
    } catch(error) {
        throw error;
    }
}

module.exports.update = async (id, name, description, filename, filepath, filehash) => {
    try {
        const { rows } = await db.query('UPDATE F_SYSTEM SET NAME = $1, DESCRIPTION = $2, MODIFIED=CURRENT_TIMESTAMP WHERE ID = $3 RETURNING *', [name, description, id]);
        return rows;
    } catch(error) {
        throw error;
    }
}