import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

//Semana4: Add i18n support
import i18n from "./i18n.js";

//Aqui importamos PrimeVue
import 'primevue/resources/themes/lara-dark-teal/theme.css'
import PrimeVue from 'primevue/config';
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'


//createApp(App).mount('#app')
//app.use(PrimeVue);

const app = createApp(App)

app.use(PrimeVue, { ripple: true })
app.component('Button', Button)
app.component('InputText', InputText)

//Semana4 i18n support
app.use(i18n)

app.mount('#app')