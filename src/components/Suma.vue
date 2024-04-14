<script>
export default {
  data() {
    return {
      valora: 0,
      valorb: 0,
    }
  },
  methods: {
    toggleVisibility(){
      this.isVisible = !this.isVisible
    }
  }
}
</script>
<template>
  Ingrese el valor 1: <input v-model="valora">
  Ingrese el valor 2: <input v-model="valorb">
  <p>La suma es: {{ Math.floor(valora) + Math.floor(valorb) }}</p>
</template>
<style scoped>
button {
  font-weight: bold;
}
</style>

