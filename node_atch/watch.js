const fs = require('fs')

fs.watch("into.txt", (event Type, filename)=>{
    console.log("Event: ", eventType)
    console.log("Filename: ", filename)
})

set Timeout(()=>{
    watcher.close()
    console.log("Watcher closed")
}, 5000)

const watcher = fs.watchFile("intro.txt", (curr, prev) =>{
    console.log("Current: ", curr)
    console.log("Previous", Prev)
});