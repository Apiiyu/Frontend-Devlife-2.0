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
            <h5>Belum punya akun? <router-link :to="{ name: 'Sign Up' }">Buat di sini</router-link></h5>
            <hr class="decoration mb-4">
          </div>

          <form method="POST" @submit.prevent="login()">
            <div class="form-login">
              <div class="form-nis">
                <label for="nis">Nomor Induk Siswa</label>
                <input type="text" name="nis" id="nis" class="form-control ff-raleway" placeholder="NIS anda" autocomplete="off" v-model="nis">
                <span class="material-icons">person</span>
              </div>

              <div class="form-password">
                <label for="password">Kata Sandi</label>
                <input type="password"  name="password" id="password" class="form-control" placeholder="Kata sandi anda" v-model="password">
                <span class="material-icons">https</span>
                <a href="forgotpassword" class="txt-forgot-password">Lupa kata sandi Anda?</a>
              </div>

              <div class="btn-submit">
                <button type="submit" class="btn btn-primary btn-sm">Masuk</button>
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
            .then((result) => {
                console.log('ini result', result)
                this.$toast.success('Berhasil login ke dalam aplikasi', {
                    position: 'top-right',
                    duration: 1500
                })
                setTimeout(() => {
                    this.$router.push({ name: 'Dashboard'})
                }, 1600)
            })
            .catch((error) => {
                console.log('ini error', error)
                this.$toast.error('Error login into your account', {
                    position: 'top-right',
                    duration: 2000
                })
            })
        }
    }
}
</script>

<style scoped>
.ff-raleway{
    font-family: 'Raleway', sans-serif;
}
</style>