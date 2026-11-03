fs.readFile("notes.txt", (err , data)=>{

})

// update File 
fs.appendFile("notes.txt" , updateData, (err) => {
    if(err) {
        console.log(err);
        return;

    }
    console.log("File updated successfully");
})