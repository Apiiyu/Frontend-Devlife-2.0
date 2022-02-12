<template>
<div class="wrapper">
            <div class="mobile-menu erp-bg">
                <nav class="mobile-header">
                    <div class="header-logo">
                        <a href="#"><img src="@/assets/images/logoputih.png" alt="logo" width="70"></a>
                    </div>
                    <div class="header-bar">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </nav>
                <nav class="mobile-menu">
                    <div class="mobile-menu-area">
                        <div class="mobile-menu-area-inner">
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Feature</a></li>
                                <li><router-link :to="{ name: 'About' }">About</router-link></li>
                                <li><router-link :to="{ name: 'Contact' }">Contact</router-link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <!-- Mobile Menu Ending Here -->


            <!-- desktop menu start here -->
            <header class="header-section transparent-header erp-bg">
                <div class="header-area">
                    <div class="container">
                        <div class="primary-menu">
                            <div class="logo">
                                <a href="#">
                                    <img class="d-inline" src="@/assets/images/logoputih.png" width="70" alt="logo">
                                    <span class="fsize">Devector</span>                                
                                </a>
                            </div>
                            <div class="main-area">
                                <div class="main-menu">
                                    <ul>
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#featured" class="mx-3">Feature</a></li>
                                        <li><router-link :to="{ name: 'About' }">About</router-link></li>
                                        <li><router-link :to="{ name: 'Contact' }" class="mx-3">Contact</router-link></li>
                                    </ul>
                                </div>
                                <div class="header-btn">
                                    <router-link :to="{ name: 'Sign In' }" class="nav-link lab-btn"><span>Login</span></router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
@media (min-width: 1200px) {
    .container {
        max-width: 1300px !important;
    }
}
.fsize {
    font-size: 22px;
    color: white;
    font-weight: 700;
    letter-spacing: 2px;
}
</style>