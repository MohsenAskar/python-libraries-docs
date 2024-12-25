## 1. Installation

The package can be installed directly from PyPI using pip:

`pip install stata_codebook`

### 2. Quick Start
Here's a quick example to get you started:


```python
import pandas as pd
from stata_codebook import codebook
```


```python
# Sample DataFrame
data = {
    'age': [25, 30, 35, 40, None],
    'income': [50000, 60000, 70000, 80000, 90000],
    'gender': ['Male', 'Female', 'Female', 'Male', None],
    'is_employed': [True, True, False, True, None]
}
df = pd.DataFrame(data)
```


```python
# codebook for all dataset varaibles
codebook(df)
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
      <th>Top category proportion</th>
      <th>95% CI (top category)</th>
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
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>1</th>
      <td>income</td>
      <td>int64</td>
      <td>5</td>
      <td>0</td>
      <td>Not applicable</td>
      <td>(50000, 90000)</td>
      <td>60000.0</td>
      <td>70000.0</td>
      <td>80000.0</td>
      <td>70000.0</td>
      <td>[70000, 50000, 60000]</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>2</th>
      <td>gender</td>
      <td>object</td>
      <td>2</td>
      <td>1</td>
      <td>No blanks detected</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>[Female, Male, Female]</td>
      <td>{'Male': 2, 'Female': 2}</td>
      <td>-</td>
      <td>NaN</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <th>3</th>
      <td>is_employed</td>
      <td>object</td>
      <td>2</td>
      <td>1</td>
      <td>No blanks detected</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>[False, True, True]</td>
      <td>{True: 3, False: 1}</td>
      <td>-</td>
      <td>NaN</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
    </tr>
  </tbody>
</table>
</div>




```python
# codebook for specific column in the dataset
codebook(df, column='income') # numerical column
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
      <td>income</td>
      <td>int64</td>
      <td>5</td>
      <td>0</td>
      <td>Not applicable</td>
      <td>(50000, 90000)</td>
      <td>60000.0</td>
      <td>70000.0</td>
      <td>80000.0</td>
      <td>70000.0</td>
      <td>[70000, 50000, 60000]</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
    </tr>
  </tbody>
</table>
</div>




```python
# codebook for specific column in the dataset
codebook(df, column='gender') # categorical column
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
      <th>Examples</th>
      <th>Top categories</th>
      <th>Range</th>
      <th>25th percentile</th>
      <th>50th percentile (Median)</th>
      <th>75th percentile</th>
      <th>Mean</th>
      <th>SD</th>
      <th>Normality test</th>
      <th>p-value (normality)</th>
      <th>Top category proportion</th>
      <th>95% CI (top category)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>gender</td>
      <td>object</td>
      <td>2</td>
      <td>1</td>
      <td>No blanks detected</td>
      <td>[Female, Male, Female]</td>
      <td>{'Male': 2, 'Female': 2}</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
    </tr>
  </tbody>
</table>
</div>




```python
# codebook for specific column in the dataset additional statistics 
codebook(df, advanced=True)
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
      <th>Top category proportion</th>
      <th>95% CI (top category)</th>
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
      <td>6.455</td>
      <td>(26.174, 38.826)</td>
      <td>Shapiro-Wilk</td>
      <td>0.972</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>1</th>
      <td>income</td>
      <td>int64</td>
      <td>5</td>
      <td>0</td>
      <td>Not applicable</td>
      <td>(50000, 90000)</td>
      <td>60000.0</td>
      <td>70000.0</td>
      <td>80000.0</td>
      <td>70000.0</td>
      <td>[70000, 50000, 60000]</td>
      <td>-</td>
      <td>15811.388</td>
      <td>(56140.707, 83859.293)</td>
      <td>Shapiro-Wilk</td>
      <td>0.967</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>2</th>
      <td>gender</td>
      <td>object</td>
      <td>2</td>
      <td>1</td>
      <td>No blanks detected</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>[Female, Male, Female]</td>
      <td>{'Male': 2, 'Female': 2}</td>
      <td>-</td>
      <td>NaN</td>
      <td>-</td>
      <td>-</td>
      <td>0.50</td>
      <td>(0.01, 0.99)</td>
    </tr>
    <tr>
      <th>3</th>
      <td>is_employed</td>
      <td>object</td>
      <td>2</td>
      <td>1</td>
      <td>No blanks detected</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>[False, True, True]</td>
      <td>{True: 3, False: 1}</td>
      <td>-</td>
      <td>NaN</td>
      <td>-</td>
      <td>-</td>
      <td>0.75</td>
      <td>(0.326, 1.174)</td>
    </tr>
  </tbody>
</table>
</div>

