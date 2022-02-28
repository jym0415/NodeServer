var express = require("express");
var router = express.Router(); //가져오기


router.get('/',function(req, res){//요청,응답
    res.send('/user 나와랏') //send 는 글자만 보낼수있음
})
router.get('/company',function(req, res){//요청,응답
    res.send('/user/company 화면임') //send 는 글자만 보낼수있음
})


module.exports = router; //내보내기
