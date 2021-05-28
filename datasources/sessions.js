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
}

module.exports={SessionApi}