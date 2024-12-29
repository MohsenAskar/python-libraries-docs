# Overview

[![Python 3.8+](https://img.shields.io/badge/python-3.8+-blue.svg)](https://www.python.org/downloads/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
<div>
    <img src="https://static.pepy.tech/badge/stata_codebook" alt="Total downloads"/>
</div>

# `stata_codebook`

The `stata_codebook` package provides tools for generating detailed descriptive statistics and summaries of data frames, similar to Stata's `codebook` command. `codebook` command is a very useful command to examine dataset varaibles. 
In Stata documentation "`codebook` examines the data in producing its results. For variables that codebook thinks are
continuous, it presents the mean; the standard deviation; and the 10th, 25th, 50th, 75th, and 90th
percentiles. For variables that it thinks are categorical, it presents a tabulation.".

The package supports various features, including:
- Summary statistics for numeric and categorical variables
- Handling of columns with missing values
- Detection of mixed data types
- Normality testing with Shapiro-Wilk or Kolmogorov-Smirnov tests, depending on dataset size
- Output formatting for academic or professional reports
- Check for embedded, leading, and trailing balnks in the variables.


## Why use stata_codebook over built-in summary statistics?

While pandas offers built-in functions like `describe()` and `value_counts()` for summarizing data, the **`codebook package`** provides several advantages:

1. **Comprehensive Overview**

    - **Numeric and Categorical Data**: Unlike `describe()`, which primarily focuses on numeric data, `codebook` provides a detailed summary of both numeric and categorical variables. It not only gives you the common statistics like mean, median, and standard deviation but also includes the top categories and their proportions for categorical variables.
   
    - **Handling of Missing Values**: The `codebook` function provides a clear count of missing values for each variable, which is not directly offered by the `describe()` function.


2. **Data Quality Checks**

    - **Detection of Blanks**: One of the unique features of the `codebook` function is its ability to detect embedded, leading, and trailing blanks in string data. This can be crucial for identifying and resolving data entry issues that might otherwise go unnoticed with standard summary statistics.

    - **Mixed Data Types**: If a column contains mixed data types, the function will automatically detect and handle it, issuing warnings to alert you to potential data quality problems.

3. **Advanced Statistical Insights**

    - **Normality Testing**: The `codebook` function includes normality testing (Shapiro-Wilk for small datasets (<5000 observations) and Kolmogorov-Smirnov for large datasets), providing you with p-values that can help you assess the distribution of your numeric data. This goes beyond what the standard `describe()` function offers.
    - **Confidence Intervals**: In advanced mode, the function calculates 95% confidence intervals for both numeric variables and the proportions of the top categories in categorical variables, offering deeper insights into your data's variability.

4. **Customizable and Readable Output**

    - **Formatted Output**: The `codebook` function rounds numerical results to a specified number of decimal places, ensuring that the output is easy to read and interpret. This is especially valuable for creating reports or presentations where clarity and professionalism are paramount.
    - **Consistent Display**: By returning a DataFrame with all relevant statistics neatly organized, `codebook` makes it easier to compare variables side by side, which can be inefficient when using multiple pandas functions.

5. **Easy to Use**

    - **Single Command**: With just one command, you can generate a detailed and well-rounded summary of one column or the entire DataFrame, saving time and reducing the risk of overlooking important details.



## License

Released under the MIT License: For more details, see the `LICENSE` file in the repository.
Copyright (C) 2024 **`stata_codebook`**

Developed by: Mohsen Askar <ceaser198511@gmail.com>

!!! quote "Citation"
    If you use Stata Codebook in your research, please cite:
    ```bibtex
    @software{stata_codebook2024,
        title = {AssumptionSheriff: A Python Package for Statistical Assumption Checking},
        author = {Mohsen Askar},
        e-mail = {ceaser198511@gmail.com},
        year = {2024},
        url = {https://pypi.org/project/stata_codebook/}
    }
    ```


