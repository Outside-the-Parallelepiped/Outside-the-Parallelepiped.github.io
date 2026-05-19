<template>
  <div v-if="!blok" class="loader" />
  <div v-else class="game" v-editable="blok">
    <div class="hero">
      <div class="art">
        <img :src="blok.preview.filename" />
      </div>
      <div class="heroContent">
        <div class="status">{{ statusDisplay }}</div>
        <h1 class="title">{{ blok.display }}</h1>
        <p class="description">{{ blok.description }}</p>
        <div class="heroCtas">
          <StoryblokComponent
            v-for="currentBlok in blok.ctas"
            :key="currentBlok._uid"
            :blok="currentBlok"
          />
        </div>
      </div>
    </div>
    <div class="stats">
      <div class="stat">
        <div class="label">Genre</div>
        <div class="value">{{ blok.genre }}</div>
      </div>
      <div class="stat">
        <div class="label">Platforms</div>
        <div class="value">{{ blok.platforms }}</div>
      </div>
      <div class="stat">
        <div class="label">Status</div>
        <div class="value">{{ statusTable }}</div>
      </div>
      <div class="stat">
        <div class="label">Client</div>
        <div class="value">{{ blok.client }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { GameBlockProps } from '@/common/blockProps'
import { statusToDisplay } from '@/common/constants'
import { computed } from 'vue'

const props = defineProps({ blok: Object as () => GameBlockProps })
const statusDisplay = computed(() =>
  props.blok?.status ? '● ' + statusToDisplay[props.blok.status] : undefined,
)
const statusTable = computed(() =>
  props.blok?.status ? statusToDisplay[props.blok.status] : undefined,
)
</script>

<style>
.game .hero {
  position: relative;
  padding-top: 15vh;
}

.game .hero .art {
  position: absolute;
  top: 0;
  left: 50%;
  width: 100vw;
  height: 400px;
  transform: translateX(-50%);
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.game .hero .art::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    var(--color-background) 0%,
    var(--vt-c-black-2) 35%,
    transparent 75%
  );
  pointer-events: none;
}

.game .hero .art img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.game .hero .heroContent {
  position: relative;
  padding: 40px 30px;
  z-index: 2;
}

.game .hero .heroContent .heroCtas {
  display: flex;
  gap: 12px;
  align-items: center;
  margin-top: 20px;
}

.game .hero .status {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: 'Space Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-highlight-text);
  margin-bottom: 12px;
}

.game .hero .title {
  font-size: 48px;
  font-weight: 600;
  text-align: left;
  margin: 0 0 8px;
  color: var(--color-heading);
  line-height: 1;
}

.game .hero .description {
  font-size: 15px;
  color: var(--color-text);
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.game .stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-bottom: 1px solid var(--vt-c-divider-dark-3);
  overflow: auto;
}
.game .stat {
  padding: 20px 30px;
  border-right: 1px solid var(--vt-c-divider-dark-3);
}
.game .stat:last-child {
  border-right: none;
}
.game .stat .label {
  font-family: 'Space Mono', monospace;
  font-size: 9px;
  color: var(--color-section-label);
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin-bottom: 6px;
}
.game .stat .value {
  font-size: 14px;
  font-weight: 500;
  color: var(--color-stat-value);
}

@media (max-width: 800px) {
  .game .hero .title {
    font-size: 32px;
  }

  .game .hero .description {
    -webkit-line-clamp: none;
    line-clamp: none;
  }

  .game .stats {
    grid-template-columns: repeat(2, 1fr);
  }
  .game .stat:nth-child(2n) {
    border-right: none;
  }
}
</style>
