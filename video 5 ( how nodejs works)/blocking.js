//blocking operations i.e sync

const fs = require("fs");
const os=require("os")
console.log(os.cpus().length)


console.log("1")
const result=fs.readFileSync("contacts.txt","utf8")
console.log(result)
console.log("2")