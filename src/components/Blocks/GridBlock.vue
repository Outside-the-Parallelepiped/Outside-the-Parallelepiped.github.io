<template>
  <div v-if="!blok" class="loader" />
  <div v-else class="grid" :class="{ vertical: blok.is_vertical }" v-editable="blok">
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

<style>
.grid {
  display: flex;
  gap: 40px;
}

.grid.vertical {
  flex-direction: column;
}
@media (max-width: 800px) {
  .grid {
    flex-direction: column;
  }
}
</style>
