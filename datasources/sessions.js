const { DataSource } = require("apollo-datasource");
const data=require("../data/sessions.json")
_=require("lodash")
class SessionApi extends DataSource{
    constructor(){
        super()
    }

    initialize(config){

    }
    getSessions(args){
        console.log("arg",args)
        return _.filter(data,args)
    }
    getSessionById(id){
    
    //   return  data.filter(p=>p.id==parseInt(id))[0];
    //wiht lodash
    const sessions=_.filter(data,{id:parseInt(id)});
    return sessions[0];
    }
}

module.exports={SessionApi}