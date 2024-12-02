<template>
    <div>
        <h1>Data Report</h1>
        <DataTable :headers="headers" :data="salesData" />

        <div class="selected-data">
            <h2>Selected Data</h2>

            <div class="dropdowns">
                <select v-model="selectedRow" @change="updateRowData">
                    <option value="" disabled>Select Row</option>
                    <option v-for="(row, index) in uniqueRows" :key="index">{{ row }}</option>
                </select>

                <select v-model="selectedColumn" @change="updateColumnData">
                    <option value="" disabled>Select Column</option>
                    <option v-for="(header, index) in headers" :key="index">{{ header }}</option>
                </select>
            </div>

            <table class="selected-data-table">
                <thead>
                    <tr>
                        <th v-for="(header, index) in headers" :key="index">{{ header }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-if="rowData.length">
                        <td v-for="(data, index) in rowData" :key="index">{{ data }}</td>
                    </tr>
                    <!-- <tr v-if="cellValue">
                        <td colspan="2">Cell Value: {{ cellValue }}</td>
                    </tr> -->
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useGoogleSheets } from '@/composables/useGoogleSheets';
import DataTable from '@/components/DataTable.vue';

const { fetchSheetData } = useGoogleSheets();
const salesData = ref<string[][]>([]);
const headers = ref<string[]>([]);

const selectedRow = ref<string | null>(null);
const selectedColumn = ref<string | null>(null);
const uniqueRows = ref<string[]>([]);
const rowData = ref<string[]>([]);
const cellValue = ref<string | null>(null);

onMounted(async () => {
    const rawData = await fetchSheetData();

    if (rawData) {
        headers.value = rawData[0]; // First row as headers
        salesData.value = rawData.slice(1); // Remaining rows as data

        // Extract unique values from the first column for row selection
        uniqueRows.value = [...new Set(salesData.value.map(row => row[0]))]; // Assuming first column has unique identifiers
    }
});

// Function to update row data based on selected row
function updateRowData() {
    if (selectedRow.value) {
        const foundRow = salesData.value.find(row => row[0] === selectedRow.value);
        rowData.value = foundRow || [];
        cellValue.value = null; // Reset cell value when changing rows
    }
}

// Function to update cell value based on selected column
function updateColumnData() {
    if (selectedRow.value && selectedColumn.value) {
        const colIndex = headers.value.indexOf(selectedColumn.value);

        if (colIndex !== -1) {
            const foundRow = salesData.value.find(row => row[0] === selectedRow.value);
            cellValue.value = foundRow ? foundRow[colIndex] : null; // Get specific cell value
        }
    }
}
</script>

<style scoped>
.dropdowns {
    margin-top: 20px;
}

.dropdowns select {
    margin-right: 10px;
}

.header-table,
.selected-data-table {
    width: 100%;
    margin-top: 20px;
}

.header-table th,
.selected-data-table th,
.selected-data-table td {
    border: 1px solid #ddd;
    padding: 8px;
}

.selected-data-table td {
    text-align: center;
}
</style>