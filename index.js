 const { ApolloServer }= require('apollo-server');
 const {SessionApi} = require("./datasources/sessions");
 var typeDefs=require("./schema")

 const dataSources=()=>({
     SessionApi:new SessionApi()
 });

  const resolvers=require("./resolvers");

var apolloServer=new ApolloServer({typeDefs,resolvers,dataSources});
apolloServer.listen({
 port:process.env.port || 4000
}).then((serverInfo)=>{
    console.log(`${serverInfo.url} started`);
})