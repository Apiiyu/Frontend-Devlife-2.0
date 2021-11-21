<template>
  <section class="login">
    <div class="row">
      <div class="col-lg-6 col-xl-6 col-xxl-6">
        <img src="../../public/images/bg-sign.jpg" alt="bg-sign" class="bg-sign">
      </div>

      <div class="col-lg-5 col-xl-6 col-xxl-6 main-content-login">
        <div class="content-login">
          <div class="img-app d-flex justify-content-between">
            <img src="../../public/images/app-logo.png" alt="app-logo">
            <h4>Dev App</h4>
          </div>

          <div class="main-content">
            <h5>Don’t have an account yet? <router-link :to="{ name: 'RegisterApp' }">Create it here</router-link></h5>
            <hr class="decoration mb-4">
          </div>

          <form action="" method="POST">
            <div class="form-login">
              <div class="form-nis">
                <label for="nis">Nomor Induk Siswa</label>
                <input type="number" id="nis" class="form-control" placeholder="Your NIS">
                <span class="material-icons">person</span>
              </div>

              <div class="form-password">
                <label for="password">Password</label>
                <input type="password" id="password" class="form-control" placeholder="Your Password">
                <span class="material-icons">https</span>
                <a href="forgotpassword">Forgot your password?</a>
              </div>

              <div class="btn-submit">
                <button class="btn btn-primary btn-sm">Sign In</button>
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
  name: 'LoginApp'
}
</script>
