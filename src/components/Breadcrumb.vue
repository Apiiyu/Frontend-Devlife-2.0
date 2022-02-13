<template>
  <div class="row">
    <div class="col-lg-12 col-xl-12 col-xxl-12">
      <section class="section mt-3 h-50">
        <div class="section-header ml-1">
          <p class="title-header">{{ $route.name }}</p>
          <div class="section-header-breadcrumb mt-4 position-absolute">
            <div class="breadcrumb-item active"><a href="#">Home</a></div>
            <div class="breadcrumb-item">{{ $route.name }}</div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
