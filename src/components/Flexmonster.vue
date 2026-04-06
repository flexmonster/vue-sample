<script setup>
import { ref } from 'vue'
import { FlexmonsterComposite } from '@flexmonster/vue'

const pivotRef = ref(null)

const state = {
  id: 'fm-state',
  dataset: {
    dataSource: {
      type: 'json',
      url: 'https://cdn.flexmonster.com/data/retail-data.json',
    },
  },
  slice: {
    rows: [
      { name: 'Retail Category' },
      { name: 'Status' },
    ],
    columns: [
      { name: 'Country' },
    ],
    values: [
      { name: 'Price', aggregation: 'sum' },
    ],
  },
}
</script>

<template>
  <div class="pivot-wrapper">
    <div class="pivot-container">
      <FlexmonsterComposite
        ref="pivotRef"
        :state="state"
        width="100%"
        height="100%"
      />
    </div>
  </div>
</template>
