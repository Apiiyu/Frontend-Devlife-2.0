import axios from 'axios'
import { base_url } from '../config/base_url'
import ApiRoute from '../services/api.route'

export default (to, from, next) => {
  const token = localStorage.getItem('token')
    if (localStorage.getItem('user') != null && localStorage.getItem('user').length > 0) {
    axios({ 
      url: base_url+ApiRoute.checkBearer, 
      method: 'GET',
      headers:{
        "Authorization": "Bearer "+token,
      }
    })
    .then(resp => {
      console.log(resp)
        localStorage.setItem('nis', resp.data.nis)
      next();
    })
    .catch(err => {
      console.log(err)
      localStorage.removeItem('user')
      localStorage.removeItem('token')
      localStorage.removeItem('nis')
      next('/');
    })
  } else {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    localStorage.removeItem('nis')
    next('/');
  }
}