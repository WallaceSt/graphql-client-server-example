import express, { response } from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

app.get('/status', (_, res) => {
    res.send({
        status: "OK"
    })
});

app.post('/authenticate', express.json(), (req, res) => {
    console.log(req.body);
    res.json(req.body);
});

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8000;
const HOSTNAME = process.env.HOSTNAME || '127.0.0.1';

app.listen(PORT, HOSTNAME, () => {
    console.log(`Server is listening at http://${HOSTNAME}:${PORT}.`);
});