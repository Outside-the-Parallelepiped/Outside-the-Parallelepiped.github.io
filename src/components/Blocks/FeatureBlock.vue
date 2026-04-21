<template>
  <div v-if="!blok" class="loader" />
  <div v-else class="feature">
    <span>{{ blok.name }}</span>
  </div>
</template>

<script setup lang="ts">
import type { FeatureBlockProps } from '@/common/blockProps'

defineProps({ blok: Object as () => FeatureBlockProps })
</script>
