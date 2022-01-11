<template>
  <section class="register">
    <div class="row">
      <div class="col-md-6 col-lg-6 col-xl-6 col-xxl-6">
        <img src="@/assets/images/bg-sign.jpg" alt="bg-sign" class="bg-sign">
      </div>

      <div class="col-md-6 col-lg-6 col-xl-6 col-xxl-6 main-content-register">
        <div class="content-register">
          <div class="img-app d-flex justify-content-between">
            <img src="@/assets/images/app-logo.png" alt="app-logo">
            <h4>Dev App</h4>
          </div>

          <form action="" method="POST">
            <div class="form-register">
              <div class="form-nis">
                <label for="nis">Nomor Induk Siswa</label>
                <input type="number" id="nis" class="form-control" placeholder="Your NIS" autocomplete="off" v-model="nis">
                <span class="material-icons">tag</span>
              </div>

              <div class="form-name">
                <label for="name">Name</label>
                <input type="text" id="name" class="form-control" placeholder="Your Name" autocomplete="off" v-model="name">
                <span class="material-icons">person</span>
              </div>

              <div class="form-jurusan">
                <label for="jurusan">Jurusan</label>
                <input type="text" id="jurusan" class="form-control" placeholder="Your Jurusan" autocomplete="off" v-model="jurusan">
                <span class="material-icons">person</span>
              </div>

              <div class="form-email">
                <label for="email">Email</label>
                <input type="text" id="email" class="form-control" placeholder="Your Name" autocomplete="off" v-model="email">
                <span class="material-icons">mail</span>
              </div>

              <div class="form-password">
                <label for="password">Password</label>
                <input type="password" id="password" class="form-control" placeholder="Your Password" autocomplete="off" v-model="password">
                <span class="material-icons">https</span>
                <p>Have account already?</p> <router-link :to="{ name: 'Sign In' }">Please go to Sign In</router-link> 
              </div>

                <form action="" method="" @submit.prevent="create()" class="btn-submit">
                    <button class="btn btn-primary btn-sm" type="submit">Sign Up</button>
                </form>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { createAccount } from '@/services/authentication/register.service.js'
import { createAlert } from '@/helper/sweetAlert.js'

export default {
    name: 'RegisterApp',
    data(){
        return{
            nis: null,
            name: null,
            jurusan: null,
            email: null,
            password: null
        }
    },
    mounted(){

    },
    methods: {
        create(){
            let data = {
                nis: this.nis,
                name: this.name,
                jurusan: this.jurusan,
                email: this.email,
                password: this.password
            }
            console.log('ini input data', data)

            // // hit api
            createAccount(data)
                .then((result) => {
                    if(result){
                        createAlert('success', 'Success', 'Success create new account!')
                        setTimeout(() => {
                            this.$router.push({ name: 'Sign In'})
                        }, 1000)
                        console.log('ini result', result)
                    } else {
                    createAlert('error', 'Failed', 'Failed create new account!')
                    }
                })
                .catch(() => {
                    createAlert('error', 'Failed', 'Failed create new account!')
                })
        }
    }
}
</script>