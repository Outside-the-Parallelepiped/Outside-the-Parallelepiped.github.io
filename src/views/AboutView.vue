<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>

<script setup lang="ts">
import { useStoryblok } from '@storyblok/vue'

const story = await useStoryblok(
  'about',
  {
    version: import.meta.env.DEV ? 'draft' : 'published',
    resolve_relations: 'previewTileBlock.reference',
  },
  {
    resolveRelations: ['previewTileBlock.reference'],
  },
)
</script>
