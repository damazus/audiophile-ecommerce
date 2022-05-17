<script>
import {mapState, mapActions} from 'pinia'
import { useCart } from '../store/cart'
import Numbers from './Numbers.vue'

export default {
  components: {
    Numbers
  },
  computed: {
    ...mapState(useCart, ['products']),
  }
}
</script>

<template>
  <div class="cart-wrapper">
    <div class="cart">
      <div class="cart__header">
        <h3 class="cart__title">cart <span>(3)</span></h3>
        <button class="cart__button button button--neutral">Remove all</button>
      </div>
      <div class="cart__body">
        <template v-if="products.length">
          <div class="cart-product" v-for="(product, index) in products" :key="index">
            <img :src="product.image.desktop" class="cart-product__image img-fluid"/>
            <div class="cart-product__main">
              <div class="cart-product__body">
                <h5 class="cart-product__title">{{product.name}}</h5>
                <p class="cart-product__price">${{product.price}}</p>
              </div>
              <Numbers/>
            </div>
          </div>
        </template>
        <span v-else class="text-center">your cart is empty</span>
      </div>
      <div class="cart__footer">
        <span class="cart__label">TOTAL</span>
        <span class="cart__value">$ 0</span>
      </div>
      <button class="button button--primary">checkout</button>
    </div>
  </div>
</template>