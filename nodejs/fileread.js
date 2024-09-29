
var fs = require('fs');
fs.readFile('sample.txt', 'utf8', function(err, yaho) {
    console.log(yaho);
})

/*
fs.readFile('읽고싶은 파일의 이름', 'utf8', function(콜백 / err, 변수 / data) {
    console.log(data);
*/