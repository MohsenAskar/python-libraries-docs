## ` My DataViewer` package overview 

[![Python 3.8+](https://img.shields.io/badge/python-3.8+-blue.svg)](https://www.python.org/downloads/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


**`My DataViewer` : A Lightweight Real-Time Interactive Data Viewer IDE for Python**

Inspired by the Stata `browser`,`My DataViewer` is a lightweight, interactive data viewer IDE for Pyhton built with `PyQt5`, designed for real-time manipulation and exploration of pandas DataFrames. Featuring real-time reflection of changes to your datasets, `My DataViewer` offers a lightweight, intuitive way to explore and analyze full dataframes.  

**An Overview of `browse` in Stata**
- `browse` in Stata opens a window that displays your dataset in a spreadsheet-like view. It allows you to see the dataset, scroll through it, and interactively examine variables and their values.

**Interactivity in Stata's `browse`:**

- **Live, Real-time Reflection:** Any changes you make to the dataset (e.g., adding variables, modifying values) are automatically reflected in the `browse` window without needing to close and reopen the window.

- **Read-Only by Default:** The browse command is read-only by default, so you can’t modify values directly in the viewer unless you switch to edit mode.

- **View Subsets of Data:** You can specify subsets of the data to view (e.g., certain variables or observations).

***Integrated features in `My DataViewer` package:***

- **Real-time dataset updates:** Automatically reflects changes in the DataFrame as you manipulate it.
- **Embedded `IPython console`:** Execute Python code and interact with your data directly within the viewer.
- **Search and filter dataframe:** Easily search and filter your data, with results reflected in real time.
- **Check and scroll through the whole dataframe:** Allows the user to inspect the whole dataframe ensuring the changes are correctly executed.
- **Custom themes and fonts:** Switch between selected themes and fonts for a personalized experience.
- **Split-view layout:** Includes a variable table and the main data view, allowing for easy navigation of variables and their types.

**A quick comaprison between Stata `browse` and RStudio `View()`**

| Feature                        | **Stata browse**                                | **RStudio View()**                              |
|:---------------------------------|:--------------------------------------------------|:--------------------------------------------------|
| **Real-time reflection of changes** | **Yes** — automatically updates with changes     | **No** — requires a manual refresh (View() again) |
| **Read-Only by default**        | Yes (but can switch to edit mode)               | Yes (no edit mode available)                   |
| **Interactive editing**         | Yes, if you switch to edit mode                 | No                                               |
| **Filtering/Subset view**       | Yes, allows viewing subsets of variables/rows     | Requires filtering beforehand, not interactive   |
| **Customizable views**          | Yes, can display specific columns/rows            | Requires code to subset data, then view          |
| **Viewer format**               | Standalone window (outside the main Stata UI)     | Integrated as a tab within RStudio               |"
**A quick comaprison between Stata `browse` and RStudio `View()`**

| Feature                        | **Stata browse**                                | **RStudio View()**                              |
|:---------------------------------|:--------------------------------------------------|:--------------------------------------------------|
| **Real-time reflection of changes** | **Yes** — automatically updates with changes     | **No** — requires a manual refresh (View() again) |
| **Read-Only by default**        | Yes (but can switch to edit mode)               | Yes (no edit mode available)                   |
| **Interactive editing**         | Yes, if you switch to edit mode                 | No                                               |
| **Filtering/Subset view**       | Yes, allows viewing subsets of variables/rows     | Requires filtering beforehand, not interactive   |
| **Customizable views**          | Yes, can display specific columns/rows            | Requires code to subset data, then view          |
| **Viewer format**               | Standalone window (outside the main Stata UI)     | Integrated as a tab within RStudio               |"


## A comparison with Stata `browse` and RStudio `View()` commands

| Feature                             | **Stata `browse`**                                | **RStudio `View()`**                              | **`My DataViewer` package**                                      |
|:------------------------------------|:-------------------------------------------------|:-------------------------------------------------|:---------------------------------------------------------|
| **Real-time reflection of changes** | **Yes** — automatically updates with data changes | **No** — must manually refresh the view           | **Yes** — real-time updates are supported via observable DataFrame |
| **Read-Only by default**            | Yes (can switch to `edit` mode)                   | Yes (no direct editing in the viewer)             | Yes, read-only but with real-time updates                 |
| **Interactive editing**             | Yes, if you switch to `edit` mode                 | No                                                | No direct editing in the viewer, editing must be done programmatically |
| **Viewing subsets of data**         | Yes, easily view subsets of variables/rows        | Yes, but requires filtering the data manually     | Yes, filtering implemented using search functionality in real time |
| **Window integration**              | Standalone window (outside Stata’s main interface)| Integrated tab in RStudio                        | Integrated window in PyQt5, with split views and dockable widgets |
| **Sorting and filtering in viewer** | Yes, sortable columns and filter rows interactively| Limited sorting/filtering functionality           | **Yes**, with header-click sorting and real-time search and filtering |
| **Customizable views**              | Yes, can select specific columns/rows             | Requires prior filtering in code                 | Customizable through filtering and real-time search features |
| **Console integration**             | No embedded console                              | No embedded console                              | **Yes**, embedded IPython console for live data manipulation |
| **Custom themes**                   | No                                                | No                                                | **Yes**, switchable light/dark themes and custom fonts     |
| **Jupyter integration**             | No                                                | No                                                | **Yes**, updates Jupyter kernel namespace if running inside Jupyter   |




<div>
    <img src="https://static.pepy.tech/badge/mydataviewer-GUI" alt="Total downloads"/>
</div>