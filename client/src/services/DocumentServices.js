import Axios from 'axios';
import { DOMAIN } from '../util/Constants/SystemSettings';
class documentServices{
    constructor(){}
    getDocumentList=()=>{
        return Axios({
            url: `${DOMAIN}/api/sign/documents`,
            method: 'GET',
        })
    }
    // getDocumentById=(id)=>{
    //     return Axios({
    //         url: `${DOMAIN}/api/qlnv/documents/${id}`,
    //         method: 'GET',
    //     })
    // }
    // addDocument=(data)=>{
    //     return Axios({
    //         url: `${DOMAIN}/api/qlnv/documents`,
    //         method: 'POST',
    //         data: data,
    //     })
    // }
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