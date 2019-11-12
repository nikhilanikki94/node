const fs=require('fs');
// const files=fs.readdirSync('./');// to synchronous the file
// console.log(files);

// const fs=require('fs');



//asynchronous

// const fs=require('fs');
// fs.readdir('./',function(err,files){
//     if(err)
//     console.log('error',err);
//     else
//     console.log('result',files);
// });


//reading file sync.



// var  data=fs.readFileSync('dummyfile.txt','utf8');
// console.log(data);






//async

// fs.readFile("dummyfile.txt",'utf8',function(err,data){
//     if(err)throw err;
//     console.log(data);
// })





//writing file async



fs.writeFile('text.txt','helloooo world', function(err){
    if(err)
    console.log(err)
    else
    console.log('write operation completed')
})




