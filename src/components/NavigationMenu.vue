<script>
import {mapState} from 'pinia'
import { useStore } from '../store/main'

export default {
  computed: {
    ...mapState(useStore, ['categories'])
  }
}
</script>

<template>
  <ul class="navigation-menu">
    <li class="navigation-menu__item">
      <router-link to="/" class="navigation-menu__link">Home</router-link>
    </li>
    <li class="navigation-menu__item" v-for="(category, index) in categories" :key="index">
      <router-link :to="{name: 'categories', params: {slug: category}}" class="navigation-menu__link">{{ category }}</router-link>
    </li>
  </ul>
</template>