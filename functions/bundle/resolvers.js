module.exports = {
  Query: {
    categoryBestsellers: async (obj, args, context, info) => {
      const { url } = args;
      const { dataSources } = context;
      const results = await dataSources.bestsellersAPI.getBestsellersByCategory(
        args
      );
      return results;
    }
  }
};

// module.exports = {
//   Query: {
//     bestsellers: (_, __, { dataSources }, info) => {
//       info.cacheControl.setCacheHint({ maxAge: 6000, scope: "PRIVATE" });
//       const results = dataSources.bestsellersAPI.getBestsellers();
//       return results;
//     }
//   }
// };
