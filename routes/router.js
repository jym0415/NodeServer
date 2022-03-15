var express = require("express");
var router = express.Router(); //가져오기


router.get('/',function(req, res){//요청,응답 /user
    res.send('/노드서버에서 왔어용') //send 는 글자만 보낼수있음
})
router.get('/myport',function(req, res){//요청,응답
    res.send({'navidb':'[["나의소개","/about"],["나의작품","/portfolio"],["사전면접","/interview"]]'}) //send 는 글자만 보낼수있음
})


module.exports = router; //내보내기
