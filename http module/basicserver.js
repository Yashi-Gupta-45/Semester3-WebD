import http from 'http';

// Create basic http server 
const server = http.createServer((req, res)=>{
    console.log("Hello World");
    const order = {
        orderId: 10987;
        des: "Delhi";
        source: "Ghaziabad";
        username: "Radha";
    }
    res.writeHead(200)
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");

    res.end("Welcome from server");
})

server.listen(1000, "127.0.0.1", ()=>{
    console.log("Server is running......");
})
