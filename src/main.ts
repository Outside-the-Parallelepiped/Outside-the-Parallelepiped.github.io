import './assets/main.css'

import { StoryblokVue, apiPlugin } from '@storyblok/vue'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import FeatureBlock from './components/Blocks/FeatureBlock.vue'
import GridBlock from './components/Blocks/GridBlock.vue'
import ImageBlock from './components/Blocks/ImageBlock.vue'
import PageBlock from './components/Blocks/PageBlock.vue'
import TeaserBlock from './components/Blocks/TeaserBlock.vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(StoryblokVue, {
  accessToken: import.meta.env.VITE_STORYBLOK_TOKEN,
  bridge: import.meta.env.VITE_NODE_ENV !== 'production',
  use: [apiPlugin],
})

app.component('FeatureBlock', FeatureBlock)
app.component('ImageBlock', ImageBlock)
app.component('GridBlock', GridBlock)
app.component('PageBlock', PageBlock)
app.component('TeaserBlock', TeaserBlock)
app.mount('#app')
