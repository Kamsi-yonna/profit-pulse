<template>
  <div>
    <h2>Spreadsheet Table</h2>
    <UTable
      :rows="data"
      :columns="columns"
    />
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

// Define props for headers and data
const props = defineProps<{
  headers: string[]
  data: any[] // Change this to any[] to accommodate objects
}>()

// Prepare columns for the Nuxt UI table
const columns = props.headers.map(header => ({
  key: header,
  label: header // The label displayed in the table header
}))
</script>

<style scoped>
/* Add any additional styles if needed */
</style>
