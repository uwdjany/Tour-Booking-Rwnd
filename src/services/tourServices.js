
import axios from "axios";

class TourServices {
static async getAllTours() { 
    try{
const response = await axios.get("http://localhost:9090/tour");
console.log("response from Tours:",response.data) 
return response.data;
    }catch (e)  {
        console.log("Error :>>>>>>>>>", e); 
    }

}




}

export default TourServices