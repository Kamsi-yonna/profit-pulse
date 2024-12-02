<template>
    <div>
        <h2>Spreadsheet Table</h2>
        <table class="data-table">
            <thead>
                <tr>
                    <th v-for="(header, index) in headers" :key="index">{{ header }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row, rowIndex) in data" :key="rowIndex">
                    <td v-for="(cell, cellIndex) in row" :key="cellIndex">{{ cell }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
    headers: string[];
    data: string[][];
}>();
</script>

<style scoped>
.data-table {
    width: 100%;
    border-collapse: collapse;
}

.data-table th,
.data-table td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
}

.data-table th {
    /* background-color: #f2f2f2; */
}
</style>