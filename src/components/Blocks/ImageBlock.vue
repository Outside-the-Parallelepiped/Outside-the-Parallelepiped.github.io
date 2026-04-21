<template>
  <div v-if="!blok" class="loader" />
  <div v-else class="image">
    <img :src="blok.src.filename" />
  </div>
</template>

<script setup lang="ts">
import { ImageBlockProps } from '@/common/blockProps'

defineProps({ blok: Object as () => ImageBlockProps })
</script>

<style>
.image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
