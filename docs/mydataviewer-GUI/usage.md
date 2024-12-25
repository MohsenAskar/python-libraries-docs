## 1. ` My DataViewer` package installation

Install from PyPI using `pip`


```python
!pip install mydataviewer-GUI
```

## 2. Package dependencies

- Python 3.6 or newer
- Pandas
- PyQt5
- qtconsole
- ipykernel
- jupyter_client

## 3. How to start `My DataViewer`

### A. Running the Package from the Terminal using `viewdata` a command

After installing the package using `pip install mydataviewer`, you can launch the `My DataViewer` directly from the terminal using the command-line interface (CLI).

#### Steps:

1. Open a terminal window.
2. Activate the environment in which `My DataViewer` is installed, `conda activate my_env`.
3. Run the following command to start the `My DataViewer`:


```python
viewdata
```

### B. Running ` My DataViewer` from the terminal using a python file

You can also launch the `My DataViewer` directly from the terminal by running a custom python file.

#### Steps:

1. Create a python file, for example: 'my_file.py' or any name the user chooses.
2. In the file type these lines:


```python
from mydataviewer.view_dataframe import view_dataframe
view_dataframe()
```

3. In a terminal window, navigate to the directory of 'my_file.py'.
4. Type 'python my_file.py', and the package will start.

### C. Running ` My DataViewer` from VS Code

You can also run the package from VS Code using the terminal.

1. Open your project in VS Code.
2. Open the integrated terminal by going to View > Terminal.
3. Type the `viewdata` and press `Enter`:

This will start the `My DataViewer` like in a regular terminal.

### D. Running ` My DataViewer` from an .exe file

You can also run the package by navigating to `Scripts` inside the environment in which `My DataViewer` is insalled.

1. Navigate to directory `C:\Users\USER_NAME\Anaconda3\envs\ENV_NAME\Scripts`
2. You will find `viewdata.exe` file, open it.

This will directly start the `My DataViewer`. The user can also copy the `viewdata.exe` file to desktop or anyother directory to access it easily.

## 4. Interacting with the `My DataViewer`

After running the `viewdata` command, a data import box will open allowing the user to locate and open the dataframe from `Import Dataframe` menu. After choosing the dataframe, the `My DataViewer` GUI window will open, displaying the DataFrame. The window includes:

- **Table View**: Displays the DataFrame in a table format.
- **Sidebar**: Shows variable names and data types.
- **Search Bar**: Allows you to search within the DataFrame.
- **Interactive Console**: An embedded IPython console at the bottom, enabling you to manipulate the DataFrame and reflect the changes in real-time.

## 5. Customizing `My DataViewer`



**Themes and Fonts**
- The `My DataViewer` includes `themes` and `fonts` menu options for changing fonts and themes. Access these from the menu bar at the top of the DataViewer window.

**Themes**
- Light Theme (Default)
- Dark Theme
- Solarized Dark Theme
- Solarized Light Theme
- Monokai Theme
- Shades of Purple Theme
- Vue Theme

**Fonts**
- Arial
- Courier New
- Times New Roman
- Georgia
- Verdana
- Consolas

## 6. ` My DataViewer` components

1. `data_import_dialog.py`: Manages data import imports using PyQt. The imported data could be in ".csv", ".excel", ".json", ".sql", ".api", or ".dta".
2. `data_viewer.py`: Contains the `DataViewer` class, which provides the core GUI using PyQt. It handles table views, search functionality, variable tables, themes, fonts, and a console.
3. `dataframe_model.py`: Defines `DataFrameModel`, which is the model for the table view and supports pagination, sorting, and updating based on an observable DataFrame.
4. `observable_dataframe.py`: Extends `pandas.DataFrame` into an `ObservableDataFrame` that triggers callbacks on changes, allowing the UI to stay in sync.
5. `view_dataframe.py`: Defines the main `view_dataframe` function that launches the DataViewer with the provided DataFrame, handling the GUI's event loop.
6. `themes.py`: Contains style sheets for light, dark, and solarized dark themes, which are applied to the PyQt widgets.


## 7. Working with Jupyter QtConsole 


- As stated in its documentation "The Qt console is a very lightweight application that largely feels like a terminal, but provides a number of enhancements only possible in a GUI, such as inline figures, proper multi-line editing with syntax highlighting, graphical calltips, and much more."
- The embedded IPython console provides an interactive environment to manipulate your DataFrame. You can perform operations such as filtering rows, applying transformations, or generating statistics directly from within the console. Any changes made in the console are immediately reflected in the table view, ensuring real-time feedback
- The user can activate the desired environment using `conda activate`.
- By default the loaded dataframe is named `df`.
- See the documentaion here: https://qtconsole.readthedocs.io/en/stable/

## 8. Additional Resources


- PyQt5 Documentation: https://www.riverbankcomputing.com/static/Docs/PyQt5/
- qtconsole Documentation: https://qtconsole.readthedocs.io/en/latest/

### Watch My Dataviewer video demo: 


[![Watch the demo on YouTube](https://img.youtube.com/vi/1Anf4SENqOo/maxresdefault.jpg)](https://www.youtube.com/watch?v=1Anf4SENqOo)

## License

Released under the MIT License:
Copyright (C) 2024 mydataviewer-GUI

Developed by: Mohsen Askar  <ceaser198511@gmail.com>