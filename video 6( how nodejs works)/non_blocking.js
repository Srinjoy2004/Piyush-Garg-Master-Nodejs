//non blocking i.e async

const fs = require("fs");

console.log("1");

fs.readFile("contacts.txt", "utf8", (err, result) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    console.log(result);
});

console.log("2");
