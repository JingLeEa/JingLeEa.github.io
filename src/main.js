import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import 'primeicons/primeicons.css';
import AnimateOnScroll from 'primevue/animateonscroll'
import PrimeVue from 'primevue/config';
import "tailwindcss";
import "tailwindcss-primeui";

const app = createApp(App)
app.use(PrimeVue)
app.directive('animateonscroll', AnimateOnScroll)
app.mount('#app')
