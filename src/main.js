import { createServer } from "http"; // used to create a server
import { readFile } from "fs";  // used to read files
import { resolve } from "path";
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
        case "/sign-in": {
            const filePath = resolve(__dirname, './pages/sign-in.html');
            readFile(filePath, (error, file) => {
                if (error) {
                    response.writeHead(500, "Can't process HTML file.");
                    response.end();
                    return;
                }

                response.writeHead(200);
                response.write(file);
                response.end();
            })
            break;
        }
        case "/home": {
            const filePath = resolve(__dirname, './pages/home.html');
            readFile(filePath, (error, file) => {
                if (error) {
                    response.writeHead(500, "Can't process HTML file.");
                    response.end();
                    return;
                }

                response.writeHead(200);
                response.write(file);
                response.end();
            })
            break;
        }
        case "/authenticate": {
            let data = "";
            request.on('data', (chunk) => {
                data += chunk;
            });
            request.on('end', () => {
                console.log(parse(data));
                response.writeHead(301, {
                    Location: "/home"
                });
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