export const resolvers = {
  Query: {
    demands: async () => {
      await new Promise((resolve) => setTimeout(resolve, Math.random() * 2000));
      return [];
    },
  },
};
