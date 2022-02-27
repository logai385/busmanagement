import Axios from 'axios';
import { DOMAIN } from '../util/Constants/SystemSettings';
class lineSerices{
    constructor(){}
    getLineList=()=>{
        return Axios({
            url: `${DOMAIN}/api/qlnv/lines`,
            method: 'GET',
        })
    }    
}
let LineService = new lineSerices();
export default LineService;