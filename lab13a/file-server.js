const http = require("http");
const fs = require("fs");

const server = http.createServer( (req, resp) => {
    // local folder path in front of the filename
    // const filename = "public/sample.html";
    const filename = "public/venice.jpg";

    try {
        const file = fs.readFileSync(filename);
        resp.writeHead(200, {"Content-Type": "image/jpeg"});
        resp.write(file);
        resp.end();
    } catch {
        resp.writeHead(500, {"Content-Type": "text/html"});
        resp.write(
        "<h1>500 Error - File not found</h1>\n");
        resp.end();
    }
    // // read the file asynchronously
    // fs.readFile(filename, (err, file) => {

    // // remember this is in callback function; it only gets
    // // invoked once the file has been read in
    // if (err) {
    //     resp.writeHead(500, {"Content-Type": "text/html"});
    //     resp.write("<h1>500 Error - File not found</h1>\n");
    // } else {
    //     resp.writeHead(200, {"Content-Type": "image/jpeg"});
    //     resp.write(file);
    // }
    // resp.end();
    // });
});

let port = 8080;
server.listen(port);
console.log("Server running at port= " + port);