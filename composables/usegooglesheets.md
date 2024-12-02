---
description: >-
  The useGoogleSheets composable is designed to fetch data from Google Sheets
  using the Google Sheets API. It utilizes Axios to make HTTP requests and
  returns structured data to be used within the app.
---

# useGoogleSheets

```typescript
import axios from "axios";

export const useGoogleSheets = () => {
  const fetchSheetData = async () => {
    const config = useRuntimeConfig();
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${config.public.spreadsheetId}/values/Sheet1?key=${config.public.googleApiKey}`;

    try {
      const response = await axios.get(url);
      return response.data.values; // Returns the rows of your sheet
    } catch (error) {
      console.error("Error fetching data from Google Sheets:", error);
      return null;
    }
  };

  return { fetchSheetData };
};
```



### Purpose

The primary purpose of this composable is to encapsulate the logic required to retrieve data from a specified Google Sheet. This allows for easy reuse across different components within the Nuxt application.

### How It Works

1. **Configuration Access**: The composable uses `useRuntimeConfig()` to access public runtime configuration variables, specifically the Google API key and spreadsheet ID.
2. **Data Fetching**: It constructs a URL for the Google Sheets API and makes a GET request using Axios to retrieve data from the specified sheet.
3. **Error Handling**: If the request fails, an error message is logged to the console, and `null` is returned.
4. **Return Value**: The function returns an object containing the `fetchSheetData` method, which can be called to retrieve the sheet data.

### Important Notes

* Ensure that your `.env` file contains the necessary environment variables:
  * `NUXT_PUBLIC_GOOGLE_API_KEY`: Your Google API key.
  * `NUXT_PUBLIC_SPREADSHEET_ID`: The ID of your Google Sheet.
* The values in runtime configuration should be defined in your `nuxt.config.ts` file as follows:

```typescript
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      googleApiKey: process.env.NUXT_PUBLIC_GOOGLE_API_KEY,
      spreadsheetId: process.env.NUXT_PUBLIC_SPREADSHEET_ID,
    },
  },
});
```

* When using `useRuntimeConfig()`, remember that public keys are accessible on both client and server sides, while private keys should be kept secure and only accessible on the server side.

### Conclusion

The `useGoogleSheets` composable provides a straightforward way to integrate Google Sheets data into your Nuxt application, making it easier to manage and display financial information or any other relevant data stored in spreadsheets.

