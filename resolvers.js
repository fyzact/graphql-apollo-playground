module.exports={
    Query:{
        sessions:(parent,args,{dataSources},info)=>{
            console.log(parent);
            return  dataSources.SessionApi.getSessions(args);
        },
        sessionById:(parent,{id},{dataSources},info)=>{
            console.log(parent);
            return  dataSources.SessionApi.getSessionById(id);
        }
    }
 }