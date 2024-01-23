const url = require("url");
const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer(async (req, res) => {
    const fileName = path.join(__dirname, 'data/artists.json')
    console.log(fileName);

    try {
        const cont = await fs.readFileSync(fileName);
        res.writeHead(200, {"Content-type": "application/json"});
        res.write(cont)
    } catch {
        res.json({message: "Error"})
    }
    
    res.end();
})

const port = 8080;
server.listen(port);

// display a message on the terminal
console.log("Server running at port=" + port);
console.log("dirname = " + __dirname);
console.log("filename = " + __filename);