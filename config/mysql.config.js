import mysql from 'mysql2/promise';
import ENVIRONMENT from './environment.config.js';

const pool = mysql.createPool({
    host: ENVIRONMENT.MYSQL_DB_HOST,
    user: ENVIRONMENT.MYSQL_DB_USER,
    password: ENVIRONMENT.MYSQL_DB_PASSWORD,
    database: ENVIRONMENT.MYSQL_DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

const checkDB = async () => {
    try {
        const connection = await pool.getConnection();
        console.log('✅ Base de datos MySQL conectada exitosamente');
        connection.release();
    } catch (error) {
        console.error('❌ Error al conectar a la base de datos MySQL:', error);
    }
};

export { pool, checkDB };
