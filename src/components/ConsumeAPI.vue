
<script>
//import {ZIndexUtils as axios} from "primevue/utils";
import { ref, onMounted } from 'vue'
import axios from 'axios'
export default {
  name: "ConsumeAPI",
  data () {
    return {
      info: null
    }
  },
  methods: {
    InvocaApi() {
      axios
          .get('https://api.coindesk.com/v1/bpi/currentprice.json')
          .then(response => (this.info = response))
    }
  },
  mounted() {
    axios
        .get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(response => (this.info = response.data.bpi))
  }
}
</script>

<template>
  <button @click="InvocaApi">TraerData</button>
  <div id="app">
    {{ info }}
  </div>
  <div id="app">
    <h1>Bitcoin Price Index</h1>
    <div
        v-for="currency in info"
        class="currency"
    >
      {{ currency.description }}:
      <span class="lighten">
      <span v-html="currency.symbol"></span>{{ currency.rate_float | currencydecimal }}
    </span>
    </div>
  </div>

     <div>
      <div v-for="infodet in info">{{ infodet }}</div>
    </div>

  Aqui ya salio!!!
  <div>
    <table>
      <tr
          v-for="entity in info"
          class="table-rows"
      >
        <td
            v-for="(header, i) in entity"
        >
          {{header.toString()}}
        </td>
      </tr>
    </table>
  </div>
  Aqui ya salio22!!!

  <div>
    <table  id="test" style="table">
      <tr>
        <th class="header-item">Codigo</th>
        <th class="header-item">Descripcion</th>
        <th class="header-item">Rate</th>
      </tr>
      <tr
          v-for="entity in info"
          class="table-rows"
      >
        <td> {{entity.code.toString()}} </td>
        <td> {{entity.description.toString()}} </td>
        <td> {{entity.rate.toString()}} </td>
      </tr>
    </table >
  </div>

</template>

<style scoped>
table {
  background: #012B39;
  border-radius: 0.25em;
  border-collapse: collapse;
  margin: 1em;
}
th {
  border-bottom: 1px solid #364043;
  color: #E2B842;
  font-size: 0.85em;
  font-weight: 600;
  padding: 0.5em 1em;
  text-align: left;
}
td {
  color: #fff;
  font-weight: 400;
  padding: 0.65em 1em;
}
</style>