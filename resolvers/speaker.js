const { ApolloError } = require("apollo-server-errors");
const {Error}=require("../schema")
const _=require("lodash")
module.exports={
    async  speakers(session,args,{dataSources}){

      try{
        const speakers=await dataSources.speakerApi.getSpeakers();
        console.log(speakers);
      const result=  speakers.filter(speaker=>{
       return  _.filter(session.speakers,{id:speaker.id}).length>0;
      });

      return result;
      }catch(err){
        console.log(err);
        throw new Error();
      }
         
      }
  }