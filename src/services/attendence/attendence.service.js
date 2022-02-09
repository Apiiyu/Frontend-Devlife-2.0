import axios from "../../config/axios";
import ApiRoute from '../../services/api.route'
import { base_url } from "../../config/base_url";

export async function getData() {
    return axios.get(base_url+ApiRoute.getDataAttendence)
    .then((response) => {
        return console.log(response.data); 
    })
    .catch((error) => {
        console.log(error)
    })
}

export async function attendenceSiswa(data){
    return axios.post(base_url+ApiRoute.postAttendence, data)
        .then((response) => {
            return response.data
        })
        .catch((error) => {
            console.log(error)
        })
}