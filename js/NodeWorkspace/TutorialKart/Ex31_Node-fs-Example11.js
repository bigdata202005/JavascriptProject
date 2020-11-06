// include fs-extra package
// npm install fs-extra
var fs = require("fs-extra");
 
var source = './folderA';
var destination = './folderB';
 
// copy source folder to destination
fs.copy(source, destination, function (err) {
    if (err){
        console.log('An error occured while copying the folder.')
        return console.error(err)
    }
    console.log('Copy completed!')
});