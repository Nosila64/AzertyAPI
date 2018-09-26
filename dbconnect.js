/**
 * Created by Alison on 08/03/2018.
 */
var mysql = require('mysql');
var connection = mysql.createPool({
    connectionLimit : 100,
    host: 'localhost',
    user: '[user]',
    password: '[password]',
    database: '[database]',
    debug: false
});
module.exports=connection;
