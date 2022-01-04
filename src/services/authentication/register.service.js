import axios from "../../config/axios";
import ApiRoute from '../../services/api.route'
import { base_url } from "../../config/base_url";

export async function createAccount(data){
    return axios.post(base_url+ApiRoute.register, data)
        .then((response) => {
            console.log('ini response service', response)
            return response
        })
        .catch((error) => {
            console.log(error)
        })
}