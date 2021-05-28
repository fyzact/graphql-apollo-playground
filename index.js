 const { ApolloServer, gql }= require('apollo-server');
 const data = require("./data/sessions.json")
 
 var typeDefs=gql`
 type Query{
     sessions:[Session]
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
 }
 `
  const resolvers={
    Query:{
        sessions:()=>{
            return data;
        }
    }
 };

var apolloServer=new ApolloServer({typeDefs,resolvers:resolvers});
apolloServer.listen({
 port:process.env.port || 4000
}).then((serverInfo)=>{
    console.log(`${serverInfo.url} started`);
})