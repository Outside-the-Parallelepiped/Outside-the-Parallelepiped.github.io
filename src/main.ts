import './assets/main.css'

import { StoryblokVue, apiPlugin } from '@storyblok/vue'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import ButtonBlock from './components/Blocks/ButtonBlock.vue'
import DividerBlock from './components/Blocks/DividerBlock.vue'
import FeatureBlock from './components/Blocks/FeatureBlock.vue'
import GameBlock from './components/Blocks/GameBlock.vue'
import GridBlock from './components/Blocks/GridBlock.vue'
import HeroBlock from './components/Blocks/HeroBlock.vue'
import ImageBlock from './components/Blocks/ImageBlock.vue'
import PageBlock from './components/Blocks/PageBlock.vue'
import PageSectionBlock from './components/Blocks/PageSectionBlock.vue'
import PreviewTileBlock from './components/Blocks/PreviewTileBlock.vue'
import SummaryTableBlock from './components/Blocks/SummaryTableBlock.vue'
import TeaserBlock from './components/Blocks/TeaserBlock.vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(StoryblokVue, {
  accessToken: import.meta.env.VITE_STORYBLOK_TOKEN,
  bridge: import.meta.env.DEV,
  use: [apiPlugin],
})

app.component('buttonBlock', ButtonBlock)
app.component('dividerBlock', DividerBlock)
app.component('featureBlock', FeatureBlock)
app.component('gameBlock', GameBlock)
app.component('gridBlock', GridBlock)
app.component('imageBlock', ImageBlock)
app.component('heroBlock', HeroBlock)
app.component('pageBlock', PageBlock)
app.component('pageSectionBlock', PageSectionBlock)
app.component('previewTileBlock', PreviewTileBlock)
app.component('summaryTableBlock', SummaryTableBlock)
app.component('teaserBlock', TeaserBlock)

app.mount('#app')
