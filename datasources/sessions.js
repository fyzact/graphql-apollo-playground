const { DataSource } = require("apollo-datasource");
const data=require("../data/sessions.json")

class SessionApi extends DataSource{
    constructor(){
        super()
    }

    initialize(config){

    }
    getSessions(){
        return data;
    }
    getSessionById(id){
        /*
        you can use lodash
        */
      return  data.filter(p=>p.id==parseInt(id))[0];
    }
}

module.exports={SessionApi}