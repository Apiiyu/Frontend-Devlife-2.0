import axios from "../../config/axios";
import ApiRoute from '../../services/api.route'
import { base_url } from "../../config/base_url";

export async function postDataPermission(data, file){
    let formData = new FormData
    formData.append('user_nis', data.user_nis)
    formData.append('deskripsi', data.deskripsi)
    formData.append('keterangan', data.keterangan)
    formData.append('jam_izin', data.jam_izin)
    formData.append('lampiran', file)

    return axios.post(base_url+ApiRoute.permission, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
        .then((response) => {
            return response.data
        })
        .catch((error) => {
            console.log(error)
        })
}