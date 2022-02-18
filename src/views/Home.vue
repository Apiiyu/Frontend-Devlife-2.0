<style scoped>
    *{
        font-family: 'Raleway', sans-serif;
    }

    .main-wrapper .main-content .card-body .bar-info .title,
    .main-wrapper .main-content .carousel .title{
        font-weight: 600;
        font-size: 30px;
        color: #4E4081;
        text-align: start;
    }
    .main-wrapper .main-content .carousel .title{
        width: 350px;
    }
    .main-wrapper .main-content .card-body .detail-info .box-sakit,
    .main-wrapper .main-content .card-body .detail-info .box-value{
        background: #4E4081;
        border-radius: 5px 0 0 5px;
        font-weight: 600;
        font-size: 14px;
        line-height: 21px;
        color: #FFFFFF;
        border-right: 1px solid #eaeaea;
        padding: 0 10px;
    }
    .main-wrapper .main-content .card-body .detail-info .box-sakit p,
    .main-wrapper .main-content .card-body .detail-info .box-value p{
        height: 1rem;
    }
    .main-wrapper .main-content .card-body .detail-info .box-value{
        border: none;
        border-radius: 0 5px 5px 0;
        padding: 3px 10px;
    }
    .main-wrapper .main-content .carousel .box-matpel{
        width: 250px;
        height: 280px;
        background: #fff;
        border-radius: 10px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    }
    .main-wrapper .main-content .carousel .box-matpel .box-icon{
        width: 50px;
        height: 50px;
        border: 2px solid #4E4081;
        box-sizing: border-box;
        border-radius: 10px;
        position: relative;
        top: 1rem;
        left: 1rem;
    }
    .main-wrapper .main-content .carousel .box-matpel .box-icon img{
        width: 27px;
        height: 27px;
        position: absolute;
        top: 10px;
        left: 9px;
    }
    .main-wrapper .main-content .carousel .box-matpel .box-info{
        margin: 2rem 1rem;
    }
    .main-wrapper .main-content .carousel .box-matpel .box-info .title {
        font-weight: 500;
        font-size: 24px;
        line-height: 28px;
        color: #4E4081;
        width: 50px;
    }
    .main-wrapper .main-content .carousel .box-matpel .box-info p{
        font-weight: 600;
        font-size: 14px;
        line-height: 16px;
        width: 100%;
        color: rgba(0, 0, 0, 0.6);
    } 
    .main-wrapper .main-content .carousel .box-matpel .btn-attendence{
        width: 90%;
        height: 40px;
        border-radius: 10px;
        background: #4E4081;
        vertical-align: bottom;
    }
    canvas#barAbsensi {
        height: auto !important;
        margin-left: -120px;
    }
    .btn-plg {
        width: 275px;
        height: 50px;
        margin-top: -20px;
    }
    .card .card-date {
        padding: 45px;
        height: 345px;
        margin-top: 50px;
    }

    @media screen and (max-width: 1368px) {
        canvas#barAbsensi {
            height: 150px !important;
            margin-left: -55px;
        }
        h1.title {
            margin-top: 15px !important;
        }
    }
    @media screen and (max-width: 1220px) {
        canvas#barAbsensi {
            height: 120px !important;
            margin-left: -65px;
        }
        h1.title {
            margin-top: 5px !important;
        }
    }

</style>

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

        <div class="row">
          <div class="col-lg-9 col-xl-9 col-xxl-9">
            <div class="card">
              <div class="card-body">
                <div class="d-flex align-content-center">
                    <div class="bar-info">
                        <h1 class="title mt-1">Persentase Kehadiran</h1>
                    </div>
                </div>
                <canvas id="barAbsensi" width="500px" height="200px" style="width: 480px; margin-left: 10px"></canvas>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-xl-3 col-xxl-3">
            <div class="card">
              <div class="card-body card-date">
                <template>
                  <clock :time="time" size="200px" style="margin-top:-56px;"></clock>
                </template>
                <vCalendar :from-page="{ month: 2, year: 2022}" :timezone="timezone" :attributes="attrs" />
                <p class="info-datetime mt-3"></p>
                <p class="info-day"></p>
                <p class="info-fulldate"></p>
              </div>
            </div>
            
            <button class="btn btn-plg disabled btn-secondary" id="absenPulang" @click="attandancePulang()">Absen Pulang</button>
          </div>
        </div>

        <div class="row">
            <div class="col-md-12">
                <section class="carousel">
                    <h1 class="title">
                        Mata Pelajaran Hari Ini
                    </h1>
                    <Carousel :autoplay="false" :nav="false" :dots="false" :autoWidth="true" :margin="20">
                        <div class="box-matpel">
                            <div class="box-icon">
                                <img src="@/assets/images/icon-math.svg" alt="">
                            </div>

                            <div class="box-info">
                                <h1 class="title">Matematika</h1>
                                <p class="hours d-flex justify-content-start">07.00 - 08.30</p>
                                <p class="teacher d-flex justify-content-start">Moch. Ihsan, M .Pd.</p>
                            </div>

                            <button class="btn btn-primary btn-attendence mt-4">Detail</button>
                        </div>
                        
                        <div class="box-matpel">
                            <div class="box-icon">
                                <img src="@/assets/images/icon-english.svg" alt="">
                            </div>

                            <div class="box-info">
                                <h1 class="title">Bahasa Inggris</h1>
                                <p class="hours d-flex justify-content-start">08.30 - 09.30</p>
                                <p class="teacher d-flex justify-content-start">Neneng Wahdatul Fitriyah, S.pd</p>
                            </div>

                            <button class="btn btn-primary btn-attendence">Detail</button>
                        </div>

                        <div class="box-matpel">
                            <div class="box-icon">
                                <img src="@/assets/images/icon-agama.svg" alt="">
                            </div>

                            <div class="box-info">
                                <h1 class="title">Agama</h1>
                                <p class="hours d-flex justify-content-start">09.30 - 10.30</p>
                                <p class="teacher d-flex justify-content-start">Drs. H. Asep Mulyana. M,Ag.</p>
                            </div>

                            <button class="btn btn-primary btn-attendence mt-4">Detail</button>
                        </div>

                        <div class="box-matpel">
                            <div class="box-icon">
                                <img src="@/assets/images/icon-jepang.svg" alt="">
                            </div>

                            <div class="box-info">
                                <h1 class="title">Bahasa Jepang</h1>
                                <p class="hours d-flex justify-content-start">11.00 - 13.30</p>
                                <p class="teacher d-flex justify-content-start">Rizky Amallia Eshi, S.pd</p>
                            </div>

                            <button class="btn btn-primary btn-attendence">Detail</button>
                        </div>
                        <div class="box-matpel">
                            <div class="box-icon">
                                <img src="@/assets/images/icon-math.svg" alt="">
                            </div>

                            <div class="box-info">
                                <h1 class="title d-flex justify-content-start">Matematika</h1>
                                <p class="hours d-flex justify-content-start">07.00 - 08.30</p>
                                <p class="teacher d-flex justify-content-start">Moch. Ihsan, M .Pd.</p>
                            </div>

                            <button class="btn btn-primary btn-attendence mt-4">Detail</button>
                        </div>
                    </Carousel>
                </section>
            </div>
        </div>

        
        </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/navigation/Navbar.vue'
import Sidebar from '@/components/navigation/Sidebar.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
import { updateAttendence } from '@/services/attendence/attendence.service'
import Carousel from 'vue-owl-carousel'
import Chart from 'chart.js'
import $ from 'jquery'
import vCalendar from 'v-calendar'
import Clock from 'vue-clock2'



export default {
    name: 'Home',
    components: {
        Navbar,
        Sidebar,
        Breadcrumb,
        Carousel,
        vCalendar,
        Clock
    },
    data(){
        return{
            dataPulang: {
                nis: localStorage.getItem('nis'),
                created_at: null,
                current_time: null
            },
            value: '',
            chart_content: {
                type: 'line',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    datasets: [
                        {
                            borderWidth: 2,
                            data: [50, 30, 40, 70, 70, 75, 25, 50, 70, 60, 30, 50],
                            borderColor: ['rgb(78, 64, 129)'],
                            backgroundColor: ['rgba(78, 64, 129, 0.1)'],
                            borderSkipped: false
                        }
                    ]
                }, 
                options: {
                    responsive: true,
                    legend: {
                        display: false
                    },
                    tooltips: {
                        enabled: false
                    },
                    cornerRadius: 10,
                    scales: {
                        xAxes: [{
                            gridLines: {
                                display: false
                            }
                        }],
                        yAxes: [{
                            gridLines: {
                                display: true
                            },
                            ticks: {
                                max: 100 ,
                                min: 0,
                                stepSize: 25,
                                fontFamily: 'Poppins',
                                fontColor: '#B9B9C3',
                                fontStyle: 'bold'
                            }
                        }]
                    }
                },
            }
        }
    },
    mounted(){
        this.getDateTime()
        this.setupChart()
        this.absenPulang()
    },
    methods: {
        absenPulang(){
            let today = new Date()
            let hours = today.getHours()
            console.log(today)

            if (hours >= 11 && hours <= 14) {
                $('.btn-plg').addClass('btn-primary')
                $('.btn-plg').removeClass('btn-secondary')
                $('.btn-plg').removeClass('disabled')
            } else {
                $('.btn-plg').addClass('btn-secondary')
                $('.btn-plg').removeClass('btn-primary')
                $('.btn-plg').addClass('disabled')
            }
        },

        attandancePulang(){
            let today = new Date()
            let years = today.getFullYear()
            let months = today.getMonth() + 1
            let days = today.getDate()

            if (months < 10) {
                months = '0' + months
            }

            this.dataPulang.created_at = years + '-' + months + '-' + days

            let hours = today.getHours()
            let minutes = today.getMinutes()
            let second = today.getSeconds()
            this.dataPulang.current_time = hours + ':' + minutes + ':' + second
            if (hours >= 11 && minutes >= 0) {
                updateAttendence(this.dataPulang)
                    .then((response) => {
                        if (response.data){
                                this.$toast.success('Berhasil absen pulang', {
                                position: 'top-right',
                                duration: 1500
                            })
                        }
                    })
                    .catch(() => {
                        this.$toast.error('Belum memasuki jam absen pulang', {
                        position: 'top-right',
                        duration: 2000
                        })
                    })
            } else {
                return false
            }
        },

        getDateTime(){
            let date = new Date()
            const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
            
            let time = date.getHours() + ":" + date.getMinutes()

            let day = weekday[date.getDay()]
            let fulldate = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getUTCFullYear()
            
            $('.info-datetime').html(time)
            $('.info-day').html(day)
            $('.info-fulldate').html(fulldate)
            },
            dateDisabled(ymd, date){
            const weekday = date.getDay()
            // const day = date.getDate()
            return weekday === 0 || weekday === 6 
        },
        setupChart(){
            const chart = document.getElementById('barAbsensi').getContext('2d')
            // Setup Doughnut Chart
            const doughnutChart = new Chart(chart, this.chart_content)
            console.log(doughnutChart)
        }
    }
}
</script>