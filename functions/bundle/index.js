const { createLocalServer } = require("./server");

const server = createLocalServer();

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
  console.log("🚀Explore at https://studio.apollographql.com/dev");
});
