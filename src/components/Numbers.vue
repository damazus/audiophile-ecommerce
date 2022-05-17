<script>
export default {
  name: 'Numbers',
  props: ['modelValue'],
  data () {
    return {
      content: this.modelValue
    }
  },
  methods: {
    add(){
      this.content += 1
      this.$emit('update:modelValue', this.content)
    },
    minus(){
      if(this.content > 1){
        this.content -= 1
        this.$emit('update:modelValue', this.content)
      }
    }
  }
}
</script>

<template>
  <div class="numbers">
    <button class="numbers__btn" @click.prevent="minus">-</button>
    <span class="numbers__value">{{content}}</span>
    <button class="numbers__btn" @click.prevent="add">+</button>
  </div>
</template>