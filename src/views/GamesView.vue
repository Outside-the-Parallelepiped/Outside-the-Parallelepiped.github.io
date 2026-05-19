<template>
  <StoryblokComponent v-if="story" :blok="story.content" />

  <RouterView />
</template>

<script setup lang="ts">
import { useStoryblok } from '@storyblok/vue'

const story = await useStoryblok(
  'games',
  {
    version: import.meta.env.DEV ? 'draft' : 'published',
    resolve_relations: 'previewTileBlock.reference',
  },
  {
    resolveRelations: ['previewTileBlock.reference'],
  },
)
</script>
