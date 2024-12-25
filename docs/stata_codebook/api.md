
### Detailed Function Documentation

##### Function: `codebook`

Generates a detailed codebook for a given DataFrame/variable in the dataframe, providing descriptive statistics and data quality checks.

**Parameters:**
- `df` (pandas.DataFrame): The DataFrame to analyze.
- `column` (str, optional): If specified, only this column will be analyzed. Defaults to `None`.
- `advanced` (bool, optional): If `True`, includes additional statistics like standard deviation, confidence intervals, and normality tests. Defaults to `False`.
- `decimal_places` (int, optional): The number of decimal places to round numerical results. Defaults to 3.

**Returns:**
- pandas.DataFrame: A DataFrame containing the codebook with descriptive statistics and data quality checks.

**Example Usage:**


```python
# Generate an advanced codebook for a specific column
codebook(df, column='age', advanced=True, decimal_places=2)
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Variable</th>
      <th>Type</th>
      <th>Unique values</th>
      <th>Missing values</th>
      <th>Blank issues</th>
      <th>Range</th>
      <th>25th percentile</th>
      <th>50th percentile (Median)</th>
      <th>75th percentile</th>
      <th>Mean</th>
      <th>Examples</th>
      <th>Top categories</th>
      <th>SD</th>
      <th>95% CI</th>
      <th>Normality test</th>
      <th>p-value (normality)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>age</td>
      <td>float64</td>
      <td>4</td>
      <td>1</td>
      <td>Not applicable</td>
      <td>(25.0, 40.0)</td>
      <td>28.75</td>
      <td>32.5</td>
      <td>36.25</td>
      <td>32.5</td>
      <td>[35.0, 25.0, 30.0]</td>
      <td>-</td>
      <td>6.45</td>
      <td>(26.18, 38.82)</td>
      <td>Shapiro-Wilk</td>
      <td>0.97</td>
    </tr>
  </tbody>
</table>
</div>



### Notes
If a column contains all missing values, the function will skip detailed analysis for that column and indicate that it is entirely missing.
The function automatically handles mixed data types by converting the column to an object type and issuing a warning.

### Output Explanation:

- **Variable**: The name of the variable.
- **Type**: The data type of the variable.
- **Unique values**: The number of unique non-null values.
- **Missing values**: The number of missing (null) values.
- **Blank issues**: Any detected issues with leading, trailing, or embedded blanks in string variables.
- **Range**: The minimum and maximum values for numeric variables.
- **25th, 50th, 75th percentile**: The respective percentiles for numeric variables.
- **Mean**: The mean of numeric variables.
- **SD**: The standard deviation for numeric variables (advanced mode).
- **95% CI**: The 95% confidence interval for numeric variables (advanced mode).
- **Normality test**: The type of normality test applied (Shapiro-Wilk (for datasets with 5000 or fewer observations) or Kolmogorov-Smirnov (for larger datasets)).
- **p-value (normality)**: The p-value from the normality test.
- **Top categories**: The most frequent categories for categorical variables.
- **Top category proportion**: The proportion of the top category for categorical variables (advanced mode).
- **95% CI (top category)**: The 95% confidence interval for the top category proportion (advanced mode).


### FAQ/Troubleshooting

**Q1: The codebook function isn't working for my DataFrame with mixed data types. What should I do?**

A: The `codebook` function automatically detects and converts columns with mixed data types to object (string) type. If you see a warning about mixed types, ensure your data is clean and consistently typed, or allow the function to handle it automatically.

**Q2: Why does the function skip some columns?**

A: The function may skip columns if they contain all missing values (`NaN`). The output will indicate if a column is entirely missing.

**Q3: How can I adjust the number of decimal places for numerical results?**

A: You can adjust the decimal precision by setting the `decimal_places` parameter when calling the `codebook` function:


```codebook(df, advanced=True, decimal_places=2)```


