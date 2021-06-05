const {DataSource}=require("apollo-datasource")
const {RESTDataSource}=require("apollo-datasource-rest")

class SpeakerApi extends RESTDataSource {
    constructor(){
        super();
        this.baseURL='http://localhost:3000/speakers'
    }
  

  async  getSpeakers (){
         const data=await this.get(`/`);
        return data;
    }
   async getSpeakersById(id){
        const data=await this.get(`/${id})`);
        return data;
    }
}
module.exports=SpeakerApi;