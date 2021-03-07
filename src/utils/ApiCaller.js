import axios from 'axios';
import * as URL from './../type/Config';
export default function ApiCaller(endponit , method ="get" ,data) {
    return axios({
            method : method,
            url : `${URL.LOCAL}/${endponit}`,
            data : data
        }).catch(err =>{
            console.log(err);
        });
    
};

