var db = require('../config/db');

module.exports.getAll = async () => {
    try {
        const { rows } = await db.query('SELECT USERNAME, EMAIL, STATUS FROM F_USER ORDER BY ID');
        return rows;
    } catch(error) {
        throw error;
    }
}

module.exports.append = async (username, email, password) => {
    try {
        const { rows } = await db.query('INSERT INTO F_USER(USERNAME,EMAIL,PASSWORD,STATUS) VALUES($1, $2, $3, 1) RETURNING *', [username, email, password]);
        return rows;
    } catch(error) {
        throw error;
    }
}

module.exports.getUser = async (email) => {
    try {
        const { rows } = await db.query('SELECT USERNAME, EMAIL, PASSWORD, STATUS FROM F_USER WHERE EMAIL = $1', [email]);
        return rows[0];
    } catch(error) {
        throw error;
    }
}

module.exports.remove = async (id) => {
    try {
        const { rows } = await db.query('UPDATE F_USER SET STATUS = 2, MODIFIED=CURRENT_TIMESTAMP WHERE ID = $1 RETURNING *', [id]);
        return rows;
    } catch(error) {
        throw error;
    }
}

module.exports.update = async (id, username, email, password) => {
    try {
        const { rows } = await db.query('UPDATE F_USER SET USERNAME = $1, EMAIL = $2, PASSWORD = $3, MODIFIED=CURRENT_TIMESTAMP WHERE ID = $4 RETURNING *', [username, email, password, id]);
        return rows;
    } catch(error) {
        throw error;
    }
}