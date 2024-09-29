//node.js에서 파일목록 알아내기
/*
var testFolder = './data';
var fs = require('fs');

var o = fs.readdir(testFolder, function(err, filelist) {
            for(var i = 0; i < filelist.length; i++) {
                console.log(filelist[i]+' : ' + i);
            }
        });

console.log(o);
*/



var fs = require('fs');
var testFolder = './data';

fs.readFile('data/HTML', 'utf-8', function(err, list) {
    console.log(list);
})

fs.readdir('testFolder', function(err, filelist) {
    for(var i = 0; i < testFolder.length; i++) {
        console.log(testFolder[i]);
    }
})




