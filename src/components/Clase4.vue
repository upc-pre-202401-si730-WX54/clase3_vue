<script>
export default {
  data() {
    return {
      count: 0,
      isVisible: true,
      valora: 0,
      valorb: 0,
      suma:0
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
  <h1 v-if="isVisible">El contador es {{ count }}</h1>
  <button v-on:click="toggleVisibility">Cambiar Visibilidad</button>

  <button @click="count++">
    Count is: {{ count }}
  </button>

  <input v-model="valora">
  <input v-model="valorb">
  <p>La suma es: {{ Math.floor(valora) + Math.floor(valorb) }}</p>



</template>
<style scoped>
button {
  font-weight: bold;
}
</style>
