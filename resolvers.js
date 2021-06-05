const _=require("lodash")
module.exports={
    Query:{
        sessions:(parent,args,{dataSources},info)=>{
            console.log(parent);
            return  dataSources.sessionApi.getSessions(args);
        },
        sessionById:(parent,{id},{dataSources},info)=>{
            console.log(parent);
            return  dataSources.sessionApi.getSessionById(id);
        },
        speakers:(parent,args,{dataSources},info)=>{
            return dataSources.speakerApi.getSpeakers();
        },
        speakerById:(parent, {id},{dataSources},info)=>{
            return dataSources.speakerApi.getSpeakerById(id);
        }
    },

    Session:{
      async  speakers(session,args,{dataSources}){
            const speakers=await dataSources.speakerApi.getSpeakers();
            console.log(speakers);
          const result=  speakers.filter(speaker=>{
           return  _.filter(session.speakers,{id:speaker.id}).length>0;
          });

          return result;
        }
    }
 };
