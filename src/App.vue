<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import Clase4 from './components/Clase4.vue'
import Clase4v2 from './components/Clase4v2.vue'
import Suma from './components/Suma.vue'
import Formulario from './components/Formulario.vue'
import FormularioPrimeVue from './components/FormularioPrimeVue.vue'
import ConsumeAPI from './components/ConsumeAPI.vue'
import Dialog from './components/Dialog.vue'

</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it Alex!" />
      <Clase4/>
      <Clase4v2/>
      <Suma/>

      <Formulario />
      Este es el ejemplo de como invocamos
      <Button class="form-button p-button-sm" label="Button" />
      <InputText>Hola Mundo</InputText>

      <FormularioPrimeVue></FormularioPrimeVue>

      <ConsumeAPI/>

    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
