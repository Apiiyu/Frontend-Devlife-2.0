<template>
  <section class="register">
    <div class="row">
      <div class="col-md-6 col-lg-6 col-xl-6 col-xxl-6">
        <img src="../../public/images/bg-sign.jpg" alt="bg-sign" class="bg-sign">
      </div>

      <div class="col-md-6 col-lg-6 col-xl-6 col-xxl-6 main-content-register">
        <div class="content-register">
          <div class="img-app d-flex justify-content-between">
            <img src="../../public/images/app-logo.png" alt="app-logo">
            <h4>Dev App</h4>
          </div>

          <form action="" method="POST">
            <div class="form-register">
              <div class="form-nis">
                <label for="nis">Nomor Induk Siswa</label>
                <input type="number" id="nis" class="form-control" placeholder="Your NIS">
                <span class="material-icons">tag</span>
              </div>

              <div class="form-name">
                <label for="name">Name</label>
                <input type="text" id="name" class="form-control" placeholder="Your Name">
                <span class="material-icons">person</span>
              </div>

              <div class="form-jurusan">
                <label for="jurusan">Jurusan</label>
                <input type="text" id="jurusan" class="form-control" placeholder="Your Jurusan">
                <span class="material-icons">person</span>
              </div>

              <div class="form-email">
                <label for="email">Email</label>
                <input type="text" id="email" class="form-control" placeholder="Your Name">
                <span class="material-icons">mail</span>
              </div>

              <div class="form-password">
                <label for="password">Password</label>
                <input type="password" id="password" class="form-control" placeholder="Your Password">
                <span class="material-icons">https</span>
                <p>Have account already?</p> <router-link :to="{ name: 'LoginApp' }">Please go to Sign In</router-link> 
              </div>

              <div class="btn-submit">
                <button class="btn btn-primary btn-sm">Sign Up</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'RegisterApp'
}
</script>