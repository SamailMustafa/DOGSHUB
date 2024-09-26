const mysql = require('mysql2');

const dbPool = mysql.createPool({
    host: 'localhost',
    database: 'dogshub',
    user: 'root',
    password: '',
    connectionLimit: 100,
});

const dbConnection = dbPool.promise();


module.exports = dbConnection;