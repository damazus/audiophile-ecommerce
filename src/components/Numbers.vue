<script>
export default {
  name: 'Numbers',
  data(){
    return{
      value: 1
    }
  },
  methods: {
    add(){
      this.value += 1
    },
    minus(){
      if(this.value > 1){
        this.value -= 1
      }
    }
  }
}
</script>

<template>
  <div class="numbers">
    <button class="numbers__btn" @click.prevent="minus">-</button>
    <span class="numbers__value">{{value}}</span>
    <button class="numbers__btn" @click.prevent="add">+</button>
  </div>
</template>