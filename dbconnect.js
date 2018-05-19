/**
 * Created by Alison on 08/03/2018.
 */
var mysql = require('mysql');
var connection = mysql.createPool({
    connectionLimit : 100,
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'azertyliste',
    debug: false
});
module.exports=connection;