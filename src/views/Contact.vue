<template>
  <div class="main-wrapper">
    <Navbar/>
    <section class="banner-section bg_size style-3" :style="{ 'background-image' : 'url('+require('@/assets/images/banner/erp/banner-bg.jpg')+')'}">
      <div class="text">
        <h1>Contact us</h1>
      </div>
    </section>
    
    <section class="contact-us padding-tb">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-6 col-12">
                    <ul class="contact-area">
                        <li class="contact-item">
                            <div class="contact-icon">
                                <img src="@/assets/images/contact/icon/01.png" alt="contact">
                            </div>
                            <div class="content">
                                <h6>Our Location</h6>
                                <p>Jl. Kliningan No.6, Turangga, Kec. Lengkong <br> Kota Bandung, Jawa Barat 40264</p>
                            </div>
                        </li>
                        <li class="contact-item">
                            <div class="contact-icon">
                                <img src="@/assets/images/contact/icon/02.png" alt="contact">
                            </div>
                            <div class="content">
                                <h6>Phone Number</h6>
                                <p>+62 878-2515-6632 <br> +62 821-2080-6320</p>
                            </div>
                        </li>
                        <li class="contact-item">
                            <div class="contact-icon">
                                <img src="@/assets/images/contact/icon/03.png" alt="contact">
                            </div>
                            <div class="content">
                                <h6>Email Address</h6>
                                <p>devlifecompany@gmail.com</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="col-lg-8 col-md-6 col-xs-12">
                    <form class="contact-form" action="/">
                        <input type="text" name="name" placeholder="Your Name" class="contact-input">
                        <input type="email" name="email" placeholder="Your Email" class="contact-input">
                        <input type="email" name="text" placeholder="Your Address" class="contact-input">
                        <input type="email" name="text" placeholder="Your Company" class="contact-input">
                        <textarea rows="5" class="contact-input" placeholder="Your Messages"></textarea>
                        <input type="submit" name="submit" value="Send Message" class="lab-btn">
                    </form>
                </div>
            </div>
        </div>
    </section>

    <!-- G-Map Section Start Here -->
    <div class="gmaps-section">
        <div class="map-area">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.5728599128947!2d107.62668741444483!3d-6.941541769880766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e86413eb50ad%3A0xf9930b5268e3fee1!2sSMKN%204%20Bandung!5e0!3m2!1sid!2sid!4v1644622999817!5m2!1sid!2sid" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div>
    </div>
    <!-- G-Map Section Ending Here -->

    
    <Footer/>
  </div>
</template>

<script>
import Navbar from '@/components/LandingNavbar.vue'
import Footer from '@/components/Footer.vue'
export default {
    name: 'Contact',
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
    }
}

h1 {
    color: white;
}
</style>