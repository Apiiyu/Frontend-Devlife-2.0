<template>
  <div class="main-sidebar">
        <aside id="sidebar-wrapper">
          <div class="sidebar-brand">
            <img src="@/assets/images/logo.png" alt="app-logo" width="30" class="mb-2">
            <h4 class="d-inline-block ml-3 mt-4">Devector</h4>
          </div>
          <section class="profile">
            <div class="profile-picture">
              <img class="mt-3" src="@/assets/images/pp.png" alt="profile-picture" width="85">
              <h4 class="mt-3 mb--2">Arif Gimnastiar</h4>
              <p>Siswa - XII</p>
            </div>
          </section>
          <ul class="sidebar-menu">
              <li class="menu-header my-2">Menu</li>
              <li class="nav-item">
                <router-link :to="{ name: 'Dashboard' }" class="nav-link"><i class="fas fa-fire text-left"></i><span>Dashboard</span></router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{ name: 'Absensi' }" class="nav-link"><i class="fas fa-user-check"></i><span>Absensi</span></router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{ name: 'Jadwal' }" class="nav-link"><i class="far fa-clock"></i><span>Jadwal</span></router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{ name: 'Mata Pelajaran' }" class="nav-link"><i class="fas fa-graduation-cap"></i><span>Guru Mapel</span></router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{ name: 'Siswa' }" class="nav-link"><i class="fas fa-user-friends"></i><span>Siswa</span></router-link>
              </li>
              <li class="nav-item down">
                <router-link :to="{ name: 'Settings' }" class="nav-link"><i class="fas fa-cog"></i><span>Settings</span></router-link>
              </li>
              </ul>
        </aside>
      </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.main-sidebar {
  position: fixed;
}
.nav-link.exact-active.active {
  background-color: #4e4081;
  color: white;
}
</style>
