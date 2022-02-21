<template>
    <div class="wrapper">
            <Navbar/>
            <!-- Banner Section start here -->
            <section class="banner-section bg_size style-3" :style="{ 'background-image' : 'url('+require('@/assets/images/banner/erp/banner-bg.jpg')+')'}">
                <div class="round-shape d-none d-lg-block">
                    <div class="shape round-1"></div>
                    <div class="shape round-2"></div>
                    <div class="shape round-3"></div>
                    <div class="shape round-4"></div>
                    <div class="shape round-5"></div>
                </div>
                <div class="banner-area">
                    <div class="container">
                        <div class="row no-gutters align-items-center">
                            <div class="col-xl-6 col-12">
                                <div class="content-part">
                                    <div class="section-header style-2">
                                        <h2>Face Detector</h2>
                                        <span>Alat absensi dilengkapi fitur pendeteksi wajah</span>
                                         <p>Situs web Face Detector adalah situs yang berfungsi untuk mendata kehadiran dengan memindai wajah pengguna, lalu data akan tersimpan di database dan akan dianggap hadir apabila telah melakukan pemindaian wajah dengan syarat tertentu.</p>
                                         <router-link :to="{ name: 'Sign Up' }" class="nav-link lab-btn"><span>Create Account</span></router-link>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-6 col-12">
                                <div class="section-wrapper">
                                    <div class="banner-thumb">
                                        <img src="@/assets/images/thumb.png" alt="lab-banner">
                                        <div class="thumb-shape">
                                            <div class="th-shape th-shape-1"><img src="@/assets/images/comp4.png" alt="th-shape"></div>
                                            <div class="th-shape th-shape-2"><img src="@/assets/images/comp3.png" alt="th-shape"></div>
                                            <div class="th-shape th-shape-3"><img src="@/assets/images/comp2.png" alt="th-shape"></div>
                                            <div class="th-shape th-shape-5"><img src="@/assets/images/comp1.png" alt="th-shape"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- Banner Section ending here -->

            <!-- About Section Start Here -->
            <section class="about-section erp-about style-2 padding-tb" id="featured">
                <div class="container">
                    <div class="section-wrapper">
                        <div class="lab-item">
                            <div class="lab-inner">
                                <div class="lab-thumb">
                                    <img src="@/assets/images/about/erp/01.png" alt="lab-thumb">
                                </div>
                                <div class="lab-content">
                                    <h4>Absen Dengan Mudah</h4>
                                    <p>Absen tidak lagi manual seperti dulu sebelum KBM dimulai yang tentunya akan memakan waktu banyak.</p>
                                </div>
                            </div>
                        </div>
                        <div class="lab-item">
                            <div class="lab-inner">
                                <div class="lab-thumb">
                                    <img src="@/assets/images/about/erp/02.png" alt="lab-thumb">
                                </div>
                                <div class="lab-content">
                                    <h4>Lokasi Absensi Harus dalam Jangkuan</h4>
                                    <p>Absen hanya bisa dilakukan saat berada di wilayah sekolah.</p>
                                </div>
                            </div>
                        </div>
                        <div class="lab-item">
                            <div class="lab-inner">
                                <div class="lab-thumb">
                                    <img src="@/assets/images/about/erp/03.png" alt="lab-thumb">
                                </div>
                                <div class="lab-content">
                                    <h4>Dapat Mengajukan Izin</h4>
                                    <p>User dapat mengajukan izin atau sakit jika tidak hadir ke sekolah dan harus melampirkan bukti.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- About Section Ending Here -->

            <!-- ERP Manager Section Start Here -->
            <section class="erp-manager bgc-1 padding-tb">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-12">
                            <div class="lab-thumb">
                                <div class="abs-lab-thumb">
                                    <span class="pluse_1"></span>
                                    <span class="pluse_2"></span>
                                    <img src="@/assets/images/erp/manager/icon/01.png" alt="lab-erp">
                                </div>
                                <img src="@/assets/images/erp/manager/01.png" alt="lab-erp">
                            </div>
                        </div>
                        <div class="col-lg-6 col-12 d-flex align-items-center">
                            <div class="lab-content">
                                <h2>Tampilan user yang menarik</h2>
                                <p>Website devector memiliki tampilan user interface yang menarik sehingga membuat tampilan lebih nyaman dan enak dipandang.</p>
                                <router-link :to="{ name: 'Sign In'}" class="lab-btn">
                                    <span>View Details</span>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="erp-manager padding-tb">
                <div class="container">
                    <div class="row flex-row-reverse">
                        <div class="col-lg-6 col-12">
                            <div class="lab-thumb">
                                <div class="abs-lab-thumb pink">
                                    <span class="pluse_1"></span>
                                    <span class="pluse_2"></span>
                                    <img src="@/assets/images/erp/manager/icon/01.png" alt="lab-erp">
                                </div>
                                <img src="@/assets/images/erp/manager/02.png" alt="lab-erp">
                            </div>
                        </div>
                        <div class="col-lg-6 col-12 d-flex align-items-center">
                            <div class="lab-content">
                                <h2>Terdapat banyak fitur yang bisa digunakan</h2>
                                <p>Website devector memiliki banyak fitur yang dapat digunakan, salah satu contohnya yaitu fitur pendeteksi wajah yang berfungsi mendeteksi wajah seseorang dan datanya akan langsung masuk ke dalam database.</p>
                                <router-link :to="{ name: 'Sign In'}" class="lab-btn">
                                    <span>View Details</span>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="erp-manager bgc-2 padding-tb">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-12">
                            <div class="lab-thumb">
                                <div class="abs-lab-thumb green">
                                    <span class="pluse_1"></span>
                                    <span class="pluse_2"></span>
                                    <img src="@/assets/images/erp/manager/icon/01.png" alt="lab-erp">
                                </div>
                                <img src="@/assets/images/erp/manager/03.png" alt="lab-erp">
                            </div>
                        </div>
                        <div class="col-lg-6 col-12 d-flex align-items-center">
                            <div class="lab-content">
                                <h2>Tampilan halaman admin yang colorfull</h2>
                                <p>Website devector memiliki tampilan admin yang menarik dan terdapat banyak presentase kehadiran, yang membuat perhitungan admin lebih enak dilihat.</p>
                                <router-link :to="{ name: 'Sign In'}" class="lab-btn">
                                    <span>View Details</span>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- ERP Manager Section Ending Here -->
            
            <!-- Author Level Section Start Here -->
            <div class="author padding-tb pb-0">
                <div class="container">
                    <div class="section-wrapper">
                        <div class="author-area">
                            <div class="lab-thumb">
                                <img src="@/assets/images/erp/manager/author/logo.png" alt="lab-author" width="120">
                            </div>
                            <div class="lab-content">
                                <p class="mb-4">Tentang SMKN 4 BANDUNG</p>
                                <span>SMKN 4 BANDUNG adalah Sekolah Menengah Kejuruan yang memiliki kelompok bidang keahlian Ketenaga Listrikan, Teknik Elektronika, dan Teknik Komputer dan Informatika. Keberadaannya didukung oleh dunia usaha dan dunia industri, baik dalam pembelajaran maupun penyerapan lulusannya. Pembelajaran teori dan praktek tidak hanya dilakukan di dalam kelas tetapi dilakukan di dunia industri melalui praktik kerja industri di perusahaan-perusahaan yang relevan.
                                <br><br>
                                Lulusannya telah tersebar di berbagai perguruan tinggi dan Dunia Usaha atau Dunia Industri. Kesempatan untuk melanjutkan studi dan bekerja sangat terbuka luas bagi lulusannya. Jalur PMDK tersedia bagi lulusan yang berprestasi baik PN maupun Swasta. Bagi siswa yang ingin bekerja, penempatannya didukung oleh Disnaker melalui Bursa Kerja Khusus (BKK) sesuai dengan kualifikasi yang dipersyaratkan oleh perusahaan, serta siswa dapat berwirausaha sesuai dengan kompetensi keahlian masing-masing. </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Author Level Section Start Here -->
            <Footer/>
            
            <!-- scrollToTop start here -->
            <a href="#" class="scrollToTop"><i class="icofont-swoosh-up"></i><span class="pluse_1"></span><span class="pluse_2"></span></a>
            <!-- scrollToTop ending here -->
        </div>

</template>

<script>
import Navbar from '@/components/LandingNavbar.vue'
import Footer from '@/components/Footer.vue'
export default {
    name: 'Landingpage',
    components: {
        Navbar,
        Footer
    },
}
</script>

<style scoped>
@media (min-width: 1200px) {
    .container {
        max-width: 1300px !important;
        text-align: start;
    }
}
.lab-content span {
    color: rgba(255, 255, 255, .8);
}
</style>

