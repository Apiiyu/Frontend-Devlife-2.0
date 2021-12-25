import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { base_url } from '../config/base_url'
import ApiRoute from '../services/api.route'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    user: {}
  },
  mutations: {
    auth_request(state) {
      state.status = 'loading'
    },
    auth_success(state, token, user){
      state.status = 'success'
      state.token = token
      state.user = user
    },
    auth_error(state){
      state.status = 'error'
    },
    logout(state){
      state.status = ''
      state.token = ''
    }
  },
  actions: {
    login({ commit }, user){
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axios({
          url: base_url+ApiRoute.login, 
          data: user,
          method: 'POST'
        })
          .then((response) => {
            console.log('Success login into your account', response)
            const token = response.data.access_token
            const user = response.data

            localStorage.setItem('token', token)
            localStorage.setItem('user', JSON.stringify(user))

            // Add the following line:
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
            window.location.href = "/#/home"
          })
          .catch((error) => {
            commit('auth_error')
            localStorage.removeItem('token')
            reject(error)
          })
      })
    }
  },
  modules: {
  }
})
