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
        <section class="section mt-5">
          <div class="section-header">
            <h1>Dashboard</h1>

            <div class="section-header-breadcrumb">
              <div class="breadcrumb-item active"><a href="#">Home</a></div>
              <div class="breadcrumb-item">Dashboard</div>
            </div>
          </div>
        </section>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/navigation/Navbar.vue'
import Sidebar from '@/components/navigation/Sidebar.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    Sidebar
  }
}
</script>
