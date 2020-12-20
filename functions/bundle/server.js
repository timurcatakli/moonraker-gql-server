const BestsellersAPI = require("./datasources/bestsellers");
const ApolloServer = require("apollo-server").ApolloServer;
const ApolloServerLambda = require("apollo-server-lambda").ApolloServer;

const typeDefs = require("./schema");
const resolvers = require("./resolvers");

function createLambdaServer() {
  return new ApolloServerLambda({
    typeDefs,
    resolvers,
    introspection: true,
    playground: true,
    dataSources: () => ({
      bestsellersAPI: new BestsellersAPI()
    })
  });
}

function createLocalServer() {
  return new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    playground: true,
    dataSources: () => ({
      bestsellersAPI: new BestsellersAPI()
    })
  });
}

module.exports = { createLambdaServer, createLocalServer };
