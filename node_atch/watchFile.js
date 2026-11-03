const fs = require("fs")


const watcher = fs.watchFile("intro.txt", (curr, prev) =>{
    console.log("Current: ", curr.birthtime.t01S0String())
    console.log("Previous", Prev.birthtime.t01S0String())
});