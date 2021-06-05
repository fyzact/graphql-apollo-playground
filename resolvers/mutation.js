module.exports={
    toogleFavoriteSession:(parent,{id},{dataSources},info)=>{
        return  dataSources.sessionApi.toogleFavoriteSession(id);
    }
}