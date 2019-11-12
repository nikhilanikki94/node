//console.log(__filename);
// console.log(__dirname);
// console.log(console);




// const path= require("path");
// var pathObj=path.parse(__filename);
// console.log(pathObj);
// console.log(pathObj.name);




const path= require("path");
var p1="home/folder/myfolder";
var p2="nikki/day1/tdy";
var fullpath=path.join(p1,p2);
console.log(fullpath)