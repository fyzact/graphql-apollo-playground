module.exports={
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

}