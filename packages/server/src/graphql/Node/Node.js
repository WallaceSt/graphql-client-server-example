import { gql } from 'apollo-server-express';

export const typeDefs = gql`
    interface Node {
        id: ID!
    }
`;

