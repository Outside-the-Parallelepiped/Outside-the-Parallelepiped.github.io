<template>
  <div v-if="!blok || !reference" class="loader" />
  <div v-else class="previewTile" v-editable="blok" @click="navigateToRef">
    <img :src="reference.preview.filename" />
    <div class="body">
      <div class="corner" />
      <div class="status">{{ statusDisplay }}</div>
      <div class="title">{{ reference.display }}</div>
      <p class="description">{{ reference.description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { GameBlockProps, PreviewTileBlockProps } from '@/common/blockProps'
import { statusToDisplay } from '@/common/constants'
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({ blok: Object as () => PreviewTileBlockProps })
const reference = computed(() => props.blok?.reference?.[0]?.content as GameBlockProps | undefined)
const slug = computed(() => props.blok?.reference?.[0]?.slug as string | undefined)
const statusDisplay = computed(() =>
  reference.value?.status ? '● ' + statusToDisplay[reference.value.status] : undefined,
)

const router = useRouter()
const navigateToRef = () => {
  if (slug.value)
    router.push({
      name: 'game',
      params: { slug: slug.value },
    })
}
</script>

<style>
.previewTile {
  background: #111118;
  border: 1px solid var(--vt-c-divider-dark-3);
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  max-width: 300px;
  cursor: pointer;
}

.previewTile img {
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background: var(--color-background);
  transition: transform 0.4s ease;
}

.previewTile:hover img {
  transform: scale(1.05);
}

.previewTile .body {
  padding: 20px 24px;
}

.previewTile .status {
  font-family: 'Space Mono', monospace;
  font-size: 9px;
  color: var(--color-highlight-text);
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin-bottom: 8px;
}

.previewTile .title {
  font-size: 20px;
  font-weight: 600;
  color: var(--color-heading);
  margin: 0 0 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.previewTile .description {
  font-size: 13px;
  color: var(--color-text);
  line-height: 1.6;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.previewTile .corner {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 6px;
  height: 6px;
  border-top: 1px solid var(--color-highlight-text);
  border-right: 1px solid var(--color-highlight-text);
}
</style>
