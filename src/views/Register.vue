<template>
  <section class="register">
    <div class="row">
      <div class="col-md-6 col-lg-6 col-xl-6 col-xxl-6">
        <img style="height: auto;" src="@/assets/images/bg-sign.jpg" alt="bg-sign" class="bg-sign">
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
                <input type="number" id="nis" class="form-control" placeholder="NIS anda" autocomplete="off" v-model="nis" required>
                <span class="material-icons">tag</span>
              </div>

              <div class="form-name">
                <label for="name">Nama</label>
                <input type="text" id="name" class="form-control" placeholder="Nama anda" autocomplete="off" v-model="name" required>
                <span class="material-icons">person</span>
              </div>

              <div class="form-jurusan">
                <label for="jurusan">Jurusan</label>
                <!-- <input type="text" id="jurusan" class="form-control" placeholder="Jurusan anda" autocomplete="off" v-model="jurusan"> -->
                <!-- dropdown jurusan -->
                <select style="padding: 9px 10px;font-size: 14px;"  name="jurusan" id="jurusan" v-model="jurusan" required>
                  <option value="" disabled>Kelas anda</option> <!-- placeholder -->
                  <option v-for="data in dataKelas" :key="data.id_kelas">{{data.nama}}</option>
                </select>
                <!-- <span class="material-icons">person</span> -->
              </div>

              <div class="form-email">
                <label for="email">Email</label>
                <input type="text" id="email" class="form-control" placeholder="Email anda" autocomplete="off" v-model="email" required>
                <span class="material-icons">mail</span>
              </div>

              <div class="form-password">
                <label for="password">Kata Sandi</label>
                <input type="password" id="password" class="form-control" placeholder="Kata sandi anda" autocomplete="off" v-model="password" required>
                <span class="material-icons">https</span>
                <p>Sudah punya akun?</p> <router-link :to="{ name: 'Sign In' }" class="txt-redirect-login">Silakan Masuk</router-link> 
              </div>

                <form action="" method="" @submit.prevent="create()" class="btn-submit">
                    <button class="btn btn-primary btn-sm" type="submit">Daftar</button>
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
import { getDataKelas } from '@/services/kelas/kelas.service.js'

export default {
    name: 'RegisterApp',
    data(){
        return{
            nis: null,
            name: null,
            kelas_id: null,
            jurusan: null,
            email: null,
            password: null,
            dataKelas: []
        }
    },
    mounted(){
        this.getData()
    },
    methods: {
        create(){
              if(this.jurusan === 'Rekayasa Perangkat Lunak 1'){
                this.kelas_id = 1
              } else if(this.jurusan === 'Rekayasa Perangkat Lunak 2'){
                this.kelas_id = 2
              } else if(this.jurusan === 'Rekayasa Perangkat Lunak 3'){
                this.kelas_id = 3
              } else if(this.jurusan === 'Teknik Komputer Jaringan 1'){
                this.kelas_id = 4
              } else if(this.jurusan === 'Teknik Komputer Jaringan 2'){
                this.kelas_id = 5
              } else if(this.jurusan === 'Multimedia'){
                this.kelas_id = 6
              } else if(this.jurusan === 'Teknik Audio-Video 1'){
                this.kelas_id = 7
              } else if(this.jurusan === 'Teknik Audio-Video 2'){
                this.kelas_id = 8
              } else if(this.jurusan === 'Teknik Instalasi Tenaga Listrik 1'){
                this.kelas_id = 9
              } else if(this.jurusan === 'Teknik Instalasi Tenaga Listrik 2'){
                this.kelas_id = 10
              } else if(this.jurusan === 'Teknik Otomasi Industri 1'){
                this.kelas_id = 11
              } else if(this.jurusan === 'Teknik Otomasi Industri 2'){
                this.kelas_id = 12
              } 
              let data = {
                nis: this.nis,
                kelas_id: this.kelas_id,
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
                        this.$toast.success('Pembuatan akun berhasil!', {
                          position: 'top-right',
                          duration: 1500
                        })
                        setTimeout(() => {
                          this.$router.push({ name: 'Sign In'})
                        }, 1600)
                        console.log('ini result', result)
                    } else {
                        this.$toast.error('Gagal membuat akun baru!', {
                            position: 'top-right',
                            duration: 2000
                        })
                    }
                })
                .catch(() => {
                  this.$toast.error('Gagal membuat akun baru!', {
                    position: 'top-right',
                    duration: 2000
                  })
                })
        },
        getData() {
          getDataKelas()
          .then((result) => {
                this.dataKelas = (result.data).sort((a, b) => {return b.updatedAt - a.updatedAt})
                console.log('ini response api', this.dataKelas[0])
            })
            .catch((error) => {
                console.log(error)
            })
        }
    }
}
</script>