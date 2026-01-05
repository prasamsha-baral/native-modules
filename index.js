const fs=require("fs")
// const { inherits } = require("util")

fs.writeFile("message.txt","hello from nodejs",(err)=>{
    if (err)throw err;
    console.log("the file has been saved1")

fs.appendFile("message.txt", "\nNew line added", (err) => {
    if (err) throw err;
    console.log("Data appended");



//utf8 is used to output the data in readable form 
//we have to comment out the writefile so that it doesnt overwrite 

fs.readFile("message.txt","utf8",(err,data)=>{
    if(err){
        console.log("error reading fie:",err);
        return;
    }
    console.log(data)
});

});

});

// fs.rename("message.txt", "data.txt", (err) => {
//     if (err) throw err;
//     console.log("File renamed");
// });


//it outputs the data in encoded form

// fs.readFile("message.txt", (err,data)=>{
//     if(err)throw err;
//     console.log(data)
// })




// npm init

