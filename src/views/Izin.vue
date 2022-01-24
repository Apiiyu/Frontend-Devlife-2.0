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

      <div class="card-table ml-3 p-4">
        <span class="d-block text-left main-color mb-1">Keterangan</span>
        <div class="input-group mb-3">
          <select @change="selectKet($event)" class="custom-select" id="inputGroupSelect02">
            <option selected>Pilih keterangan...</option>
            <option value="Izin">Izin</option>
            <option value="Sakit">Sakit</option>
          </select>
        </div>
        <span class="d-block text-left main-color mb-1">Lampiran</span>
        <div class="input-group mb-3">
          <div class="custom-file">
            <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
            <input type="file" class="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01">
          </div>
        </div>
        <span class="d-block text-left main-color mb-1">Deskripsi</span>
        <textarea class="deskripsi" name="deskripsi" cols="30" rows="10"></textarea>
        <div class="d-flex justify-content-end mt-3">
          <button class="btn-tampil">Submit</button>
        </div>
      </div>

    </div>

   </div>
</template>

<script>
import Navbar from '@/components/navigation/Navbar.vue'
import Sidebar from '@/components/navigation/Sidebar.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'

export default {
    name: 'Settings',
    components: {
        Navbar,
        Sidebar,
        Breadcrumb
    },
    methods: {
      selectKet(event){
        console.log(event.target.value);
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