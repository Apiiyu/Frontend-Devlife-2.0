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
        <div class="card-face p-4 ml-3 h-100">
            <form method="post" @submit.prevent="postDataAttendence">
                <h4 class="text-left main-color">Face Detector</h4>
                
                <div class="camera d-flex flex-column justify-content-center align-items-center" @click="setupCamera()">
                    <i class="fas fa-camera lg"></i>
                    <span class="txt mt-2">Buka Kamera untuk mengaktifkan fitur face Detector</span>
                    
                </div>

                <div class="camera camera-video d-none">
                    <!-- Webcam -->
                    <video id="video" style="width: 100%; height: 500px;" autoplay muted></video>
                </div>

                <div class="d-flex justify-content-end mt-3">
                    <button class="btn-tampil" type="submit" @click="outputCapture()">Ambil Photo</button>
                    <!-- Output Capture Photo -->
                    <canvas id="canvas" class="d-none" style="width: 100%; height: 500px"></canvas>
                </div>
            </form>
        </div>

        <div class="d-flex bd-highlight mt-4 ml-3 align-items-center">
            <div class="mr-auto bd-highlight">
                <h4 class="text-left">Detail Absen</h4>
            </div>
            <div class="bd-highlight">
                <select name="bulan" class="select-bulan">
                    <option value="Januari">Januari</option>
                    <option value="Februari">Februari</option>
                    <option value="Maret">Maret</option>
                    <option value="April">April</option>
                    <option value="Mei">Mei</option>
                    <option value="Juni">Juni</option>
                    <option value="Juli">Juli</option>
                    <option value="Agustus">Agustus</option>
                    <option value="September">September</option>
                    <option value="Oktober">Oktober</option>
                    <option value="November">November</option>
                    <option value="Desember">Desember</option>
                </select>
            </div>
            <div class="bd-highlight mx-3">
                <select name="tahun" class="select-tahun">
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                </select>
            </div>
            <div class="bd-highlight">
                <button class="btn-tampil">Tampilkan</button>
            </div>
        </div>



        <div class="card-table ml-3 mt-3 p-4">
            <div class="d-flex align-items-center">
            <div class="mr-auto">
                <h4 class="text-left main-color">Absensi Bulan <br> Januari 2022</h4>
            </div>
            <button class="btn-export mt-min">
                Export Laporan
            </button>
            </div>
            <table class="table mt-3">
                <thead>
                    <tr>
                    <th scope="col" width="20">No</th>
                    <th scope="col">Tanggal</th>
                    <th scope="col">Jam Masuk</th>
                    <th scope="col">Jam Keluar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(tbl, index) in tabel" :key="tbl.id" :index="index">
                        <th scope="row">{{index + 1}}</th>
                        <td>{{ tbl.tgl }}</td>
                        <td>{{ tbl.jm }}</td>
                        <td>{{ tbl.jk }}</td>
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
import { createAlert } from '@/helper/sweetAlert.js'
import { attendenceSiswa } from '@/services/attendence/attendence.service.js'
import * as faceapi from 'face-api.js'
import $ from 'jquery'
window.$ = $

export default {
    name: 'Absensi',
    components: {
        Navbar,
        Sidebar,
        Breadcrumb
    },
    data: function() {
        return {
            formData: {
                nis: 1920118091,
                long: null,
                lat: null,
                base64: null
            },
            tabel: [
                {
                    id: 1,
                    tgl: 'Senin, 03-01-2022',
                    jm: '06:30:00',
                    jk: '16:30:40'
                },
                {
                    id: 2,
                    tgl: 'Selasa, 04-01-2022',
                    jm: '06:30:10',
                    jk: '16:00:40'
                },
                {
                    id: 3,
                    tgl: 'Rabu, 05-01-2022',
                    jm: '06:30:10',
                    jk: '16:30:40'
                },
            ]
        }
    },
    mounted(){

    },
    methods: {
        setupCamera: async function (){
            $('.camera').addClass('d-none')
            $('.camera-video').addClass('show')
            Promise.all([
                // faceapi.nets.tinyFaceDetector.loadFromUri('@/assets/models'),
                faceapi.nets.faceLandmark68Net.loadFromUri('@/assets/models'),
                faceapi.nets.faceRecognitionNet.loadFromUri('@/assets/models'),
                faceapi.nets.faceExpressionNet.loadFromUri('@/assets/models')
            ])
            const video = document.getElementById('video')
            
            let stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false})
                video.srcObject = stream

            video.addEventListener('play', () => {
                const canvas = faceapi.createCanvasFromMedia(video)
                document.body.append(canvas)
                const displaySize = { width: video.width, height: video.height }
                faceapi.matchDimensions(canvas, displaySize)
                setInterval(async () => {
                    const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions()
                    console.log(detections)
                    const resizedDetections = faceapi.resizeResults(detections, displaySize)
                    canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
                    faceapi.draw.drawDetections(canvas, resizedDetections)
                    faceapi.draw.drawFaceLandmarks(canvas, resizedDetections)
                    faceapi.draw.drawFaceExpressions(canvas, resizedDetections)
                }, 100)
            })

            const showPositionGeolocation = (position) => {
                // Set data 
                this.formData.lat = position.coords.latitude
                this.formData.long = position.coords.longitude

                createAlert('success', 'Success get your location', `Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`)
            }

            const showErrorGeolocation = (error) => {
                switch(error.code) {
                    case error.PERMISSION_DENIED:
                        createAlert('error', 'Error', "User denied the request for Geolocation.")
                        break;
                    case error.POSITION_UNAVAILABLE:
                        createAlert('error', 'Error', "Location information is unavailable.")
                        break;
                    case error.TIMEOUT:
                        createAlert('error', 'Error', "The request to get user location timed out.")
                        break;
                    case error.UNKNOWN_ERROR:
                        createAlert('error', 'Error', "An unknown error occurred.")
                        break;
                }
            }

            // Get Location
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPositionGeolocation, showErrorGeolocation);
            } else { 
                alert("Geolocation is not supported by this browser.")
            }

            
        },
        outputCapture(){
            console.log('action ok')
            const video = document.getElementById('video')
            const canvas = document.getElementById('canvas')
            
            canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height)
            console.log('url canvas', canvas.toDataURL('image/jpeg'))
            this.formData.base64 = canvas.toDataURL('image/jpeg')
        },
        postDataAttendence(){
            console.log('ini data absensi', this.formData)
            attendenceSiswa(this.formData)
                .then((response) => {
                    if(response.data){
                        createAlert('success', 'Success', 'Successfully fill attendance!')
                    } else {
                        createAlert('error', 'Error', 'Error fill attendance!')
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }
}
</script>

<style scoped>
.d-none{
    display: none !important;
}
.show{
    display: block !important;
}
 .main-color {
     color: #4E4081;
 }
 .card-face {
     width: 99%;
     box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.08);
     border-radius: 10px;
     height: 590px;
     background-color: white;
 }
 .card-table {
     width: 99%;
     box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.08);
     border-radius: 10px;
     height: auto;
     margin-bottom: 100px;
     background-color: white;
 }
 .camera {
     width: 100%;
     height: 500px;
     background-color: #F5F9FC;
     border: 2px dashed #DFDFDF;
     border-radius: 5px;
     cursor: pointer;
 }
 .fas.fa-camera.lg {
     color: #DFDFDF;
     font-size: 50px !important;
 }
 span.txt {
     color: #DFDFDF;
     font-weight: 500;
     font-size: 16px;
 }
 .select-bulan,.select-tahun {
     width: 165px;
     height: 50px;
     padding: 10px;
     font-size: 16px;
     background: transparent;
     border: 2px solid #4E4081;
     border-radius: 5px;
     color: #4E4081;
     font-weight: 600;
     outline: none;
     cursor: pointer;
 }
 .btn-tampil,.btn-export {
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
 .mt-min {
     margin-top: -10px;
 }
 thead,tbody {
     font-size: 16px;
 }

</style>