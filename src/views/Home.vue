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
        <div class="row">
          <div class="col-lg-12 col-xl-12 col-xxl-12">
            <section class="section mt-5 h-50">
              <div class="section-header">
                <p class="title-header">Dashboard</p>

                <div class="section-header-breadcrumb">
                  <div class="breadcrumb-item active"><a href="#">Home</a></div>
                  <div class="breadcrumb-item">Dashboard</div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-5 col-xl-5 col-xxl-5">
            <div class="card ml-">
              <div class="card-body">
                Test
                <canvas id="barAbsensi"></canvas>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-xl-3 col-xxl-3">
            <div class="card">
              <div class="card-body">
                <div class="date-time">
                  <div class="text-center">
                    <h3 class="title-hours">
                      Jam
                    </h3>

                    <p class="info-datetime"></p>
                    <p class="info-day"></p>
                    <p class="info-fulldate"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-xl-4 col-xxl-4">
            <div class="card">
              <div class="card-body calendar">
                <b-calendar v-model="value" :date-disabled-fn="dateDisabled" locale="id"></b-calendar>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/navigation/Navbar.vue'
import Sidebar from '@/components/navigation/Sidebar.vue'
import $ from 'jquery'
export default {
  name: 'Home',
  components: {
    Navbar,
    Sidebar,
  },
  data(){
    return{
      value: ''
    }
  },
  mounted(){
    this.getDateTime()
  },
  methods: {
    getDateTime(){
      let date = new Date()
      const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
      
      let time = date.getHours() + ":" + date.getMinutes()
      let day = weekday[date.getDay()]
      let fulldate = date.getDate() + "/" + date.getMonth() + "/" + date.getUTCFullYear()
      
      $('.info-datetime').html(time)
      $('.info-day').html(day)
      $('.info-fulldate').html(fulldate)
    },
    dateDisabled(ymd, date){
      const weekday = date.getDay()
      // const day = date.getDate()

      return weekday === 0 || weekday === 6 
    }
  }
}
</script>

