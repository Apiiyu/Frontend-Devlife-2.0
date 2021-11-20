<template>
  <section class="home">
    <div class="row">
      <div class="col-lg-3 sidebar">
        <div class="row">
          <div class="col-lg-12 col-xl-12 col-xxl-12">
            <section>
              sidebar
            </section>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-12 col-xl-12 col-xxl-12">
            <section class="">sidebar</section>
          </div>
        </div>
      </div>

      <div class="col-lg-9 col-xl-9 col-xxl-9">
        <div class="row">
          <div class="col-lg-12 col-xl-12 col-xxl-12">
            <Navigation />
          </div>

          <div class="col-lg-12 col-xl-12 col-xxl-12 main-content">
            <div class="float-left">Navigation</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src

import Navigation from '@/components/Navigation.vue'

export default {
  name: 'Home',
  components: {
    Navigation
  }
}
</script>
