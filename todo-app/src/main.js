import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import vue from "@vue/cli-plugin-eslint/eslintOptions"
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

vue.config.productionTip = false

createApp(App).mount('#app')
