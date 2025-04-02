const http = require('http');
const fs = require('fs').promises; 

console.log('Starting');

const server = http.createServer(async (req, res) => {
    try {
        const data = await fs.readFile('sangu.txt', 'utf8'); 
        console.log(data);

        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(data);
    } catch (err) {
        console.error(err);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
    }
});



server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000/');
});

console.log("Ending");
