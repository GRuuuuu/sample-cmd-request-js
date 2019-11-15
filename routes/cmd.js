var express = require('express');                                
var router = express.Router();
var exec = require("child_process").exec;
var fs =require("fs");

//command to execute
var c1='df -h';
var c2='';
var c3='';

router.get('/', function(req, res, next) {
    console.log(req.query.cmd);

    var command;
    switch (req.query.cmd){
        case 'c1':
            command=c1;break;
        case 'c2':
            command=c2;break;
        case 'c3':
            command=c3;break;    
    }
    var execoption={ 
        encoding: 'euckr',
        timeout: 0,
        maxBuffer: 200*1024,
        killSignal: 'SIGTERM',
        cwd: null,
        env: null 
    }

    exec(command, execoption,function (err, stdout, stderr) {
        //Print stdout/stderr to console
        console.log("stdout : "+stdout);
        console.log("stderr : "+stderr);
        var result;
        result=stdout;
        if (stderr!="")
            result=stderr;

        fs.writeFile('text.txt',"\uFEFF"+result,'utf8',function(error,data){
            console.log(data);
        });
            
        //Simple response to user whenever localhost:3003 is accessed
        res.render('index', { title: 'cmd Request', data: result });
  });
});

module.exports = router;