import fs from 'fs'

//Readable Stream
const readStream = fs.createReadStream("input.txt")

readStream.on("data", (chunks) =>{
    console.log("Data Received")
    console.log("Data: ", chunk)
})

// create writable stream 
const writestream.on("error")