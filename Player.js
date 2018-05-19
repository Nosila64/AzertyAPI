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
      var table = ['player','lnameP','fnameP','mailP','lvlP','hSignUPP',body.lnameP,body.fnameP,body.mailP,body.lvlP,body.hSignUPP];
      query = mysql.format(query,table);
      return connection.query(query,callback);
  },
  getAll:function (callback) {
      var query = "SELECT * FROM ??";
      var table = ['player'];
      query = mysql.format(query,table);
      return connection.query(query,callback);
  }
};
module.exports=Player;