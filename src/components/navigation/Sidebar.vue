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
            <div class="user-navigation">
              <a href="#"><img src="@/assets/images/profile.svg" alt="profile" width="45"></a>
              <a href="#"><img src="@/assets/images/email.svg" alt="email" width="45" class="mx-3"></a>
              <a href="#"><img src="@/assets/images/logout.svg" alt="logout" width="45"></a>
            </div>
          </section>
          <ul class="sidebar-menu">
              <li class="menu-header my-2">Menu</li>
              <li class="nav-item active">
                <router-link to="/home"><i class="fas fa-fire text-left"></i><span>Dashboard</span></router-link>
              </li>
              <li class="nav-item">
                <router-link to="/absensi"><i class="fas fa-user-check"></i><span>Absensi</span></router-link>
              </li>
              <li class="nav-item">
                <router-link to="/jadwal"><i class="far fa-clock"></i><span>Jadwal</span></router-link>
              </li>
              <li class="nav-item">
                <router-link to="/mapel"><i class="fas fa-graduation-cap"></i><span>Guru Mapel</span></router-link>
              </li>
              <li class="nav-item">
                <router-link to="/siswa"><i class="fas fa-user-friends"></i><span>Siswa</span></router-link>
              </li>
              <li class="nav-item down">
                <router-link to="/settings"><i class="fas fa-cog"></i><span>Settings</span></router-link>
              </li>
              </ul>
        </aside>
      </div>
</template>