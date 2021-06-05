module.exports={
    toogleFavoriteSession:(parent,{id},{dataSources},info)=>{
        return  dataSources.sessionApi.toogleFavoriteSession(id);
    },

    addNewSession:(parent,{session},{dataSources},info)=>{
        return  dataSources.sessionApi.addNewSession(session);
    }

}