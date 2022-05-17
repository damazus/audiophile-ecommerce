<script>
import {mapState} from 'pinia'
import { useStore } from './store/main'
import PageHeader from './components/PageHeader.vue'
import CategoryItems from './components/CategoryItems.vue'
import BringingBest from './components/BringingBest.vue'

export default {
  components: {
    PageHeader,
    CategoryItems,
    BringingBest,
  },
  computed: {
    ...mapState(useStore, ['productsByCategory']),
    slug(){
      return this.$route.params.slug
    },
    products(){
      return this.productsByCategory(this.slug)
    }
  }
}
</script>

<template>
  <PageHeader>{{ slug }}</PageHeader>
  <section class="product-pill section"
           :class="{'product-pill--reverse': index % 2 !== 0 }"
           v-for="(product, index) in products"
           :key="index">
    <div class="container">
      <div class="product-pill__body row">
        <div class="product-pill__image-wrapper col-lg-6">
          <img :src="product.image.desktop" class="product-pill__image img-fluid" alt="..."/>
        </div>
        <div class="product-pill__main col-lg-6">
          <p class="product-pill__info" v-if="product.new">New product</p>
          <h2 class="product-pill__title">{{ product.name }}</h2>
          <p class="product-pill__content">{{ product.description }}</p>
          <router-link :to="{name: 'products', params: {slug: product.slug}}" class="button button--primary">See Product</router-link>
        </div>
      </div>
    </div>
  </section>
  <CategoryItems/>
  <BringingBest/>
</template>