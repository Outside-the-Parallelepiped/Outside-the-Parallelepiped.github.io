<template>
  <div class="rich-text">
    <template v-for="(t, i) in tokens" :key="i">
      <span v-if="t.type === 'icon'" :title="t.value"><SummaryTableIcon :name="t.value" /></span>
      <span v-else>{{ t.value }}</span>
    </template>
  </div>
</template>

<script setup lang="ts">
import { parseText } from '@/common/utils'
import { computed } from 'vue'
import SummaryTableIcon from './SummaryTableIcon.vue'

const props = defineProps({ text: String })

const tokens = computed(() => parseText(props.text || ''))
</script>
