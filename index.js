 const { ApolloServer, gql }= require('apollo-server');
 const {SessionApi} = require("./datasources/sessions");
 var typeDefs=gql`
 type Query{
     sessions:[Session]
    sessionById (id:ID): Session
 }
 type Session{
     id:ID!
     title:String! 
     description:String
     startAt:String
     endsAt:String
     room:String
     day:String
     format:String
     track:String @deprecated(reason:"this field is going to be away soon")
     level:String
 } `

 const dataSources=()=>({
     SessionApi:new SessionApi()
 });

  const resolvers={
    Query:{
        sessions:(parent,args,{dataSources},info)=>{
            console.log(parent);
            return  dataSources.SessionApi.getSessions();
        },
        sessionById:(parent,{id},{dataSources},info)=>{
            console.log(parent);
            return  dataSources.SessionApi.getSessionById(id);
        }
    }
 }

var apolloServer=new ApolloServer({typeDefs,resolvers,dataSources});
apolloServer.listen({
 port:process.env.port || 4000
}).then((serverInfo)=>{
    console.log(`${serverInfo.url} started`);
})