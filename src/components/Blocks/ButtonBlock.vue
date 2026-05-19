<template>
  <div v-if="!blok" class="loader" />
  <div v-else class="button" v-editable="blok">
    <button :class="blok.style" @click="onClick">{{ blok.display }}</button>
  </div>
</template>

<script setup lang="ts">
import { ButtonBlockProps } from '@/common/blockProps'

const props = defineProps({ blok: Object as () => ButtonBlockProps })

const onClick = () => {
  if (props.blok?.scrollto)
    document.querySelector('#' + props.blok.scrollto)?.scrollIntoView({ behavior: 'smooth' })
  if (props.blok?.url?.url) window.open(props.blok.url.url, '_blank')
}
</script>

<style>
.button button {
  transition: all 0.2s ease;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 2px;
}

.button button.dark {
  background: var(--color-background);
  color: var(--vt-c-button-dark-1);
  border: 1px solid var(--vt-c-button-border-dark-1);
  padding: 12px 28px;
}

.button button.light {
  background: var(--color-highlight-text);
  color: var(--color-background);
  border: none;
  padding: 12px 30px;
}

.button button.dark:hover {
  color: var(--vt-c-button-dark-2);
  border-color: var(--vt-c-button-border-dark-2);
  background: var(--color-background-soft);
}

.button button.light:hover {
  background: var(--vt-c-lightblue-3);
}

@media (max-width: 800px) {
  .button button {
    font-size: 10px;
  }
}
</style>
