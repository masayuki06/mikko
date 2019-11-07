var express=require('express');
var app=express();

app.get('/node',function(req,res){

    res.send('node');

});
app.get('/angular',function(req,res){

    res.send('angular');

});
app.get('/',function(req,res)
{
res.send('Hello World!');
});
var server=app.listen(3000,function() {});