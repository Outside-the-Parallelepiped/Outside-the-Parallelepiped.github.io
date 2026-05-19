<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>

<script setup lang="ts">
import { useStoryblok } from '@storyblok/vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const slug = route.params.slug

const story = await useStoryblok(
  `games/${slug}`,
  {
    version: import.meta.env.DEV ? 'draft' : 'published',
    resolve_relations: 'previewTileBlock.reference',
  },
  {
    resolveRelations: ['previewTileBlock.reference'],
  },
)
</script>
