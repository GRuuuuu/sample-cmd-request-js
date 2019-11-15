var express = require('express');                                
var router = express.Router();
var exec = require("child_process").exec;
var fs =require("fs");

//command to execute
//**Keep in mind what OS is used**
var c1='ls -al |grep app';
var c2='pwd';
var c3='';

router.get('/', function(req, res, next) {
    console.log(req.query.cmd);

    var command,target,oth1,oth2;
    switch (req.query.cmd){
        case 'c1':
            command=c1,target='data1',oth1='data2',oth2='data3';break;
        case 'c2':
            command=c2,target='data2',oth1='data1',oth2='data3';break;
        case 'c3':
            command=c3,target='data3',oth1='data1',oth2='data2';break;    
    }

    //Error handling
    if(command==""){
        var result={};
        result["title"]="cmd Request";
        result[target]="[ERR] please set command";
        result[oth1]='';
        result[oth2]='';
        res.render('index', result);
    }

    exec(command,function (err, stdout, stderr) {
        //Print stdout/stderr to console
        console.log("stdout : "+stdout);
        console.log("stderr : "+stderr);
        var out;
        out=stdout;
        if (stderr!=""){
            out=stderr;
        }
        if(err!=null)
            console.log("error : "+err);

        //set Result & Rendering
        var result={};
        result["title"]="cmd Request";
        result[target]=out;
        result[oth1]='';
        result[oth2]='';
        res.render('index', result);
  });
});
router.get('/download', function(req, res, next){
    var value=req.query.description;
    
    fs.writeFileSync("target.txt", '\ufeff' + value, {encoding: 'utf8'});
    
    const file="target.txt"
    var re=res.download(file);
});
module.exports = router;