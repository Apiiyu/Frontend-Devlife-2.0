<template>
  <section class="home">
    <div class="row">
      <div class="col-lg-3">
        <section class="sidebar">
          sidebar
        </section>
      </div>

      <div class="col-lg-9 col-xl-9 col-xxl-9">
        <Navigation />
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
