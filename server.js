var express = require('express');
var app = express();
// var projectlink = require('./routes/router');

// app.get('/',function(req, res){//요청,응답
//     res.send('나와랏') //send 는 글자만 보낼수있음
// })
// app.use('/user',projectlink);

app.get('/me',function(req, res){
    res.send('나의 소개')
})
app.get('/portfolio',function(req, res){
    res.send('나의 작품')
})
app.get('/preinterview',function(req, res){
    res.send('사전 면접')
})
app.get('/contact',function(req, res){
    res.send('면접제안')
})

app.listen( 5000,function(){
    console.log('서버구동완료!~~!!');
})

