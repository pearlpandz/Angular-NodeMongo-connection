const router = require('express').Router();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


exports.signup = function(req, res, next) {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        var userdetail = req.body;
        var username = req.body.name;
        dbo.collection("users").insert({
            username,
            username: [userdetail]
        });
        //     ,function(err, res) {
        //     // if (err) throw err;
        //     if (err) {
        //         console.log(err)
        //     }
        //     if (res) {
        //         // console.log(res);
        //         // console.log("1 user detail inserted");
        //     } else {
        //         console.log("not inserted")
        //     }

        //     // db.close();
        // });
    });
}