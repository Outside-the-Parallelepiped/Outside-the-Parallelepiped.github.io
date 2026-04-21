<template>
  <div v-if="!blok" class="loader" />
  <div v-else class="grid">
    <StoryblokComponent
      v-for="currentBlok in blok.columns"
      :key="currentBlok._uid"
      :blok="currentBlok"
    />
  </div>
</template>

<script setup lang="ts">
import type { GridBlockProps } from '@/common/blockProps'

defineProps({ blok: Object as () => GridBlockProps })
</script>
