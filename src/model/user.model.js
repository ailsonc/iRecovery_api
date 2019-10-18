var db = require('../config/db');

module.exports.getAll = async () => {
    try {
        const { rows } = await db.query('SELECT USERNAME, STATUS FROM F_USER ORDER BY ID');
        return rows;
    } catch(error) {
        throw error;
    }
}

module.exports.append = async (username, password) => {
    try {
        const { rows } = await db.query('INSERT INTO F_USER(USERNAME,PASSWORD,STATUS) VALUES($1, $2, 1) RETURNING *', [username, password]);
        return rows;
    } catch(error) {
        throw error;
    }
}

module.exports.getUser = async (username) => {
    try {
        const { rows } = await db.query('SELECT USERNAME, PASSWORD, STATUS FROM F_USER WHERE USERNAME = $1', [username]);
        return rows[0];
    } catch(error) {
        throw error;
    }
}

module.exports.remove = async (id) => {
    try {
        const { rows } = await db.query('UPDATE F_USER SET STATUS = 0, MODIFIED=CURRENT_TIMESTAMP WHERE ID = $1 RETURNING *', [id]);
        return rows;
    } catch(error) {
        throw error;
    }
}

module.exports.update = async (id, username, password, status) => {
    try {
        const { rows } = await db.query('UPDATE F_USER SET USERNAME = $1, PASSWORD = $2, STATUS = $3, MODIFIED=CURRENT_TIMESTAMP WHERE ID = $4 RETURNING *', [username, password, status, id]);
        return rows;
    } catch(error) {
        throw error;
    }
}