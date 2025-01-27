## ` My DataViewer` components

1. `data_import_dialog.py`: Manages data import imports using PyQt. The imported data could be in ".csv", ".excel", ".json", ".sql", ".api", or ".dta".
2. `data_viewer.py`: Contains the `DataViewer` class, which provides the core GUI using PyQt. It handles table views, search functionality, variable tables, themes, fonts, and a console.
3. `dataframe_model.py`: Defines `DataFrameModel`, which is the model for the table view and supports pagination, sorting, and updating based on an observable DataFrame.
4. `observable_dataframe.py`: Extends `pandas.DataFrame` into an `ObservableDataFrame` that triggers callbacks on changes, allowing the UI to stay in sync.
5. `view_dataframe.py`: Defines the main `view_dataframe` function that launches the DataViewer with the provided DataFrame, handling the GUI's event loop.
6. `themes.py`: Contains style sheets for light, dark, and solarized dark themes, which are applied to the PyQt widgets.


##  Working with Jupyter QtConsole 


- As stated in its documentation "The Qt console is a very lightweight application that largely feels like a terminal, but provides a number of enhancements only possible in a GUI, such as inline figures, proper multi-line editing with syntax highlighting, graphical calltips, and much more."
- The embedded IPython console provides an interactive environment to manipulate your DataFrame. You can perform operations such as filtering rows, applying transformations, or generating statistics directly from within the console. Any changes made in the console are immediately reflected in the table view, ensuring real-time feedback
- The user can activate the desired environment using `conda activate`.
- By default the loaded dataframe is named `df`.
- See the documentaion here: https://qtconsole.readthedocs.io/en/stable/

## Additional Resources


- PyQt5 Documentation: [https://www.riverbankcomputing.com/static/Docs/PyQt5/](https://www.riverbankcomputing.com/static/Docs/PyQt5/)
- qtconsole Documentation: [https://qtconsole.readthedocs.io/en/latest/](https://qtconsole.readthedocs.io/en/latest/)
