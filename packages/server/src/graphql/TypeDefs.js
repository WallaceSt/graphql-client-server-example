import { gql } from "apollo-server-express";
import { typeDefs as demandTypeDefs } from "./Demand/Demand";
import { typeDefs as clientTypeDefs} from "./Client/Client";

export const typeDefs = gql`
type Query {
  _root: String
}
${clientTypeDefs}
${demandTypeDefs}
`;