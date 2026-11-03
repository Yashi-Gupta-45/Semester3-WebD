import fs from 'fs/promises'

async function readFileContent(filename){
        const data = await readFile(filename, "utf8")
        console.log(data)
}
readFileContent("notes.txt")

fs.WriteFile("hello.txt" , (err) => {
    if(err) {
        console.log(err);
        return;

    }
    console.log("File created successfully");
})

fs.readdir("./myFolder" , (err, files) => {
    if(err) {
        console.log(err);
        return;

    }
    console.log("File updated successfully");
})