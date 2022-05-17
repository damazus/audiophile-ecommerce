<script>
import {mapState, mapActions} from 'pinia'
import { useCart } from '../store/cart'
import Numbers from './Numbers.vue'
import CartProduct from './CartProduct.vue'

export default {
  components: {
    Numbers,
    CartProduct,
  },
  computed: {
    ...mapState(useCart, ['carts', 'total']),
  },
  methods: {
    ...mapActions(useCart, ['removeAll']),
    removeAllAndClose(){
      this.$emit('close')
      this.removeAll()
    }
  },
  mounted() {
    this.$nextTick(() => (
        document.body.addEventListener('click', (e) => {
          if(e.target.classList.contains('cart-wrapper')){
            this.$emit('close')
          }
        })
    ))
  }
}
</script>

<template>
  <div class="cart-wrapper" ref="root">
    <div class="cart">
      <div class="cart__header">
        <h3 class="cart__title">cart <span v-if="carts.length">({{carts.length}})</span></h3>
        <button class="cart__button button button--neutral" @click="removeAllAndClose">Remove all</button>
      </div>
      <div class="cart__body">
        <template v-if="carts.length">
          <CartProduct v-for="(cart, index) in carts" :cart="cart" :key="index"/>
        </template>
        <p v-else class="cart__empty">your cart is empty</p>
      </div>
      <div class="cart__footer">
        <span class="cart__label">TOTAL</span>
        <span class="cart__value">$ {{total}}</span>
      </div>
      <router-link :to="{name: 'checkout'}" class="cart__checkout button button--primary">checkout</router-link>
    </div>
  </div>
</template>