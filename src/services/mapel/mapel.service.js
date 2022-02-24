import axios from "../../config/axios";
import ApiRoute from '../../services/api.route'
import { base_url } from "../../config/base_url";

export async function getDataMapel(hari){
    return axios.get(base_url+ApiRoute.matpel+`/${hari}`)
        .then((response) => {
            return response.data
        })
        .catch((error) => {
            console.log(error)
        })
}