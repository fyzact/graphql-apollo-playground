 const { ApolloServer, ApolloError }= require('apollo-server');
 const {SessionApi} = require("./datasources/sessions");
 const resolvers=require("./resolvers");
 const SpeakerApi = require('./datasources/speakers');
 
 var typeDefs=require("./schema")

 const dataSources=()=>({
     sessionApi:new SessionApi(),
     speakerApi:new SpeakerApi()
 });

 
var apolloServer=new ApolloServer({
    typeDefs,
    resolvers,
    dataSources,
    // debug:false,
    formatError:(err)=>{
        console.log(err);
        if(err.extensions.code=="INTERNAL_SERVER_ERROR"){
            
            return new ApolloError("we are having some trouble","ERROR",{correlationId:"uniqueId"});
        }
        return err;
    }
});
apolloServer.listen({
 port:process.env.port || 4000
}).then((serverInfo)=>{
    console.log(`${serverInfo.url} started`);
})