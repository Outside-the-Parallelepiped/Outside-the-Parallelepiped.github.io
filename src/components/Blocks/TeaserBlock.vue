<template>
  <div v-if="!blok" class="loader" />
  <div v-else class="teaser">
    <h2>{{ blok.headline }}</h2>
  </div>
</template>

<script setup lang="ts">
import { TeaserBlockProps } from '@/common/blockProps'

defineProps({ blok: Object as () => TeaserBlockProps })
</script>
