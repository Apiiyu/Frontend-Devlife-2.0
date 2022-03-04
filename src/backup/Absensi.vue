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
                <h4 class="text-left main-color ff-raleway">Face Detector</h4>
                
                <div class="camera d-flex flex-column justify-content-center align-items-center" @click="setupCamera()">
                    <i class="fas fa-camera lg"></i>
                    <span class="txt mt-2">Buka Kamera untuk mengaktifkan fitur face Detector</span>
                    
                </div>

                <div class="camera camera-video d-none" id="div">
                    <!-- Webcam -->
                    <canvas style="position: absolute;" id="canvas"></canvas>
                    <video id="video" width="720px" height="480px" autoplay muted></video>
                </div>

                <div class="d-flex justify-content-end mt-3">
                    <button class="btn-tampil" type="submit" @click="outputCapture()">Ambil Photo</button>
                    <!-- Output Capture Photo -->
                    <!-- <canvas id="canvas" class="d-none" style="width: 100%; height: 500px"></canvas> -->
                </div>
            </form>
        </div>

        <div class="d-flex bd-highlight mt-4 ml-3 align-items-center">
            <div class="mr-auto bd-highlight">
                <h4 class="text-left ff-raleway">Detail Absen</h4>
            </div>
            <div class="bd-highlight">
                <select name="bulan" class="select-bulan ff-raleway">
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
                <select name="tahun" class="select-tahun ff-raleway">
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                </select>
            </div>
            <div class="bd-highlight">
                <button class="btn-tampil ff-raleway">Tampilkan</button>
            </div>
        </div>



        <div class="card-table ml-3 mt-3 p-4">
            <div class="d-flex align-items-center">
            <div class="mr-auto">
                <h4 class="text-left main-color ff-raleway">Absensi Bulan <br> Januari 2022</h4>
            </div>
            <VueExcelXlsx
                :data="dataAbsensi"
                :columns="fields"
                :file-name="'Absensi Bulan Januari 2022'"
                :file-type="'xlsx'"
                :sheet-name="'Laporan Absensi'"
            >
            </VueExcelXlsx>
            
                <button class="btn-export mt-min ff-raleway" @click="exportToExcel">
                    Export Laporan
                </button>
            </div>
            <div class="table-responsive">
                <b-table
                table-class="table table-centered w-100 ff-raleway"
                id="table-absensi"
                thead-tr-class="ff-raleway"
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
                    <button type="button" class="link-actions btn btn-primary btn-sm px-3 py-1 ff-raleway" @click="detailProject(data.item)">
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
import { attendenceSiswa, getSelectedItem } from '@/services/attendence/attendence.service.js'
import { timeFormatComplete } from '@/helper/dateFormat'
import VueExcelXlsx from 'vue-excel-xlsx'
import * as faceapi from 'face-api.js'
import $ from 'jquery'
window.$ = $


export default {
    name: 'Absensi',
    components: {
        Navbar,
        Sidebar,
        Breadcrumb,
        VueExcelXlsx
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

        exportToExcel(){
            const elementTable = document.getElementById('table-absensi')
            console.log('data table',elementTable)
            // new TableExport(elementTable, {
            //     headers: true,
            //     footers: true,
            //     formats: ['xls', 'csv'],
            //     filename: 'Laporan Absensi',
            //     bootstrap: true,
            //     position: 'bottom',
            //     ignoreRows: null,
            //     ignoreCols: null,
            //     ignoreCSS: '.tableexport-ignore',
            //     emptyCSS: '.tableexport-empty',
            //     trimWhitespace: true,
            //     sheetname: 'Laporan Absensi',
            //     RTL: false,
                
            // })
        },
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
        
                // const dataUser = JSON.parse(localStorage.getItem('user'))

                $('.camera').addClass('d-none')
                    $('.camera-video').addClass('show')

                    await faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
                    await faceapi.nets.ssdMobilenetv1.loadFromUri('/models')
                    await faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
                    await faceapi.nets.tinyFaceDetector.loadFromUri('/models')
                    await faceapi.loadMtcnnModel('/models')
                    await faceapi.loadFaceRecognitionModel('/models')

                    const labels = [require('@/assets/images/profile.png')]
                    const options = new faceapi.MtcnnOptions()
                    const labeledFaceDescriptors = await Promise.all(
                        labels.map(async label => {
                            const imgUrl = `${label}`
                            const img = await faceapi.fetchImage(imgUrl)

                            const fullFaceDescription = await faceapi.detectSingleFace(img).withFaceLandmarks().withFaceDescriptor()
                            console.log(fullFaceDescription, 'description')
                            
                            if(!fullFaceDescription) {
                                throw new Error(`no faces detected for ${imgUrl}`)
                            }
    
                            const faceDescriptor = [fullFaceDescription.descriptor]
                            return new faceapi.LabeledFaceDescriptors(label, faceDescriptor)
                        })
                    )

                    
                    const video = document.getElementById('video')
                    const canvas = document.getElementById('canvas')

                    let stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false})
                        video.srcObject = stream

                    video.addEventListener('play', async () => {
                        const displaySize = { width: video.width, height: video.height }
                        faceapi.matchDimensions(canvas, displaySize)

                        setInterval(async () => {
                            const maxDescriptorDistance = 0.6
                            const faceMatcher = new faceapi.FaceMatcher(labeledFaceDescriptors, maxDescriptorDistance)
                            const detections = await faceapi.detectAllFaces(video, options).withFaceLandmarks().withFaceDescriptors()
                            const result = detections.map(d => faceMatcher.findBestMatch(d.descriptor))

                            for (let index = 0; index < result.length; index++){
                                if(result[index].label != 'unknown') {
                                    let drawbox = new faceapi.draw.DrawBox(detections[index].detection.box, { label: result[index].label })
                                    drawbox.draw(canvas)

                                    return false
                                }

                                let drawbox = new faceapi.draw.DrawBox(detections[index].detection.box, { label: result[index].label })
                                drawbox.draw(canvas)

                                index++
                            }
                            // result.forEach((bestMatch, i) => {
                            //     const labelUser = dataUser.name
                                
                            //     if (bestMatch.label != 'unknown'){
                            //         const box = detections[i].detection.box
                            //         const drawBox = new faceapi.draw.DrawBox(box, { label: labelUser })
                            //         drawBox.draw(canvas) 

                            //         return false
                            //     }

                            //     const box = detections[i].detection.box
                            //     const drawBox = new faceapi.draw.DrawBox(box, { label: bestMatch.label })
                            //     drawBox.draw(canvas) 
                            // })
                        }, 100)
                    
                            
                            
                            // if (bestMatch.label == 'unknown'){
                            //     return true
                            // } else {
                            //     const box = detections[i].detection.box
                            //     const drawBox = new faceapi.draw.DrawBox(box, { label: bestMatch.label })
                            //     drawBox.draw(canvas)

                            //     return false
                            // }
                        // })
                    })
                
                // Set data 
                this.latitude = latitude
                this.longitude = longitude
                this.convertGeocode(latitude, longitude)

                
                this.$toast.success('Success Get Location', {
                    position: 'top-right',
                    duration: 1000
                })
            }

            const showErrorGeolocation = (error) => {
                switch(error.code) {
                    case error.PERMISSION_DENIED:
                        this.$toast.error('Pengguna menolak permintaan Geolokasi.', {
                            position: 'top-right',
                            duration: 2000
                        })
                        break;
                    case error.POSITION_UNAVAILABLE:
                        this.$toast.error('Informasi lokasi tidak tersedia.', {
                            position: 'top-right',
                            duration: 2000
                        })
                        break;
                    case error.TIMEOUT:
                        this.$toast.error('Permintaan untuk mendapatkan lokasi pennguna habis.', {
                            position: 'top-right',
                            duration: 2000
                        })
                        break;
                    case error.UNKNOWN_ERROR:
                        this.$toast.error('Terjadi kesalahan.', {
                            position: 'top-right',
                            duration: 2000
                        })
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
                this.$toast.error('Your location is not school', {
                    position: 'top-right',
                    duration: 2000
                })
                console.log('ini data', this.formData)

                return false
            }

            console.log('ini data absensi', this.formData)
            attendenceSiswa(this.formData)
                .then((response) => {
                    if(response.data){
                        this.$toast.success('Success Fill Attandance', {
                            position: 'top-right',
                            duration: 2000
                        })
                        
                        setTimeout(() => {
                            location.reload()
                        }, 2100)
                    } else {
                        this.$toast.error('Failed Fill Attandance', {
                            position: 'top-right',
                            duration: 2000
                        })
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
.ff-poopins {
    font-family: 'Poppins', sans-serif;
}

.ff-raleway{
    font-family: 'Raleway', sans-serif;
}

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