<template>
  <div v-if="!blok" class="loader" />
  <div v-else class="page">
    <StoryblokComponent
      v-for="currentBlok in blok.body"
      :key="currentBlok._uid"
      :blok="currentBlok"
    />
  </div>
</template>

<script setup lang="ts">
import type { PageBlockProps } from '@/common/blockProps'

defineProps({ blok: Object as () => PageBlockProps })
</script>
