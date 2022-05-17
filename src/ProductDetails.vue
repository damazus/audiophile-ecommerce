<script>
import { mapState } from 'pinia'
import { useStore } from './store/main'
import Numbers from './components/Numbers.vue'
import CategoryItems from './components/CategoryItems.vue'
import BringingBest from './components/BringingBest.vue'
import Cart from './components/Cart.vue'

export default{
  components: {
    Numbers,
    CategoryItems,
    BringingBest,
    Cart,
  },
  data(){
    return{
      quantity: 1,
      isShowCart: false,
    }
  },
  computed: {
    ...mapState(useStore, ['findProduct']),
    product(){
      return this.findProduct(this.$route.params.slug)
    }
  },
  methods: {
    showCart(){
      this.isShowCart = !this.isShowCart
    }
  }
}
</script>


<template>
  <Cart/>
  <div class="product-details">
    <div class="section">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <img :src="product.image.desktop" class="product-pill__image img-fluid" alt="..."/>
          </div>
          <div class="product-details__main col-lg-6">
            <p class="product-details__subtitle" v-if="product.new">new product</p>
            <h1 class="product-details__title">{{product.name}}</h1>
            <p class="product-details__description">{{product.description}}</p>
            <p class="product-details__price">$ {{product.price}}</p>
            <div class="product-details__actions">
              <Numbers v-model="quantity"/>
              <button class="button button--primary" @click.prevent="showCart">add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <h3 class="h3">features</h3>
            <p class="paragraph">{{product.features}}</p>
          </div>
          <div class="col-lg-6">
            <h3 class="h3">in the box</h3>
            <ul class="product-details-includes">
              <li v-for="include in product.includes" class="product-details-includes__item">
                <span class="product-details-includes__item-quantity">{{include.quantity}}x</span>
                <span class="product-details-includes__item-name">{{include.item}}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="product-details__gallery">
              <img :src="image.desktop"
                   alt="..."
                   class="product-details__gallery--image img-fluid"
                   v-for="image in product.gallery"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="container">
        <div class="container">
          <h3 class="section__title">you may also like</h3>
          <div class="row">
            <div class="col-lg-4" v-for="product in product.others">
              <div class="product-item">
                <img :src="product.image.desktop"
                     alt="..."
                     class="product-item__image img-fluid"
                />
                <h4 class="product-item__title">{{product.name}}</h4>
                <router-link :to="{name: 'products', params: {slug: product.slug}}" class="button button--primary">see product</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <CategoryItems/>
    <BringingBest/>
  </div>
</template>