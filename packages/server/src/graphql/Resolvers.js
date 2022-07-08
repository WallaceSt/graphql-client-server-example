import { resolvers as nodeResolvers } from './Node//resolvers';
import { resolvers as listResolvers } from './List/resolvers';
import { resolvers as clientResolvers } from './Client/resolvers';
import { resolvers as demandResolvers } from './Demand/resolvers';

const resolvers = {
  ...nodeResolvers,
  ...listResolvers,
  ...clientResolvers,
  ...demandResolvers,

  Query: {
    ...clientResolvers.Query,
    ...demandResolvers.Query,
  },

  Mutation: {
    ...clientResolvers.Mutation,
  },
};

export default resolvers;