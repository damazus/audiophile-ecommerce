<script>
import NavigationMenu from './NavigationMenu.vue'
export default {
  components: {
    NavigationMenu
  }
}
</script>

<template>
  <footer class="footer">
    <div class="footer__container container">
      <div class="row">
        <div class="col-lg-6">
          <img src="/shared/desktop/logo.svg" class="footer__branding img-fluid" alt="logo"/>
          <p class="footer__content">Audiophile is an all in one stop to fulfill your audio needs. We're a small team of
            music lovers and sound specialists who are devoted to helping you get the most out of personal audio.
            Come and visit our demo facility - we’re open 7 days a week.</p>
        </div>
        <div class="col-lg-6">
          <NavigationMenu/>
        </div>
      </div>
      <p class="footer__copyright">Copyright 2021. All Rights Reserved</p>
    </div>
  </footer>
</template>
