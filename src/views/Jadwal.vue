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

        <div class="d-flex justify-content-center align-items-center nav-day ml-3">
            <ul class="pt-3">
              <li class="active">Senin</li>
              <li>Selasa</li>
              <li>Rabu</li>
              <li>Kamis</li>
              <li>Jumat</li>
            </ul>
        </div>

        <div class="row mt-4">
          <div class="col">
            <div class="d-flex align-items-center card-mapel">
              <div class="d-flex justify-content-center align-items-center ml-4 border-icon">
                <img src="@/assets/images/icon-math.svg" alt="Matematika">
              </div>

              <div class="line mx-3"></div>

              <div class="content-mapel">
                <h4>Matematika</h4>
                <div class="info-mapel">
                  <div class="row">
                    <div class="col-md-6">
                      <img src="@/assets/images/schedule.svg" alt="clock" width="20">
                      <span class="ml-2">07.00 - 08.30</span>
                    </div>
                    <div class="col-md-6">
                      <img class="img-center" src="@/assets/images/person.svg" alt="person" width="18">
                      <span class="ml-2 pt-2">Moch. Ihsan, M.Pd.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="d-flex align-items-center card-mapel">
              <div class="d-flex justify-content-center align-items-center ml-4 border-icon">
                <img src="@/assets/images/icon-english.svg" alt="English">
              </div>

              <div class="line mx-3"></div>

              <div class="content-mapel">
                <h4>Bahasa Inggris</h4>
                <div class="info-mapel">
                  <div class="row">
                    <div class="col-md-6">
                      <img src="@/assets/images/schedule.svg" alt="clock" width="20">
                      <span class="ml-2">08.30 - 09.30</span>
                    </div>
                    <div class="col-md-6">
                      <img class="img-center" src="@/assets/images/person.svg" alt="person" width="18">
                      <span class="ml-2 pt-2">Neneng Wahdatul F, S.Pd.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row mt-3">
          <div class="col">
            <div class="d-flex align-items-center card-mapel">
              <div class="d-flex justify-content-center align-items-center ml-4 border-icon">
                <img src="@/assets/images/icon-agama.svg" alt="Agama">
              </div>

              <div class="line mx-3"></div>

              <div class="content-mapel">
                <h4>Agama</h4>
                <div class="info-mapel">
                  <div class="row">
                    <div class="col-md-6">
                      <img src="@/assets/images/schedule.svg" alt="clock" width="20">
                      <span class="ml-2">09.30 - 10.30</span>
                    </div>
                    <div class="col-md-6">
                      <img class="img-center" src="@/assets/images/person.svg" alt="person" width="18">
                      <span class="ml-2 pt-2">Drs. H. Asep Mulyana, M.Ag.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="d-flex align-items-center card-mapel">
              <div class="d-flex justify-content-center align-items-center ml-4 border-icon">
                <img src="@/assets/images/icon-jepang.svg" alt="Bahasa Jepang">
              </div>

              <div class="line mx-3"></div>

              <div class="content-mapel">
                <h4>Bahasa Jepang</h4>
                <div class="info-mapel">
                  <div class="row">
                    <div class="col-md-6">
                      <img src="@/assets/images/schedule.svg" alt="clock" width="20">
                      <span class="ml-2">11.00 - 13.30</span>
                    </div>
                    <div class="col-md-6">
                      <img class="img-center" src="@/assets/images/person.svg" alt="person" width="18">
                      <span class="ml-2 pt-2">Rizky Amallia Eshi, S.Pd</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
    name: 'Jadwal',
    components: {
        Navbar,
        Sidebar,
        Breadcrumb
    }
}
</script>

<style scoped>
  .main-content .nav-day {
    background: #fff;
    width: 97.5%;
    height: 80px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  }
  ul {
    list-style-type: none;
    font-size: 20px;
    cursor: pointer;
  }
  ul li {
    margin: 0 50px;
    float: left;
  }
  ul li:hover {
    font-weight: 700;
    color: #4E4081;
  }
  ul li.active, h4 {
    font-weight: 700;
    color: #4E4081;
  }
  .main-content .card-mapel {
    background: #fff;
    width: 100%;
    height: 100px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  }
  .border-icon {
    width: 50px;
    height: 45px;
    border: 2px solid #4E4081;
    box-sizing: border-box;
    border-radius: 10px;
  }
  .line {
    width: 1px;
    height: 70px;
    background: #D9D9D9;
  }
  .info-mapel {
    margin-left: -14px;
  }
  .content-mapel {
    width: 100%;
    text-align: left;
  }
  .img-center {
    margin-bottom: 5px;
  }
</style>