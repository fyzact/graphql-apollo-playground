 const { ApolloServer, gql }= require('apollo-server');
 
 var typeDefs=gql`
 type Query{
     sessions:[Session]
 }
 type Session{
     id:ID!
     title:String!
     description:String
 }
 `

var apolloServer=new ApolloServer({typeDefs});
apolloServer.listen({
 port:process.env.port || 4000
}).then(({url})=>{
    console.log(`${url} started`);
})