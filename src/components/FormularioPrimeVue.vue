<script>
export default {
  name: "FormularioPrimeVue",
  data() {
    return {
      firstName: '',
      lastName: '',
      edad: 0,
      errors:[]
    }
  },
  methods: {
    onSubmit() {
      //console.log("Registering developer");
      this.$emit("developer-registered", {
        firstName: this.firstName,
        lastName: this.lastName
      })
    },
    checkForm:function(e) {
      if(this.firstName && this.lastName) return true;
      this.errors = [];
      if(!this.firstName) this.errors.push("firstName required.");
      if(!this.lastName) this.errors.push("lastName required.");

      if(this.edad<18) this.errors.push("Es menor de edad.por que te falta" + (18-this.edad));
      e.preventDefault();
    }
  }
}
</script>

<template>
  <div>
    <h2>New Developer</h2>
    <div>
      <form id="frmPrueba" @submit.prevent="checkForm">

        <p v-if="errors.length">
          <b>Please correct the following error(s):</b>
          <ul>
            <li v-for="error in errors">{{ error }}</li>
          </ul>
        </p>

        <div>
          <label for="firstName">First Name</label>
          <InputText type="text" id="firstName" v-model="firstName" />
        </div>
        <div>
          <label for="lastName">Last Name</label>
          <InputText type="text" id="lastName" v-model="lastName" required/>
        </div>
        <div>
          <label for="edad">Edad</label>
          <InputText type="text" id="firstName" v-model.number="edad" />
        </div>
        <div>
          <Button type="submit">Register</Button>
        </div>
      </form>

    </div>
  </div>
</template>

<style scoped>

</style>