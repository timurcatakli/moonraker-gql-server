const BestsellersAPI = require("./datasources/bestsellers");
const { ApolloServer } = require("apollo-server");

const typeDefs = require("./schema");
const resolvers = require("./resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
  dataSources: () => ({
    bestsellersAPI: new BestsellersAPI()
  })
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
  console.log("🚀Explore at https://studio.apollographql.com/dev");
});
