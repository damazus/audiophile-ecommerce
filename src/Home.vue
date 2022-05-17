<script>
import CategoryItems from './components/CategoryItems.vue'
import BringingBest from './components/BringingBest.vue'

export default {
  components: {
    CategoryItems,
    BringingBest
  }
}
</script>

<template>
  <section class="hero">
    <div class="container">
      <div class="row">
        <div class="hero__inner col-lg-6">
          <p class="hero__sub-title">NEW PRODUCT</p>
          <h1 class="hero__title">
            <span>XX99 Mark II</span>
            <span>Headphones</span>
          </h1>
          <p class="hero__content">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
          <button class="button button--primary">See Product</button>
        </div>
        <div class="col-lg-6">
          <img src="/home/tablet/image-header.jpg" class="img-fluid" alt="aaaa"/>
        </div>
      </div>
    </div>
  </section>
  <CategoryItems/>
  <section class="section">
    <div class="container">
      <div class="premium-product">
        <div class="row">
          <div class="premium-product__col premium-product__col--illustration col-lg-6">
            <img src="home/desktop/image-speaker-zx9.png" class="premium-product__image img-fluid" alt="..."/>
          </div>
          <div class="premium-product__col premium-product__col--description col-lg-6">
            <div class="premium-production__description-wrapper">
              <h1 class="premium-production__title">
                <span>ZX9</span>
                <span>SPEAKER</span>
              </h1>
              <p class="premium-production__content">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
              <button class="button button--dark">See Product</button>
            </div>
          </div>
        </div>
      </div>
      <div class="home-speaker">
        <h4 class="home-speaker__title">ZX7 SPEAKER</h4>
        <button class="button button--outline">See Product</button>
      </div>
      <div class="home-earphone">
        <div class="row">
          <div class="col-lg-6">
            <img src="home/desktop/image-earphones-yx1.jpg" class="home-earphone__image img-fluid" alt="..."/>
          </div>
          <div class="home-earphone__main col-lg-6">
            <div class="home-earphone__main-inner">
              <h4 class="home-earphone__title">YX1 EARPHONES</h4>
              <button class="button button--outline">See Product</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <BringingBest/>
</template>