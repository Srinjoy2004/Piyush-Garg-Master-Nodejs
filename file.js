const fs = require("fs");

//write files

//sync
fs.writeFileSync("./test.txt", "hello");

//async
fs.writeFileSync("./test1.txt", "whats", (err) => {});

//read files

//sync
const result = fs.readFileSync("./contacts.txt", "utf8"); //(file name,encoding)
console.log(result);


//async
// const result1 = fs.readFile("./contacts.txt", "utf8"); //(file name,encoding)
// console.log(result);

//if u use the above like that it will give error ....the ccorrect way is mentioned below

fs.readFile("./contacts.txt", "utf8",(err,result1)=>{
    if(err)

{
    console.log("Error",err);
}   
else{
    console.log(result1)
}
 });

 fs.appendFileSync("./test2.txt",` ${Date.now()}hey there\n`);

 fs.cpSync("./test.txt","./copy.txt"); //used to copy content of one file to another

 console.log(fs.statSync("./test.txt"))
