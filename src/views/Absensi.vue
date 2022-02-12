/* eslint-disable vue/no-unused-vars */
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
            <div class="table-responsive">
                <b-table
                table-class="table table-centered w-100"
                thead-tr-class="none"
                :items="dataAbsensi"
                :fields="fields"
                responsive="sm"
                :per-page="perPage"
                :current-page="currentPage"
                :sort-by.sync="sortBy"
                :sort-desc.sync="sortDesc"
                :filter="filter"
                :filter-included-fields="filterOn"
                @filtered="onFiltered"
                >
                <template v-slot:cell(no)="data">
                    <div class="d-inline-flex align-items-center">
                    <b> {{ currentPageDetail > 1 ? currentPageDetail * perPage - (perPage-1) + data.index : data.index + 1 }}</b>
                    </div>
                </template>
                <template v-slot:cell(jam_masuk)="data">
                    <div class="jam-masuk">
                        <span v-if="data.item.keterangan == 'Tepat Waktu'" class="text-success">{{ data.item.jam_masuk }}</span>
                        <span v-else class="text-danger">{{ data.item.jam_masuk }}</span>
                    </div>
                </template>
                <template v-slot:cell(keterangan)="data">
                    <span v-if="data.item.keterangan == 'Tepat Waktu'" class="text-success">{{ data.item.keterangan }}</span>
                        <span v-else class="text-danger">{{ data.item.keterangan }}</span>
                </template>
                <template v-slot:cell(created_at)="data">
                    {{timeFormatDate(data.item.created_at)}}
                </template>
                <template v-slot:cell(jam_keluar)="data">
                    <div class="jam-keluar">
                        {{ data.item.jam_keluar ? data.item.jam_keluar : '-' }}
                    </div>
                </template>
                <template v-slot:cell(action)="data">
                    <button type="button" class="link-actions btn btn-primary btn-sm px-3 py-1 " @click="detailProject(data.item)">
                    Details
                    </button>
                </template>
                </b-table>
                <div class="row">
                <div class="col">
                    <div class="dataTables_paginate paging_simple_numbers float-right">
                    <ul class="pagination">
                        <b-pagination v-model="currentPageDetail" :total-rows="totalData" :per-page="perPage" prev-text="Prev" next-text="Next"></b-pagination>
                    </ul>
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
import { createAlert } from '@/helper/sweetAlert.js'
import { attendenceSiswa, getSelectedItem } from '@/services/attendence/attendence.service.js'
import { timeFormatComplete } from '@/helper/dateFormat'
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
                user_nis: localStorage.getItem('nis'),
                lokasi: null,
                base64: null,
                jam_masuk: null,
                keterangan: null,
                jam_keluar: null
            },
            latitude: null,
            longitude: null,
            dataAbsensi: [],
            fields: [
                {
                    sortable: true,
                    key: 'no',
                    label: 'No',
                },
                {
                    key: 'created_at',
                    label: 'Tanggal Masuk',
                    sortable: true,
                },
                {
                    key: 'jam_masuk',
                    label: 'Jam Masuk',
                    sortable: true,
                },
                {
                    key: 'keterangan',
                    label: 'Keterangan',
                    sortable: true,
                },
                {
                    key: 'jam_keluar',
                    label: 'Jam Keluar',
                    sortable: true,
                },
                {
                    key: 'action',
                    label: 'Action',
                    sortable: false,
                }
            ],
        }
    },
    mounted(){
        this.getDataAttendence()
    },
    methods: {
        timeFormatDate(date){
            return timeFormatComplete(date)
        },
        convertGeocode(latitude, longitude){
            $.ajax({
                url: "https://nominatim.openstreetmap.org/reverse",
                data: {
                    lat: latitude,
                    lon: longitude,
                    format: "json"
                },
                beforeSend: function (xhr) {
                    xhr.setRequestHeader(
                    'User-Agent',
                    'ID of your APP/service/website/etc. v0.1'
                    )
                },
                dataType: "json",
                type: "GET",
                async: true,
                crossDomain: true
            })
                .then((response) => {
                    console.log(response.address, 'ini address')
                    this.formData.lokasi = response.address.amenity
                    console.log('amenity', this.formData.lokasi)
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        getDataAttendence() {
            getSelectedItem(this.formData.user_nis)
            .then((response) => {
                    if(response.data){
                        this.dataAbsensi = (response.data).sort((a, b) => {return b.updatedAt - a.updatedAt});
                    } else {
                        console.log('error');
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        setupCamera: function (){

            const showPositionGeolocation = async (position) => {
                let latitude = position.coords.latitude  
                let longitude = position.coords.longitude 
                // -6.941667372971486, 107.63881253127151
        
                console.log(parseFloat(latitude), 'ini latitude')
                console.log(parseFloat(longitude), 'ini longitude')
                // if (latitude > -6.9107711){
                //     alert('condition oke')
                // } else {
                //     alert('condition false')
                // }

                $('.camera').addClass('d-none')
                    $('.camera-video').addClass('show')
                    Promise.all([
                        faceapi.nets.tinyFaceDetector.loadFromUri('@/assets/models'),
                        faceapi.nets.faceLandmark68Net.loadFromUri('@/assets/models'),
                        faceapi.nets.faceRecognitionNet.loadFromUri('@/assets/models'),
                        faceapi.nets.faceExpressionNet.loadFromUri('@/assets/models')
                    ])
                    const video = document.getElementById('video')
                    
                    let stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false})
                        video.srcObject = stream

                    video.addEventListener('play', () => {
                        console.log('event ok')
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

                // if (latitude >= 0){
                //     alert('position in school')
                    
                // } else {
                //     createAlert('error', 'Failed', `Sorry, your position is not at school`)

                //     await navigator.mediaDevices.getUserMedia({ video: false, audio: false})
                //     .then((result) => {
                //         console.log(result)
                //     })
                //     return false
                // }
                
                // Set data 
                this.latitude = latitude
                this.longitude = longitude
                this.convertGeocode(latitude, longitude)

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
            let today = new Date()
            let currentTime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
            this.formData.jam_masuk = currentTime
            
            if (today.getHours() >= 6 && today.getHours() <= 7){
                this.formData.keterangan = 'Tepat Waktu'
            } else {
                this.formData.keterangan = 'Terlambat'
            }

            if (this.formData.lokasi != 'SMK Negeri 4 Bandung'){
                createAlert('error', 'Error', 'Your location is not at school')
                return false
            }

            console.log('ini data absensi', this.formData)
            attendenceSiswa(this.formData)
                .then((response) => {
                    if(response.data){
                        let confirmation = createAlert('success', 'Success', 'Successfully fill attendance!')
                        
                        if(confirmation){
                            setTimeout(() => {
                                location.reload()
                            }, 500)
                        }
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
 .card-face {
     width: 99%;
     box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.08);
     border-radius: 10px;
     height: 590px;
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
.btn-primary{
    background-color: #4E4081 !important;
    border-color: #4E4081 !important;

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