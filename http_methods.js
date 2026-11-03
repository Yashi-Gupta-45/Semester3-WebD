import http from 'http'
import http from 'http'
import fs from 'fs'





const http = require('http');
const server = http.Createserver(req, res)=>{
    console.log("server is created")
    if(req.url == '/data'){
        res.end("Home Page");

    }else if(req.url === "/config"){
        res.end(JSON.)
    }

    fs.readfile('config.json', (err,data)=>{

         
        
        res.setHeader{'Content-Type', 'application/json'};
        res.end(data);
    });

}
    server.listen(3000, () =>{
        console.log("Server is running on local host")
    })
