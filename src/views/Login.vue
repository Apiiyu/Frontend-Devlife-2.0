<template>
  <section class="login">
    <div class="row">
      <div class="col-lg-6 col-xl-6 col-xxl-6">
        <img src="@/assets/images/bg-sign.jpg" alt="bg-sign" class="bg-sign">
      </div>

      <div class="col-lg-5 col-xl-6 col-xxl-6 main-content-login">
        <div class="content-login">
          <div class="img-app d-flex justify-content-between">
            <img src="@/assets/images/app-logo.png" alt="app-logo">
            <h4>Dev App</h4>
          </div>

          <div class="main-content">
            <h5>Don’t have an account yet? <router-link :to="{ name: 'Sign Up' }">Create it here</router-link></h5>
            <hr class="decoration mb-4">
          </div>

          <form method="POST" @submit.prevent="login()">
            <div class="form-login">
              <div class="form-nis">
                <label for="nis">Nomor Induk Siswa</label>
                <input type="text" name="nis" id="nis" class="form-control" placeholder="Your NIS" v-model="nis">
                <span class="material-icons">person</span>
              </div>

              <div class="form-password">
                <label for="password">Password</label>
                <input type="password"  name="password" id="password" class="form-control" placeholder="Your Password" v-model="password">
                <span class="material-icons">https</span>
                <a href="forgotpassword">Forgot your password?</a>
              </div>

              <div class="btn-submit">
                <button type="submit" class="btn btn-primary btn-sm">Sign In</button>
              </div>
            </div>
          </form>
        </div>
      </div>      
    </div>
  </section>
</template>

<script>
import { createAlert } from '@/helper/sweetAlert.js'


export default {
  name: 'LoginApp',
  data() {
    return {
      nis: null,
      password: null
    }
  },
  methods: {
    login(){
        console.log('nis', this.nis)
        let nis = this.nis
        let password = this.password
        console.log('ini password', nis)
        this.$store.dispatch('login', { nis, password })
        .then(() => {
            createAlert('success', 'Success', 'Success login into your account!')
            setTimeout(() => {
                this.$router.push({ name: 'Dashboard'})
            }, 1000)
        })
        .catch((error) => {
            console.log('error', error)
        })
    }
  }
}
</script>
