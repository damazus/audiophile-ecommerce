<script>
export default {
  props: {
    cart: {
      type: Object,
      required: true
    }
  }
}
</script>

<template>
  <div class="cart-product">
    <img :src="cart.product.image.mobile" class="cart-product__image img-fluid"/>
    <div class="cart-product__main">
      <div class="cart-product__body">
        <h5 class="cart-product__title">{{cart.product.name}}</h5>
        <p class="cart-product__price">${{cart.product.price}}</p>
      </div>
      <Numbers v-model="cart.quantity" class="numbers--mini"/>
    </div>
  </div>
</template>