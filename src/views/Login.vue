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
            <h5>Don’t have an account yet? <router-link :to="{ name: 'RegisterApp' }">Create it here</router-link></h5>
            <hr class="decoration mb-4">
          </div>

          <form action="" method="POST">
            <div class="form-login">
              <div class="form-nis">
                <label for="nis">Nomor Induk Siswa</label>
                <input type="email" name="email" id="nis" class="form-control" placeholder="Your NIS" v-model="email">
                <span class="material-icons">person</span>
              </div>

              <div class="form-password">
                <label for="password">Password</label>
                <input type="password"  name="password" id="password" class="form-control" placeholder="Your Password" v-model="password">
                <span class="material-icons">https</span>
                <a href="forgotpassword">Forgot your password?</a>
              </div>

              <div class="btn-submit">
                <button type="button" class="btn btn-primary btn-sm" @click="login">Sign In</button>
              </div>
            </div>
          </form>
        </div>
      </div>      
    </div>
  </section>
</template>

<script>


export default {
  name: 'LoginApp',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login: function(){
      console.log('email', this.email)
      let email = this.email
      let password = this.password
      console.log('ini email', email)
      this.$store.dispatch('login', { email, password })
      .then(() => {
        alert('Login Successfully')
        console.log('Login Successfully')
      })
      .catch((error) => {
        console.log('error', error)
      })
    }
  }
}
</script>
