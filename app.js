const express = require("express");
const app = express();

const middleware = function (req, res, next) {
    console.log("Yeni bir istek geldi.");
    next();
  };
const middleware2 = function (req, res, next) {
    console.log("Post isteği için istek gönderildi.");
    next();
  };

const path = "/hello";
app.get(path,middleware,function(req,res){
    res.send("Merhaba, GET isteği attınız");
})
app.post(path,middleware2,middleware,function(req,res){
    res.send("Merhaba, POST isteği attınız");
})
app.put(path,middleware,function(req,res){
    res.send("Merhaba, PUT isteği attınız");
})
app.delete(path,middleware,function(req,res){
    res.send("Merhaba, DELETE isteği attınız");
})
app.listen(5001);