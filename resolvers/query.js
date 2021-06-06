

module.exports={
        sessions:(parent,args,{dataSources},info)=>{
            
            return  dataSources.sessionApi.getSessions(args);
        },
        sessionById:(parent,{id},{dataSources},info)=>{
          
  
            try {
                return  dataSources.sessionApi.getSessionById(id);
            }catch(ex){
                console.log("error:",ex);
                return {code:"ERROR", message:"An error occuered2",token:"1233asadas"};
            }
           
        },
        speakers:(parent,args,{dataSources},info)=>{
         
            return dataSources.speakerApi.getSpeakers();
        },
        speakerById:(parent, {id},{dataSources},info)=>{
            return dataSources.speakerApi.getSpeakerById(id);
        }

}