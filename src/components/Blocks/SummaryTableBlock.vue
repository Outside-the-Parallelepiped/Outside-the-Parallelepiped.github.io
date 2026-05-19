<template>
  <div v-if="!blok || !table" class="loader" />
  <div v-else class="summaryTable" v-editable="blok">
    <div v-for="(col, i) in table.thead" :key="i" class="column">
      <SummaryTableValue class="value" :text="table.tbody[0]?.body[i]?.value" />
      <div class="label">{{ col.value }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SummaryTableBlockProps } from '@/common/blockProps'
import { computed } from 'vue'
import SummaryTableValue from '../SummaryTableValue.vue'

const props = defineProps({ blok: Object as () => SummaryTableBlockProps })
const table = computed(() => props.blok?.table || undefined)
console.log(table)
</script>

<style>
.summaryTable {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 1px;
  background: var(--vt-c-divider-dark-3);
  border: 1px solid var(--vt-c-divider-dark-3);
  border-radius: 4px;
  overflow: hidden;
}

.summaryTable .column {
  background: var(--color-background);
  padding: 32px 28px;
}

.summaryTable .value {
  font-family: 'Space Mono', monospace;
  font-size: 32px;
  font-weight: 700;
  color: var(--color-highlight-text);
  line-height: 1;
  margin-bottom: 8px;
  fill: var(--color-highlight-text);
}

.summaryTable .label {
  font-size: 12px;
  color: var(--color-text);
  letter-spacing: 0.05em;
}

@media (max-width: 1500px) {
  .summaryTable .value {
    font-size: 18px;
  }
}

@media (max-width: 1024px) {
  .summaryTable .value {
    font-size: 14px;
  }
}

@media (max-width: 800px) {
  .summaryTable {
    grid-template-columns: repeat(2, minmax(100px, 1fr));
  }

  .summaryTable .value {
    font-size: 32px;
  }
}
</style>
