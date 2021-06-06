const {  gql }= require('apollo-server');
module.exports=gql`
type Query{
    sessions (
       id:ID
    title:String
    description:String
    startAt:String
    endsAt:String
    room:Room
    day:String
    format:String
    track:String
    level:String

    ):[Session]
   sessionById (id:ID): SessionOrError
   speakers:[Speaker]
   speakerById(id:ID):Speaker

}
input SessionInput{

    title:String! 
    description:String
    startAt:String
    endsAt:String
    room:Room
    day:String
    format:String
    favorite:Boolean
    track:String @deprecated(reason:"this field is going to be away soon")
    level:String
}
type Mutation{
    toogleFavoriteSession(id:ID):Session
    addNewSession(session:SessionInput):Session
}
type CustomError{
    code:String,
    message:String,
    token:String
}
enum Room{
    EUROPA
    SOL
    SATURN
}
union SessionOrError=Session | CustomError
type Session{
    id:ID!
    title:String! 
    description:String
    startAt:String
    endsAt:String
    room:Room
    day:String
    format:String
    favorite:Boolean
    track:String @deprecated(reason:"this field is going to be away soon")
    level:String
    speakers:[Speaker]
} 

type Speaker{
    id:ID!
    bio:String
    name:String
   
}

`