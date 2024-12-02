# DataTable

### Purpose

The `DataTable` component serves to encapsulate the functionality of displaying tabular data in a clean and organized manner. It abstracts the complexity of rendering tables, allowing developers to focus on data management and interaction without worrying about the underlying HTML structure.

### Usage in the Project

The `DataTable` component is utilized within the [`Spreadsheet page`](../pages/spreadsheet.md) to display both the complete dataset fetched from Google Sheets and selected row data based on user interactions. Here’s how it fits into the overall flow:

1. **Data Fetching**: The main page fetches data using the [`useGoogleSheets` ](../composables/usegooglesheets.md)composable.
2. **Rendering Data**: The fetched data is passed as props to the `DataTable`, which renders it in a structured format.
3. **User Interaction**: Users can select rows and columns through dropdowns, affecting what data is displayed in both the main table and any additional tables showing selected values.

### Conclusion

The `DataTable` component plays a crucial role in presenting data clearly and effectively within your application. Its design promotes reusability and maintainability while providing users with an intuitive way to interact with their financial information.&#x20;
