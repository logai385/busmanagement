import Axios from 'axios';
import { API_URL } from '../util/Constants/SystemSettings';
class documentServices{
    constructor(){}
    getDocumentList=()=>{
        return Axios({
            url: `${API_URL}/sign/documents`,
            method: 'GET',
        })
    }
    // getDocumentById=(id)=>{
    //     return Axios({
    //         url: `${DOMAIN}/api/qlnv/documents/${id}`,
    //         method: 'GET',
    //     })
    // }
    addDocument=(data)=>{
        // console.log(data);
        return Axios({
            url: `${API_URL}/sign/documents`,
            method: 'POST',
            data: data,
        })
    }
    // updateDocument=(id,data)=>{
    //     return Axios({
    //         url: `${DOMAIN}/api/qlnv/documents/${id}`,
    //         method: 'PUT',
    //         data: data,
    //     })
    // }
    // deleteDocument=(id)=>{
    //     return Axios({
    //         url: `${DOMAIN}/api/qlnv/documents/${id}`,
    //         method: 'DELETE',
    //     })
    // }
}

let DocumentService = new documentServices();
export default DocumentService;