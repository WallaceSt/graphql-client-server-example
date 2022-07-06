import { createServer } from "http"; // used to create a server
import { parse } from "querystring";

const server = createServer((request, response) => {    // creates a server
    switch (request.url) {  // reads the url paths
        case "/status": {
            response.writeHead(200, {   // writes a json response
                'Content-Type': 'application/json'
            });
            response.write(JSON.stringify(
                {
                    status: "Okay"
                }
            ));
            response.end();
            break;
        }
        case "/authenticate": {
            let data = "";
            request.on('data', (chunk) => {
                data += chunk;
            });
            request.on('end', () => {
                console.log(parse(data));
                response.end();
            })
            break;   
        }
        default: {
            response.writeHead(404, "Service not found");
            response.end();
        }
    }
});

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8000;
const HOSTNAME = process.env.HOSTNAME || '127.0.0.1';

server.listen(PORT, '127.0.0.1', () => {
    console.log(`Server is listening at http://${HOSTNAME}:${PORT}.`);
});