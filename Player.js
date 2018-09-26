/**
 * Created by Alison on 08/03/2018.
 */
var connection =require('./dbconnect');
var mysql = require('mysql');

var Player = {
    getSignUP:function(callback) {
        var query = "SELECT * FROM ?? WHERE ?? = ? ORDER BY ??";
        var table = ['player','stateP',0,"hSignUpP"];
        query = mysql.format(query,table);
        return connection.query(query,callback);
    },
    addSignUP:function(body,callback) {
        var query = "INSERT INTO ??(??,??,??,??,??) VALUES(?,?,?,?,?)";
        var table = ['player','lnameP','fnameP','mailP','lvlP','hSignUPP',body.lnameP,body.fnameP,body.mailP,body.lvlP,new Date()];
        query = mysql.format(query,table);
        return connection.query(query,callback);
    },
    getAll:function (callback) {
        var query = "SELECT * FROM ?? WHERE ?? = ?";
        var table = ['player','stateP',0];
        query = mysql.format(query,table);
        return connection.query(query,callback);
    },
    validPassage:function(body,callback) {
        var query = "UPDATE ?? SET ?? = ?, ?? = ? , ?? = ? WHERE ?? = ?";
        var table = ['player','stateP',1,'hrunP',new Date(),'scoreP',body.scoreP,'idplayer',body.idPlayer];
        query = mysql.format(query,table);
        return connection.query(query,callback);
    },
    getPlayerDONE:function(callback) {
        var query = "SELECT * FROM ?? WHERE ?? = ? ORDER BY ?? DESC";
        var table = ["player","stateP",1,"hrunP"];
        query = mysql.format(query,table);
        return connection.query(query,callback);
    },
    getPlayerDONEByDate:function (date,callback) {
        var d = new Date(date);
        var dateMYSQL = d.getFullYear() + "-" + ("0"+(d.getMonth()+1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2);
        var query = "SELECT * FROM ?? WHERE stateP = 1 AND DATE(hrunP)= ? ORDER BY hrunP DESC";
        var table = ["player", dateMYSQL];
        query = mysql.format(query,table);
        console.log(query);
        return connection.query(query,callback);
    },
    getDates:function (callback) {
        var query = "SELECT DATE(hrunP) as daterun FROM ?? WHERE hrunP is not null GROUP BY DATE(hrunP)";
        var table = ["player"];
        query = mysql.format(query,table);
        return connection.query(query,callback);

    }
};
module.exports=Player;