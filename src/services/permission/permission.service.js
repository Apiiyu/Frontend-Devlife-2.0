import axios from "../../config/axios";
import ApiRoute from '../../services/api.route'
import { base_url } from "../../config/base_url";

export async function postDataPermission(data){
    return axios.post(base_url+ApiRoute.permission, data)
        .then((response) => {
            return response.data
        })
        .catch((error) => {
            console.log(error)
        })
}