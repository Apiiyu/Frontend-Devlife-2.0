<template>
  <div class="main-wrapper">
    <div class="navbar-bg"></div>
    <!-- Section Navbar Begin -->
      <Navbar />
    <!-- Section Navbar End -->


    <!-- Section Sidebar Begin -->
      <Sidebar />
    <!-- Section Sidebar End -->


    <!-- Section Content Begin -->
    <div class="main-content">  
      <Breadcrumb/>

        <form method="post" @submit.prevent="postData()">
            <div class="card-table ml-3 p-4">
                <span class="d-block text-left main-color mb-1">Keterangan</span>
                <div class="input-group mb-3">
                <select @change="selectKet($event)" class="custom-select" id="inputGroupSelect02" v-model="formData.keterangan">
                    <option selected>Pilih keterangan...</option>
                    <option value="Izin">Izin</option>
                    <option value="Sakit">Sakit</option>
                </select>
                </div>
                <span class="d-block text-left main-color mb-1">Lampiran</span>
                <div class="input-group mb-3">
                <div class="custom-file">
                    <label v-if="this.nama_file" class="custom-file-label" for="inputGroupFile01">{{ this.nama_file }}</label>
                    <label v-else class="custom-file-label" for="inputGroupFile01">{{ this.nama_file }}</label>
                    <input type="file" ref="file" class="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01" @change="handleUploadFile()">
                </div>
                </div>
                <span class="d-block text-left main-color mb-1">Deskripsi</span>
                <textarea class="deskripsi" name="deskripsi" cols="30" rows="10" v-model="formData.deskripsi"></textarea>
                <div class="d-flex justify-content-end mt-3">
                <button class="btn-tampil" type="submit">Submit</button>
                </div>
            </div>
        </form>
    </div>

   </div>
</template>

<script>
import Navbar from '@/components/navigation/Navbar.vue'
import Sidebar from '@/components/navigation/Sidebar.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
import { postDataPermission } from '@/services/permission/permission.service.js'

export default {
    name: 'Settings',
    components: {
        Navbar,
        Sidebar,
        Breadcrumb
    },
    data(){
        return {
            formData: {
                user_nis: localStorage.getItem('nis'),
                deskripsi: '',
                keterangan: '',
                jam_izin: null
            },
            file: '',
            name_file: null
        }
    },
    methods: {
        selectKet(event){
            console.log(event.target.value);
        },
        handleUploadFile(){
            this.file = this.$refs.file.files[0] //---> Get Input File
            this.name_file = this.$refs.file.files[0].name


            console.log('file', this.$refs.file.files[0]);
            console.log('nama_file', this.name_file);
        },
        postData(){
            let today = new Date()
            let hours = today.getHours()
            let minutes = today.getMinutes()
            let second = today.getSeconds()
            
            this.formData.jam_izin = hours + ':' + minutes + ':' + second

            console.log('ini data form', this.formData)
            postDataPermission(this.formData, this.file)
            .then(() => {
                this.$toast.success('Berhasil mengajukan izin!', {
                    position: 'top-right',
                    duration: 1500
                })
            }) 
            .catch((error) => {
                console.log(error)
            })
        }
    }
}
</script>

<style scoped>
span {
  font-weight: 706;
}
.deskripsi {
  width: 100%;
  padding: 12px;
  border: 1.2px solid #e4e6fc;
  background-color: #fdfdff;
  font-size: 16px;
}

 .btn-tampil {
     width: 165px;
     height: 50px;
     padding: 10px;
     font-size: 16px;
     font-weight: 500;
     border-radius: 5px;
     background-color: #4E4081;
     color: white;
     outline: none;
     border: 2px solid #4E4081;
     transition: .3s all ease;
 }
 .btn-tampil:hover, .btn-export:hover {
     background: transparent;
     color: #4E4081;
     border: 2px solid #4E4081;
 }
</style>