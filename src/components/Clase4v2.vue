<script>
export default {
// Properties returned from data() become reactive state
// and will be exposed on `this`.
  data() {
    return {
      count: 0
    }
  },
// Methods are functions that mutate state and trigger updates.
// They can be bound as event listeners in templates.
  methods: {
    increment() {
      this.count++
      //alert('The initial count is ${this.count}.')
      console.log('The initial count is ${this.count}.')
      //alert('The initial count is ' + this.count)
    }
  },
// Lifecycle hooks are called at different stages
// of a component's lifecycle.
// This function will be called when the component is mounted.
  mounted() {
    //console.log('The initial count is ${this.count}.')
    //alert('The initial count is ' + this.count)
  }
}
</script>
<template>
  <button @click="increment">Count is: {{ count }}</button>
</template>