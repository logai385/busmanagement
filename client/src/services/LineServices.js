import Axios from 'axios';
import { API_URL } from '../util/Constants/SystemSettings';
class lineSerices{
    constructor(){}
    getLineList=()=>{
        return Axios({
            url: `${API_URL}/qlnv/lines`,
            method: 'GET',
        })
    }    
}
let LineService = new lineSerices();
export default LineService;