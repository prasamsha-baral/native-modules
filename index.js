const fs=require("fs")

// fs.writeFile("message.txt","hello from nodejs",(err)=>{
//     if (err)throw err;
//     console.log("the file has been saved1")
// })


//it outputs the data in encoded form

// fs.readFile("message.txt", (err,data)=>{
//     if(err)throw err;
//     console.log(data)
// })

//utf8 is used to output the data in readable form 
//we have to comment out the writefile so that it doesnt overwrite 

fs.readFile("message.txt","utf8",(err,data)=>{
    console.log(data)
}
)

