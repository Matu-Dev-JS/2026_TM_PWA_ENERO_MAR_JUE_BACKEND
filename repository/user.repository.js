import { pool } from "../config/mysql.config.js";

const USERS_TABLE = {
    NAME: 'users',
    COLUMNS: {
        ID: '_id',
        NAME: 'name',
        EMAIL: 'email',
        PASSWORD: 'password',
        CREATED_AT: 'created_at',
        MODIFIED_AT: 'modified_at',
        ACTIVE: 'active',
        VERIFIED_EMAIL: 'verified_email'
    }
};

class UserRepository {
    async crear(email, password, username) {
        const query = `INSERT INTO ${USERS_TABLE.NAME} (${USERS_TABLE.COLUMNS.EMAIL}, ${USERS_TABLE.COLUMNS.PASSWORD}, ${USERS_TABLE.COLUMNS.NAME}) VALUES (?, ?, ?)`;
        const [result] = await pool.query(query, [email, password, username]);
        return result;
    }

    async buscarUnoPorEmail(email) {
        const query = `SELECT * FROM ${USERS_TABLE.NAME} WHERE ${USERS_TABLE.COLUMNS.EMAIL} = ?`;
        const [rows] = await pool.query(query, [email]);
        return rows[0] || null;
    }

    async eliminarPorId(user_id) {
        debugger;
        const query = `DELETE FROM ${USERS_TABLE.NAME} WHERE ${USERS_TABLE.COLUMNS.ID} = ?`;
        await pool.query(query, [user_id]);
    }

    async desactivarPorId(user_id) {
        const updateQuery = `UPDATE ${USERS_TABLE.NAME} SET ${USERS_TABLE.COLUMNS.ACTIVE} = 0 WHERE ${USERS_TABLE.COLUMNS.ID} = ?`;
        await pool.query(updateQuery, [user_id]);

        const selectQuery = `SELECT * FROM ${USERS_TABLE.NAME} WHERE ${USERS_TABLE.COLUMNS.ID} = ?`;
        const [rows] = await pool.query(selectQuery, [user_id]);
        return rows[0];
    }

    async actualizarPorId(user_id, nuevosDatos) {
        const fields = [];
        const values = [];

        for (const [key, value] of Object.entries(nuevosDatos)) {
            let dbKey = key;
            if (key === 'username') {
                dbKey = USERS_TABLE.COLUMNS.NAME;
            }
            fields.push(`${dbKey} = ?`);
            values.push(value);
        }

        if (fields.length === 0) return;

        values.push(user_id);
        const query = `UPDATE ${USERS_TABLE.NAME} SET ${fields.join(', ')} WHERE ${USERS_TABLE.COLUMNS.ID} = ?`;

        await pool.query(query, values);
    }

    async obtenerTodos() {
        const query = `SELECT * FROM ${USERS_TABLE.NAME}`;
        const [rows] = await pool.query(query);
        return rows;
    }

    async obtenerUnoPorId(user_id) {
        const query = `SELECT * FROM ${USERS_TABLE.NAME} WHERE ${USERS_TABLE.COLUMNS.ID} = ?`;
        const [rows] = await pool.query(query, [user_id]);
        return rows[0] || null;
    }

}

const userRepository = new UserRepository()
export default userRepository
