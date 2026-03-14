/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import {registerPlugins} from 'nginx/frontend/plugins'
// Components
import App from './App.vue'

// Composables
import {createApp} from 'vue'
import {createPinia} from "pinia"
import axios from 'axios';
import AOS from 'aos'
import 'aos/dist/aos.css'
import router from "nginx/frontend/router";
import {createMetaManager} from "vue-meta";

const pinia = createPinia()
const app = createApp(App)

registerPlugins(app);
app.provide('$axios',axios);
app.use(router);
app.use(AOS);
app.use(pinia);
app.use(createMetaManager());
app.mount('#app');
