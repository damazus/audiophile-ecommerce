<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Header,
    Footer,
  },
}
</script>

<template>
  <Header/>
  <main class="main">
    <router-view></router-view>
  </main>
  <Footer/>
</template>
