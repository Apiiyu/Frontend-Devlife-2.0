<template>
  <div class="wrapper">
    <Navbar/>
    <section class="banner-section bg_size style-3" :style="{ 'background-image' : 'url('+require('@/assets/images/banner/erp/banner-bg.jpg')+')'}">
    <div class="text">
      <h1>About us</h1>
    </div>
    </section>

    <!-- Marketing Range Section Start here -->
    <div class="team-section padding-tb">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="team-top">
              <div class="team-top-area">
                <div class="row no-gutters align-items-center flex-row-reverse">
                  <div class="col-lg-6 col-12">
                      <div class="team-thumb">
                          <img src="@/assets/images/team/logo.png" alt="logo">
                      </div>
                  </div>
                  <div class="col-lg-6 col-12">
                      <div class="team-content">
                          <a href="team-single.html"><h4 class="member-name">Devlife Company</h4></a>
                          <span class="member-dagi">Profil Perusahaan</span>
                          <p class="member-details">Devlife 2.0 didirikan pada tanggal 2 November 2021. Perusahaan Kami bergerak di bidang jasa software developer yang membuat sebuah website atau produk berbasis software. Perusahaan Kami di buat karena semakin banyak orang yang memerlukan software untuk membantu menyelesaikan masalah yang ada. 
                            <br><br>
                          Visi
                            <br>
                          Menjadi perusahaan IT terbaik di Indonesia membantu menyelesaikan permasalahan dalam bidang IT membantu menyelesaikan permasalahan dalam bidang IT
                            <br><br>
                          Misi
                          <br>
                          1. Mengedepankan profesionalitas
                          <br>
                          2. Inovatif dalam pembuatan produk
                          <br>
                          3. Solutif dalam menyelesaikan masalah berbasis IT
                          </p>
                          <ul class="icon-style-list">
                              <li><i class="fas fa-home"></i><span>Jalan Kliningan Nomor 6 Buah Batu</span></li>
                              <li><i class="fas fa-globe"></i><span>www.devlife.id</span></li>
                              <li><i class="fas fa-phone-square"></i><span>+62 821-2080-6320</span></li>
                              <li><i class="fas fa-envelope"></i><span>devlifecompany@gmail.com</span></li>
                              <li>
                                  <i class="fas fa-hashtag"></i>
                                  <ul class="d-flex flex-wrap justify-content-start">
                                      <li><a class="twitter" href="#"><i class="fab fa-twitter"></i></a></li>
                                      <li><a class="instagram" href="#"><i class="fab fa-instagram"></i></a></li>
                                      <li><a class="basketball" href="#"><i class="fas fa-basketball-ball"></i></a></li>
                                  </ul>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>

              <div class="row no-gutters align-items-center flex-row mt-5">
                  <div class="col-lg-6 col-12">
                      <div class="team-thumb">
                          <img src="@/assets/images/team/harpi.jpg" alt="team-membar">
                      </div>
                  </div>
                  <div class="col-lg-6 col-12">
                      <div class="team-content">
                          <a href="team-single.html"><h4 class="member-name">Harpiyansah</h4></a>
                          <span class="member-dagi">CEO</span>
                          <p class="member-details">Bertanggung jawab dalam merencanakan, mengelola, dan menganalisis segala aktivitas fungsional bisnis seperti operasional, sumber daya manusia, keuangan, dan pemasaran.</p>
                          <ul class="icon-style-list">
                              <li><i class="fas fa-globe"></i><span>harpiyansah04@gmail.com</span></li>
                              <li><i class="fas fa-phone-square"></i><span>+62 878-2515-6632</span></li>
                              <li>
                                  <i class="fas fa-hashtag"></i>
                                  <ul class="d-flex flex-wrap justify-content-start">
                                      <li><a class="twitter" href="#"><i class="fab fa-twitter"></i></a></li>
                                      <li><a class="instagram" href="https://www.instagram.com/ynsh_pi/"><i class="fab fa-instagram"></i></a></li>
                                  </ul>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="team-bottom">
          <div class="team-bottom-area">
              <div class="row justify-content-center align-items-center">
                  <div class="col-xl-4 col-md-6 col-12">
                      <div class="team-item">
                          <div class="team-item-inner">
                              <div class="team-thumb">
                                  <img src="@/assets/images/team/hans.jpg" alt="team-membar">
                              </div>
                              <div class="team-content">
                                  <a href="team-single.html"><h5 class="member-name">Hans Han Rifaldi</h5></a>
                                  <span class="member-dagi">Project Manager</span>
                                  <p class="member-details">Bertanggung jawab dalam keseluruhan arah koordinasi, pelaksanaan, dan penyelesaian proyek-proyek.</p>
                                  <ul class="icon-style-list">
                                      <li><i class="fas fa-globe"></i><span>hansrifalldi@gmail.com</span></li>
                                      <li>
                                  <i class="fas fa-hashtag"></i>
                                  <ul class="d-flex flex-wrap justify-content-start">
                                      <li><a class="twitter" href="#"><i class="fab fa-twitter"></i></a></li>
                                      <li><a class="instagram" href="https://www.instagram.com/han5fine/"><i class="fab fa-instagram"></i></a></li>
                                  </ul>
                              </li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="col-xl-4 col-md-6 col-12">
                      <div class="team-item">
                          <div class="team-item-inner">
                              <div class="team-thumb">
                                  <img src="@/assets/images/team/azka.jpg" alt="team-membar">
                              </div>
                              <div class="team-content">
                                  <a href="team-single.html"><h5 class="member-name">Azka Nayla</h5></a>
                                  <span class="member-dagi">Marketing</span>
                                  <p class="member-details">Bertanggung jawab dalam merencanakan atau mengarahkan kebijakan untuk program pemasaran.</p>
                                  <ul class="icon-style-list">
                                      <li><i class="fas fa-globe"></i><span>atta.nayla@gmail.com</span></li>
                                      <li>
                                  <i class="fas fa-hashtag"></i>
                                  <ul class="d-flex flex-wrap justify-content-start">
                                      <li><a class="twitter" href="#"><i class="fab fa-twitter"></i></a></li>
                                      <li><a class="instagram" href="https://www.instagram.com/azkanay_/"><i class="fab fa-instagram"></i></a></li>
                                  </ul>
                              </li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="col-xl-4 col-md-6 col-12">
                      <div class="team-item">
                          <div class="team-item-inner">
                              <div class="team-thumb">
                                  <img src="@/assets/images/team/rafi.jpg" alt="team-membar">
                              </div>
                              <div class="team-content">
                                  <a href="team-single.html"><h5 class="member-name">Rafi Khoirulloh</h5></a>
                                  <span class="member-dagi">Front-end Developer</span>
                                  <p class="member-details">Bertanggung jawab dalam membuat seluruh tampilan halaman dari sebuah website.
                                  </p>
                                  <ul class="icon-style-list">
                                      <li><i class="fas fa-globe"></i><span>khoirulloh.rafi2@gmail.com</span></li>
                                      <li>
                                  <i class="fas fa-hashtag"></i>
                                  <ul class="d-flex flex-wrap justify-content-start">
                                      <li><a class="twitter" href="#"><i class="fab fa-twitter"></i></a></li>
                                      <li><a class="instagram" href="https://www.instagram.com/rafii.kh/"><i class="fab fa-instagram"></i></a></li>
                                  </ul>
                              </li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="col-xl-4 col-md-6 col-12">
                      <div class="team-item">
                          <div class="team-item-inner">
                              <div class="team-thumb">
                                  <img src="@/assets/images/team/arip.jpg" alt="team-membar">
                              </div>
                              <div class="team-content">
                                  <a href="team-single.html"><h5 class="member-name">Arif Gimnastiar</h5></a>
                                  <span class="member-dagi">Back-end Developer</span>
                                  <p class="member-details">Bertanggung jawab dalam mengelola server, aplikasi, dan database agar dapat saling berkomunikasi dengan baik dan lancar.</p>
                                  <ul class="icon-style-list">
                                      <li><i class="fas fa-globe"></i><span>arifgimnastiar1122@gmail.com</span></li>
                                      <li>
                                  <i class="fas fa-hashtag"></i>
                                  <ul class="d-flex flex-wrap justify-content-start">
                                      <li><a class="twitter" href="#"><i class="fab fa-twitter"></i></a></li>
                                      <li><a class="instagram" href="https://www.instagram.com/arifgimnastiar/"><i class="fab fa-instagram"></i></a></li>
                                  </ul>
                              </li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="col-xl-4 col-md-6 col-12">
                      <div class="team-item">
                          <div class="team-item-inner">
                              <div class="team-thumb">
                                  <img src="@/assets/images/team/akmal.jpg" alt="team-membar">
                              </div>
                              <div class="team-content">
                                  <a href="team-single.html"><h5 class="member-name">Muhammad Naufal Akmal</h5></a>
                                  <span class="member-dagi">UI/UX Designer</span>
                                  <p class="member-details">Bertanggung jawab dalam mendesain tampilan secara menarik baik dari sisi bentuk, warna, juga tulisan agar mudah digunakan oleh user.</p>
                                  <ul class="icon-style-list">
                                      <li><i class="fas fa-globe"></i><span>naufa.uix@gmail.com</span></li>
                                      <li>
                                  <i class="fas fa-hashtag"></i>
                                  <ul class="d-flex flex-wrap justify-content-start">
                                      <li><a class="twitter" href="#"><i class="fab fa-twitter"></i></a></li>
                                      <li><a class="instagram" href="https://www.instagram.com/naufa_ui/"><i class="fab fa-instagram"></i></a></li>
                                  </ul>
                              </li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="col-xl-4 col-md-6 col-12">
                      <div class="team-item">
                          <div class="team-item-inner">
                              <div class="team-thumb">
                                  <img src="@/assets/images/team/daffa.jpg" alt="team-membar">
                              </div>
                              <div class="team-content">
                                  <a href="team-single.html"><h5 class="member-name">Muhammad Daffa Raihan</h5></a>
                                  <span class="member-dagi">Back-end Developer</span>
                                  <p class="member-details">Bertanggung jawab dalam mengelola server, aplikasi, dan database agar dapat saling berkomunikasi dengan baik dan lancar.</p>
                                  <ul class="icon-style-list">
                                      <li><i class="fas fa-globe"></i><span>williamkhanna@gmail.com</span></li>
                                      <li>
                                  <i class="fas fa-hashtag"></i>
                                  <ul class="d-flex flex-wrap justify-content-start">
                                      <li><a class="twitter" href="#"><i class="fab fa-twitter"></i></a></li>
                                      <li><a class="instagram" href="https://www.instagram.com/ynsh_pi/"><i class="fab fa-instagram"></i></a></li>
                                  </ul>
                              </li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Team Member Section Ending here -->

    <Footer/>

  </div>
</template>

<script>
import Navbar from '@/components/LandingNavbar.vue'
import Footer from '@/components/Footer.vue'
export default {
    name: 'About',
    components: {
        Navbar,
        Footer
    },
}
</script>

<style scoped>
  h1 {
    color: white;
  }
</style>
