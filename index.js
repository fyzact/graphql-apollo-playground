 const { ApolloServer }= require('apollo-server');
 const {SessionApi} = require("./datasources/sessions");
 const resolvers=require("./resolvers");
 const SpeakerApi = require('./datasources/speakers');
 
 var typeDefs=require("./schema")

 const dataSources=()=>({
     sessionApi:new SessionApi(),
     speakerApi:new SpeakerApi()
 });

 
var apolloServer=new ApolloServer({typeDefs,resolvers,dataSources});
apolloServer.listen({
 port:process.env.port || 4000
}).then((serverInfo)=>{
    console.log(`${serverInfo.url} started`);
})