import { gql } from "apollo-server-express";

export const typeDefs = gql`
type Client {
  id: ID!
  name: String!
}

type Demand {
  name: String!
  client: Client!
  deadline: String
}

type Query {
  demands: [Demand]!
}
`;