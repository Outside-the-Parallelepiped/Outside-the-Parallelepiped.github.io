<template>
  <div v-if="!blok" class="loader" />
  <div v-else class="hero" v-editable="blok">
    <div class="heroText">
      <div class="heroEyebrow">{{ blok.eyebrow }}</div>
      <h1>
        <span>{{ firstWord }}</span> {{ restOfHeading }}
      </h1>
      <p class="heroSupporting">{{ blok.supporting }}</p>
      <div class="heroCtas">
        <StoryblokComponent
          v-for="currentBlok in blok.ctas"
          :key="currentBlok._uid"
          :blok="currentBlok"
        />
      </div>
    </div>
    <div class="heroImage">
      <img :src="blok.visual.filename" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { HeroBlockProps } from '@/common/blockProps'

const props = defineProps({ blok: Object as () => HeroBlockProps })
const firstWord = props.blok?.heading?.split(' ')[0] ?? ''
const restOfHeading = props.blok?.heading?.split(' ').slice(1).join(' ') ?? ''
</script>

<style>
.hero {
  padding-top: 10vh;
  display: flex;
  justify-content: space-between;
}

.heroText {
  flex: 1.2;
}

.heroEyebrow {
  font-family: 'Space Mono', monospace;
  font-size: 11px;
  color: var(--color-highlight-text);
  letter-spacing: 0.25em;
  text-transform: uppercase;
  margin-bottom: 20px;
}

.hero .heroText h1 {
  font-size: 56px;
  font-weight: 600;
  line-height: 1.05;
  margin: 0 0 24px;
  padding: 0;
  max-width: 620px;
  color: var(--color-heading);
  text-align: left;
}

.hero .heroText h1 span {
  color: var(--color-highlight-text);
  font-weight: 600;
}

.heroSupporting {
  font-size: 16px;
  color: var(--color-text);
  max-width: 440px;
  line-height: 1.7;
  margin-bottom: 40px;
}

.heroCtas {
  display: flex;
  gap: 12px;
  align-items: center;
}

.heroImage {
  flex: 0.8;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  position: relative;
}

.heroImage img {
  width: 100%;
  max-width: 520px;
  border-radius: 16px;
  transform: translateY(0);
  transition:
    transform 0.3s ease,
    filter 0.3s ease;
  object-fit: contain;
}

.heroImage img:hover {
  transform: translateY(-4px) scale(1.01);
}

@media (max-width: 800px) {
  .hero {
    flex-direction: column;
  }

  .hero .heroText h1 {
    font-size: 40px;
  }
}
</style>
