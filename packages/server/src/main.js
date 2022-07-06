import express from "express";
import cors from "cors";
import { ApolloServer, gql } from "apollo-server-express";

import typeDefs from "./graphql/TypeDefs";
import resolvers from "./graphql/Resolvers";

const app = express();

const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({
    app,
    bodyParserConfig: true
});

// app.use(cors());

// app.get('/status', (_, res) => {
//     res.send({
//         status: "OK"
//     })
// });

// app.post('/authenticate', express.json(), (req, res) => {
//     console.log(req.body);
//     res.json(req.body);
// });

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8000;
const HOSTNAME = process.env.HOSTNAME || "127.0.0.1";

app.listen(PORT, HOSTNAME, () => {
    console.log(`Server is listening at http://${HOSTNAME}:${PORT}.`);
});