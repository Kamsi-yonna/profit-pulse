<template>
  <UDashboardPage>
    <UDashboardPanel grow>
      <UDashboardNavbar
        title="Data Report"
        :badge="dataRows.length"
      >
        <template #right>
          <UInput
            ref="input"
            v-model="searchQuery"
            icon="i-heroicons-funnel"
            autocomplete="off"
            placeholder="Filter data..."
            class="hidden lg:block"
            @keydown.esc="$event.target.blur()"
          >
            <template #trailing>
              <UKbd value="/" />
            </template>
          </UInput>
        </template>
      </UDashboardNavbar>

      <UDashboardToolbar>
        <template #right>
          <USelectMenu
            v-model="selectedColumns"
            icon="i-heroicons-adjustments-horizontal-solid"
            :options="columns.map(col => col.label)"
            multiple
            class="hidden lg:block"
          >
            <template #label>
              Display
            </template>
          </USelectMenu>
        </template>
      </UDashboardToolbar>

      <UTable
        v-model:sort="sortOptions"
        :rows="sortedData"
        :columns="visibleColumns"
        :loading="loading"
        sort-mode="manual"
        class="w-full"
        :ui="{ divide: 'divide-gray-200 dark:divide-gray-800' }"
        @select="onSelectRow"
      >
        <template
          v-for="column in visibleColumns"
          :key="column.key"
          #[`${column.key}-data`]="{ row }"
        >
          {{ row[column.key] }}
        </template>
      </UTable>
    </UDashboardPanel>
  </UDashboardPage>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useGoogleSheets } from '@/composables/useGoogleSheets'

const searchQuery = ref('')
const selectedRows = ref<any[]>([])
const selectedColumns = ref<string[]>([])
const sortOptions = ref({ column: 'index', direction: 'asc' as const })
const input = ref<{ input: HTMLInputElement }>()
const loading = ref(true)

const { fetchSheetData } = useGoogleSheets()
const dataRows = ref<any[]>([])

const columns = ref<{ key: string, label: string, sortable?: boolean }[]>([
  { key: 'index', label: '#', sortable: false }
])

onMounted(async () => {
  const rawData = await fetchSheetData()
  console.log('Fetched Data:', rawData)

  if (rawData) {
    const headers = rawData[0]

    dataRows.value = rawData.slice(1).map((row) => {
      return headers.reduce((acc, header, index) => {
        acc[header] = row[index]
        return acc
      }, {})
    })

    columns.value.push(
      ...headers.map(header => ({
        key: header,
        label: header,
        sortable: true
      }))
    )

    selectedColumns.value = columns.value.map(col => col.key)
    loading.value = false
  }
})

const filteredData = computed(() => {
  return dataRows.value.map((row, index) => ({
    ...row,
    index: index + 1 // Add index to each row
  })).filter((row) => {
    const matchesQuery = Object.values(row).some(value =>
      String(value).toLowerCase().includes(searchQuery.value.toLowerCase())
    )
    return matchesQuery
  })
})

// Sorting Logic
const sortedData = computed(() => {
  const sortedRows = [...filteredData.value]
  if (sortOptions.value.column && sortOptions.value.direction) {
    sortedRows.sort((a, b) => {
      const aValue = a[sortOptions.value.column]
      const bValue = b[sortOptions.value.column]

      if (aValue < bValue) return sortOptions.value.direction === 'asc' ? -1 : 1
      if (aValue > bValue) return sortOptions.value.direction === 'asc' ? 1 : -1
      return 0
    })
  }
  return sortedRows
})

const visibleColumns = computed(() => {
  return columns.value.filter(column => selectedColumns.value.includes(column.key))
})

function onSelectRow(row: any) {
  const index = selectedRows.value.findIndex(item => item.id === row.id)
  if (index === -1) {
    selectedRows.value.push(row)
  } else {
    selectedRows.value.splice(index, 1)
  }
}

defineShortcuts({
  '/': () => {
    input.value?.input?.focus()
  }
})
</script>

<style scoped>
/* Add any additional styles if needed */
</style>
