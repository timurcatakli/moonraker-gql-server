const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");

// BestsellersAPI
// bestsellersAPI
// bestsellers
// dataSources.bestsellersAPI.getBestsellers

const BestsellersAPI = require("./datasources/bestsellers");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  debug: true,
  dataSources: () => ({
    bestsellersAPI: new BestsellersAPI()
  })
});

server.listen().then(() => {
  console.log(`
    Server is running!
    Listening on port 4000
    Explore at https://studio.apollographql.com/dev
  `);
});
