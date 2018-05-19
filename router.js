/**
 * Created by Alison on 08/03/2018.
 */
var express = require('express');
var Player = require('./Player');
var router = express.Router();

router.get("/", function (req,res) {
    res.json({"message":"Hello World"});
    console.log("atteint !");
});

router.get("/Player", function(req,res) {
    Player.getSignUP(function(err,rows) {
        if(err) {
            res.json({"message":err});
        }
        else {
            res.json({results:rows});
            console.log(rows);
        }
    })
});
router.get("/All", function(req,res) {
    Player.getAll(function(err,rows) {
        if(err) {
            res.json({"message":err});
        }
        else {
            res.json({results:rows});
            console.log(rows);
        }
    })
});
router.post("/addPlayer", function(req,res) {
    Player.addSignUP(req.body,function(err,rows) {
        if(err) {
            res.json({"message":err});
        }
        else
        {
            res.json({"message":"success"});
        }
    })
});

module.exports=router;