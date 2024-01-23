import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Blockcomponent from './components/Blockcomponent'

const app = createApp(App).use(router);
app.component('block-component', Blockcomponent)
app.mount('#app');

