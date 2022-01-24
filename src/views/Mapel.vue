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
        <Breadcrumb />
          <div class="card-table ml-3 p-4">
          <div class="d-flex align-items-center">
              <h4 class="text-left main-color">Guru Mata Pelajaran <br> SMKN 4 Bandung</h4>
          </div>
          <table class="table mt-3">
              <thead>
                  <tr>
                    <th scope="col" width="20">No</th>
                    <th scope="col">Nama Guru</th>
                    <th scope="col">Kode Guru</th>
                    <th scope="col">Nama Mapel</th>
                  </tr>
              </thead>
              <tbody>
                  <tr v-for="(tbl, index) in tabelGuru" :key="tbl.id" :index="index">
                      <th scope="row">{{index + 1}}</th>
                      <td>{{ tbl.namaGuru }}</td>
                      <td>{{ tbl.kodeGuru }}</td>
                      <td>{{ tbl.namaMapel }}</td>
                  </tr>
              </tbody>
          </table>
      </div>
      </div>
    </div>
</template>

<script>
import Navbar from '@/components/navigation/Navbar.vue'
import Sidebar from '@/components/navigation/Sidebar.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'

export default {
    name: 'Mata Pelajaran',
    components: {
        Navbar,
        Sidebar,
        Breadcrumb
    },
    data: function() {
        return {
          tabelGuru: [
            {
              id: 1,
              namaGuru: "Dra. RITA YULIATI",
              kodeGuru: "RIT",
              namaMapel: "Bahasa Indonesia"
            },
            {
              id: 2,
              namaGuru: "NENENG WAHDATUL FITRIYAH, S.Pd.",
              kodeGuru: "NNW",
              namaMapel: "Bahasa Inggris"
            },
            {
              id: 3,
              namaGuru: "Drs. H. ASEP MULYANA, M.Ag.",
              kodeGuru: "ASM",
              namaMapel: "Agama"
            },
            {
              id: 4,
              namaGuru: "RIZKY AMALLIA ESHI, S.Pd",
              kodeGuru: "ESI",
              namaMapel: "Bahasa Jepang"
            },
            {
              id: 5,
              namaGuru: "RIZAL FIRDAUS",
              kodeGuru: "FIR",
              namaMapel: "Bahasa Sunda"
            }
          ]
        }
    },
}
</script>

<style scoped>
</style>