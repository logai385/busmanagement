import Axios from 'axios';
import { DOMAIN } from '../util/Constants/SystemSettings';

class transporterService{
    constructor(){}
    getTransporterList=()=>{
        return Axios({
            url: `${DOMAIN}/api/qlnv/transporters`,
            method: 'GET',
        })
    }
    deleteTransporter=(plate)=>{
        return Axios({
            url: `${DOMAIN}/api/qlnv/transporters/plate/${plate}`,
            method: 'DELETE',
        })
    }
    addTransporter=(transporter)=>{
        console.log(transporter);
        return Axios({
            url: `${DOMAIN}/api/qlnv/transporters`,
            method: 'POST',
            data: {
                "plate": transporter.plate,
                "mainLines": transporter.mainLines,
                "minorLines": transporter.minorLines,
            },
        })
    }
    uppdateTransporter=(transporter)=>{
        console.log(transporter);
        return Axios({
            url: `${DOMAIN}/api/qlnv/transporters`,
            method: 'PUT',
            data: {
                "id": transporter.id,
                "plate": transporter.plate,
                "mainLines": transporter.mainLines,
                "minorLines": transporter.minorLines,
            },
        })
    }
}
let TransporterService = new transporterService();
export default TransporterService;