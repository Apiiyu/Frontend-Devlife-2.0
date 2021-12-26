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
      next();
    })
    .catch(err => {
      console.log(err)
      localStorage.removeItem('user')
      localStorage.removeItem('token')
      next('/');
    })
  } else {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    next('/');
  }
}