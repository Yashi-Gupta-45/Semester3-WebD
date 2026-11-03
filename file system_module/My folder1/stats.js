import fs from 'fs'

fs.stat("notes.txt",(err,stats)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("Information of [notes.txt]",stats);
    console.log("Size of the file:",stats.size);
    console.log("creation time of the File:" , stats.birthtime.toISOString().split("I"));
    console.log("modification time of the file:", stats.mtime.toISOString());
    console.log("access time of the file:",stats.atime.toISOString());
    console.log("change time of the File:" , stats.ctime.toISOString());


    console.log("is it a file:",stats.isFile());
    console.log("is it a File:" , stats.isDirectory());

});
