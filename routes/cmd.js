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

    var command,target;
    switch (req.query.cmd){
        case 'c1':
            command=c1,target='data1';break;
        case 'c2':
            command=c2,target='data2';break;
        case 'c3':
            command=c3,target='data3';break;    
    }

    exec(command,function (err, stdout, stderr) {
        //Print stdout/stderr to console
        console.log("stdout : "+stdout);
        console.log("stderr : "+stderr);
        var out;
        out=stdout;
        if (stderr!="")
            out=stderr;
        
        var result={};
        result[target]=out;
        res.json(result);
        
  });
});

module.exports = router;