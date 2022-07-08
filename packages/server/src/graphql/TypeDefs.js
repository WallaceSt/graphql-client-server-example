import { gql } from "apollo-server-express";

import { typeDefs as nodeTypeDefs } from "./Node/typeDefs";
import { typeDefs as listTypeDefs } from "./List/typeDefs";
import { typeDefs as clientTypeDefs } from "./Client/typeDefs";
import { typeDefs as demandTypeDefs } from "./Demand/typeDefs";

const typeDefs = gql`
  type Query {
    _root: String
  }

  type Mutation {
    _root: String
  }

  ${nodeTypeDefs}
  ${listTypeDefs}
  ${clientTypeDefs}
  ${demandTypeDefs}
`;

export default typeDefs;
