---
description: >-
  Profit Pulse is a personal dashboard application designed to visually display
  my earnings from multiple sources of income throughout the year. Utilizing
  Nuxt.js and the Google Sheets API, it offers an
---

# Project Brief

## **Project Purpose**

The primary purpose of this project is to display earnings from my three sources of income throughout the year in a visually appealing, organized, and user-friendly manner. This is achieved by leveraging Nuxt UI and Google Sheets.\
\
I am currently building this for my personal use. However, in the future, it aims to cater to other users who utilize spreadsheets and have various sources of income. These users will benefit from a dashboard template that allows them to visualize their financial performance throughout the year.

## **Technologies Used**

This project utilizes the following technologies and frameworks:

* **Nuxt.js**: A powerful framework for building Vue.js applications.
* **Vue.js**: The underlying JavaScript framework used for building user interfaces.
* **Axios**: A promise-based HTTP client for making requests to the Google Sheets API.
* **Google Sheets API**: Used for fetching data from Google Sheets.
* **Nuxt UI**: A UI component library for Nuxt applications.
* **Tailwind CSS**: A utility-first CSS framework for styling the application.

## **Data Fetching Mechanism**

Data is fetched using Axios. The Google API key is obtained from [Google Cloud,](https://cloud.google.com/) and the spreadsheet ID is sourced from a sample project created specifically for this purpose.

## &#x20;**Key Features**

* Display earnings from multiple sources in a structured format.
* Interactive dropdowns for filtering data by rows and columns.
* Visual representation of financial data for better insights.
* Responsive design to ensure usability across devices.

## **Use Cases**

The application is designed for tracking sales progress and monitoring total earning growth, especially beneficial for individuals with multiple income sources.

## **Setup Instructions**

Users need to configure their environment by replacing the placeholders in the `.env` file with their Google API key and spreadsheet ID before running the application.

## **Future Enhancements**

Currently, there are no specific future enhancements planned; however, potential improvements may include additional features based on feedback and requirements.
