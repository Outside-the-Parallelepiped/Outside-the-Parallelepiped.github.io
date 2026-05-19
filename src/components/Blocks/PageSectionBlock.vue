<template>
  <div v-if="!blok" class="loader" />
  <section v-else class="pageSection" v-editable="blok" :id="blok.id">
    <div class="label">{{ blok.display }}</div>
    <StoryblokComponent
      v-for="currentBlok in blok.body"
      :key="currentBlok._uid"
      :blok="currentBlok"
    />
  </section>
</template>

<script setup lang="ts">
import type { PageSectionBlockProps } from '@/common/blockProps'

defineProps({ blok: Object as () => PageSectionBlockProps })
</script>

<style>
.pageSection {
  padding-top: 5vh;
}

.pageSection > .label {
  font-family: 'Space Mono', monospace;
  font-size: 10px;
  color: var(--color-section-label);
  letter-spacing: 0.3em;
  text-transform: uppercase;
  margin: 5vh 0;
  display: flex;
  align-items: center;
  gap: 12px;
}

.pageSection > .label::after {
  content: '';
  flex: 1;
  height: 1px;
  background: var(--vt-c-divider-dark-3);
}
</style>
