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
