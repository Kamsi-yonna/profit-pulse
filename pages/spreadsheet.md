# Spreadsheet

### Overview

The `Spreadsheet` component serves as the main interface for displaying data fetched from Google Sheets. It integrates the [`DataTable` ](../components/datatable.md)component to present the spreadsheet data in a structured format, along with dropdowns that allow users to filter and view specific rows and columns of data.



### Purpose

The `Spreadsheet` component acts as a central hub for displaying and interacting with data retrieved from Google Sheets. It provides users with a clear view of their data stored in spreadsheets.

### Functionality

1. **Display Data**: The component uses the [`DataTable` ](../components/datatable.md)to show all fetched data from Google Sheets in a structured table format.
2. **Dropdown Filters**: Users can select specific rows and columns through dropdown menus, allowing them to filter the displayed data:
   * The first dropdown lists unique identifiers from the first column (representing rows).
   * The second dropdown lists all column headers.
3. **Dynamic Updates**: Based on user selections, the component updates to display either an entire row of data or a specific cell value.

### User Experience

This component is designed to enhance user experience by providing:

* A consolidated view of spreadsheet data without needing to switch back and forth between Google Sheets.
* An intuitive interface for filtering and viewing specific data points.
* Immediate feedback on user selections, making it easier to analyze financial performance or other metrics.

### Important Notes

* The `Spreadsheet` component is primarily a display interface. It ensures that users can visualize their spreadsheet data effectively.
* While this component is essential for viewing data, it represents just one part of the overall project. Future enhancements may include additional features for deeper analysis or interaction with the data.

### Conclusion

The `Spreadsheet` component plays a vital role in presenting and interacting with Google Sheets data within your application. It not only simplifies data visualization but also enhances usability by allowing users to focus on their financial information without constantly accessing Google Sheets.

