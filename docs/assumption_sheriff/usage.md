## Installation

The package can be installed using `pip`. The dependdencies are `pandas`,`numpy`, `scipy`, `lifelines`, and `statsmodels`.


```python
pip install assumption_sheriff
```

## Quick Start


```python
# Basic import of everything
import assumption_sheriff as ash
```


```python
# or direct import of specific components
from assumption_sheriff import StatisticalTestAssumptions
```


## Detailed user example


```python
# Generate a sample data to test the package 
import numpy as np
import pandas as pd

np.random.seed(123)
n = 100

# 1. Independent groups for t-test / one-way ANOVA / two-way ANOVA (factor A/B)
group_bin = np.random.choice([0, 1], size=n)  
factorA = np.random.choice(['A1','A2'], size=n)  
factorB = np.random.choice(['B1','B2'], size=n) 

# 2. Continuous variables (for t-tests, ANOVAs, correlations, regressions, etc.)
cont_var1 = np.random.normal(loc=50, scale=10, size=n)   
cont_var2 = np.random.normal(loc=0, scale=5, size=n)     
cont_var3 = np.random.normal(loc=100, scale=20, size=n) 

# 3. Repeated-measures variables (for repeated-measures ANOVA)
rm_time1 = np.random.normal(loc=5, scale=1, size=n)  
rm_time2 = rm_time1 + np.random.normal(loc=0.5, scale=0.5, size=n)  
rm_time3 = rm_time1 + np.random.normal(loc=1.0, scale=0.5, size=n)  

# 4. Paired data (for paired t-tests or Wilcoxon signed-rank)
paired_pre = np.random.normal(loc=10, scale=2, size=n)
paired_post = paired_pre + np.random.normal(loc=-1, scale=1, size=n)

# 5. Logistic outcome (binary) for logistic regression
logistic_outcome = np.random.binomial(n=1, p=0.4, size=n)

# 6. Categorical variables (for Chi-Square)
cat_var1 = np.random.choice(['Yes','No'], size=n)
cat_var2 = np.random.choice(['High','Low'], size=n)

# 7. Survival data (time-to-event + event indicator for KM/Cox)
time_to_event = np.random.exponential(scale=10, size=n)
event_occurred = np.random.binomial(n=1, p=0.7, size=n)

# 8. Count data (for Poisson regression)
count_data = np.random.poisson(lam=2, size=n)

# 9. Ordinal data (for Spearman correlation or ordinal logistic)
ordinal_data = np.random.choice(['Mild','Moderate','Severe'], size=n)

# 10. Additional continuous variables for correlations / MANOVA
manova_var1 = np.random.normal(loc=30, scale=5, size=n)
manova_var2 = np.random.normal(loc=60, scale=10, size=n)

# Assemble everything into a DataFrame
data = pd.DataFrame({
    'group_bin': group_bin,
    'factorA': factorA,
    'factorB': factorB,
    'cont_var1': cont_var1,
    'cont_var2': cont_var2,
    'cont_var3': cont_var3,
    'rm_time1': rm_time1,
    'rm_time2': rm_time2,
    'rm_time3': rm_time3,
    'paired_pre': paired_pre,
    'paired_post': paired_post,
    'logistic_outcome': logistic_outcome,
    'cat_var1': cat_var1,
    'cat_var2': cat_var2,
    'time_to_event': time_to_event,
    'event_occurred': event_occurred,
    'count_data': count_data,
    'ordinal_data': ordinal_data,
    'manova_var1': manova_var1,
    'manova_var2': manova_var2
})

print(data.head(5))
```

       group_bin factorA factorB  cont_var1  cont_var2   cont_var3  rm_time1  \
    0          0      A2      B2  54.743473  -6.186766   96.147700  4.413384   
    1          1      A1      B2  44.360761   0.620279  108.982712  5.154290   
    2          0      A1      B1  40.026785  -8.002203   97.092729  3.852763   
    3          0      A2      B1  38.999569   3.769344  137.374529  6.520166   
    4          0      A2      B1  42.435628  -1.234079   89.625923  5.189043   
    
       rm_time2  rm_time3  paired_pre  paired_post  logistic_outcome cat_var1  \
    0  5.256786  5.338739   10.545469     8.320940                 0       No   
    1  5.947174  7.147672   10.850672    10.859323                 0      Yes   
    2  4.585648  4.515028    9.538192     8.055827                 1       No   
    3  6.311219  7.372252   17.143158    17.222955                 0      Yes   
    4  5.909335  5.162844    9.207688     7.786610                 1       No   
    
      cat_var2  time_to_event  event_occurred  count_data ordinal_data  \
    0      Low       0.491169               1           5       Severe   
    1      Low      21.322712               1           2       Severe   
    2      Low       6.101167               1           0       Severe   
    3      Low      17.788497               1           1     Moderate   
    4     High       3.188856               0           1         Mild   
    
       manova_var1  manova_var2  
    0    35.227235    49.717239  
    1    25.034866    52.544302  
    2    32.711234    56.899888  
    3    32.427786    48.581779  
    4    33.709235    69.263657  
    

### T-tests


```python
# for independent t-test
# ---------------------
# Initialize checker
checker = ash.StatisticalTestAssumptions()

# Check assumptions for independent t-test
results = checker.check_assumptions(
    data=data,
    test_type='t_test_ind',
    variables=['cont_var1', 'cont_var2'],
    group_column='group_bin'
)

# Get recommendation
recommendation = checker.get_recommendation(results)
print(recommendation)
```

    ✓ All assumptions are met. You can proceed with the Independent t-test.
    


```python
# for paired t-test
# ---------------------
checker = ash.StatisticalTestAssumptions()
results = checker.check_assumptions(
    data=data,
    test_type='paired_ttest',
    variables=['paired_pre', 'paired_post']
)
# Get recommendations
recommendation = checker.get_recommendation(results)
print(recommendation)
```

    ✓ All assumptions are met. You can proceed with the Paired t-test.
    

### ANOVAs


```python
# One-way ANOVA
# -------------
checker = ash.StatisticalTestAssumptions()
results = checker.check_assumptions(
    data=data,
    test_type='one_way_anova',
    variables=['cont_var1', 'cont_var2'],
    group_column='group_bin'
)

recommendation = checker.get_recommendation(results)
print(recommendation)
```

    ✓ All assumptions are met. You can proceed with the One-way ANOVA.
    


```python
# Two-Way ANOVA
# ----------------
checker = ash.StatisticalTestAssumptions()
results = checker.check_assumptions(
    data=data,
    test_type='two_way_anova',
    variables=['cont_var1'],
    #dependent_var='cont_var1',
    factors=['factorA', 'factorA']
)

recommendation = checker.get_recommendation(results)
print(recommendation) 
```

    ✓ All assumptions are met. You can proceed with the Two-way ANOVA.
    


```python
# Factorial (Two-way) ANOVA
# -----------------------
checker = ash.StatisticalTestAssumptions()
# Sample data structure
data2 = pd.DataFrame({
    'fertilizer': ['A', 'A', 'B', 'B'] * 25,
    'watering': ['daily', 'weekly'] * 50,
    'yield': np.random.normal(loc=[50, 45, 60, 55] * 25, scale=5)
})

results = checker.check_assumptions(
    data=data2,
    test_type='factorial_anova',
    variables=['yield'],
    group_columns= ['fertilizer', 'watering']
)

recommendation = checker.get_recommendation(results)
print(recommendation)
```

    ⚠ Some assumptions for Factorial ANOVA are violated:
    
    - Insufficient sample size in some cells (minimum 25 < required 30)
    
    Consider these alternatives:
    - Non-parametric factorial analysis
    - Mixed-effects model
    - Robust ANOVA
    
    


```python
# Repeated measures ANOVA
#-------------------------
checker = ash.StatisticalTestAssumptions()
# Check assumptions
results = checker.check_assumptions(
    data=data,
    test_type='repeated_anova',
    variables=['rm_time1', 'rm_time2', 'rm_time3'],
    subject_column='group_bin'
)

recommendation = checker.get_recommendation(results)
print(recommendation)
```

    ✓ All assumptions are met. You can proceed with the Repeated Measures ANOVA.
    


```python
# for MANOVA (Multivariate Analysis of Variance)
#---------------------------------------------------

checker = ash.StatisticalTestAssumptions()
results = checker.check_assumptions(
    data=data,
    test_type='manova',
    variables=['manova_var1', 'manova_var2'],
    group_col='group_bin'
)

recommendation = checker.get_recommendation(results)
print(recommendation)
```

    ⚠ Some assumptions for MANOVA are violated:
    
    - Multivariate normality violated in group_1
    - Number of dependent variables should ideally be greater than number of groups
    
    Consider these alternatives:
    - Separate univariate ANOVAs with Bonferroni correction
    - Robust MANOVA
    - Permutation MANOVA
    - Non-parametric multivariate tests (e.g., NPMANOVA)
    - Linear Discriminant Analysis
    
    

### Correlation tests


```python
# for Pearson corraltion 
# --------------------------
checker = ash.StatisticalTestAssumptions()
results = checker.check_assumptions(
    data=data,
    test_type='pearson_correlation',
    variables=['cont_var1', 'cont_var2']
)

recommendation = checker.get_recommendation(results)
print(recommendation)
```

    ⚠ Some assumptions for Pearson Correlation are violated:
    
    - Variable pair cont_var1_vs_cont_var2 may not have a monotonic relationship (Spearman correlation=0.07)
    
    Consider these alternatives:
    - Spearman rank correlation
    - Kendall rank correlation
    - Robust correlation methods
    
    


```python
# for spearman correlation
#----------------------------

checker = ash.StatisticalTestAssumptions()
results = checker.check_assumptions(
    data=data,
    test_type='spearman',
    variables=['ordinal_data', 'cont_var2']
)

recommendation = checker.get_recommendation(results)
print(recommendation) 
```

    ✓ All assumptions are met. You can proceed with the Spearman's Rank Correlation.
    

### Chi-square independence


```python
# for Chi-square test 
# ---------------------
checker = ash.StatisticalTestAssumptions()
results = checker.check_assumptions(
    data=data,
    test_type='chi_square_independence',
    variables=['cat_var1', 'cat_var1']
)

recommendation = checker.get_recommendation(results)
print(recommendation)
```

    ✓ All assumptions are met. You can proceed with the Chi-square test of independence.
    

### Regression


```python
# For Logistic Regression
#------------------------
checker = ash.StatisticalTestAssumptions()
# Check assumptions
results = checker.check_assumptions(
    data=data,
    test_type='logistic',
    variables=['cont_var1', 'cont_var2', 'cont_var3'],
    dependent_var='logistic_outcome'
)

recommendation = checker.get_recommendation(results)
print(recommendation)
```

    ⚠ Some assumptions for Logistic Regression are violated:
    
    - High multicollinearity detected for 'const' (VIF=58.70)
    
    Consider these alternatives:
    - Penalized regression (Ridge, Lasso)
    - Decision trees
    
    


```python
# Multiple Linear Regression 
# ----------------------------
checker = StatisticalTestAssumptions()
results = checker.check_assumptions(
    data=data,
    test_type='multiple_regression',
    variables=['cont_var1', 'cont_var2', 'cont_var3'],
    dependent_var='logistic_outcome'
)

recommendation = checker.get_recommendation(results)
print(recommendation)
```

    ⚠ Some assumptions for Multiple Linear Regression are violated:
    
    - Residuals are not normally distributed (Shapiro-Wilk p=0.0000)
    - Non-linear relationship detected for predictor 'cont_var1'
    - Non-linear relationship detected for predictor 'cont_var2'
    - High multicollinearity detected for variables: ['const']
    
    


```python
# for Poisson regression 
#-----------------------------------------
checker = ash.StatisticalTestAssumptions()
results = checker.check_assumptions(
    data=data,
    test_type='poisson',
    variables=[
        'count_data',    # dependent variable must be first
        'cont_var1',     # predictors follow
        'cont_var2'
    ],
    offset_var='exposure_time'  # Optional
)

recommendation = checker.get_recommendation(results)
print(recommendation)
```

    ⚠ Some assumptions for Poisson Regression are violated:
    
    - High multicollinearity detected for variables: ['const']
    
    Consider these alternatives:
    - Negative Binomial Regression
    - Zero-inflated Poisson Regression
    - Zero-inflated Negative Binomial Regression
    - Quasi-Poisson Regression
    
    

### Survival analysis


```python
# for Kaplan-Meier 
# ----------------
checker = ash.StatisticalTestAssumptions()
results = checker.check_assumptions(
    data=data,
    test_type='kaplan_meier',
    variables=['time_to_event', 'event_occurred'],  # time variable first, event variable second
    group_col='group_bin'  # optional grouping variable
)

recommendation = checker.get_recommendation(results)
print(recommendation) 
```

    ✓ All assumptions are met. You can proceed with the Kaplan-Meier survival analysis.
    


```python
# for Cox Proportional Hazards 
# -----------------------------
checker = ash.StatisticalTestAssumptions()

cox_results = checker.check_assumptions(
    data=data,
    test_type='cox_ph',
    variables=['time_to_event', 'event_occurred'],  # time variable first, event variable second
    group_col='group_bin' 
) 

recommendation = checker.get_recommendation(cox_results)
print(recommendation) 
```

    ✓ All assumptions are met. You can proceed with the Cox Proportional Hazards Regression.
    

### Non-parametric tests


```python
# for Wilcoxon Signed-Rank Test
#-------------------------------
checker = ash.StatisticalTestAssumptions()
results = checker.check_assumptions(
    data=data,
    test_type='wilcoxon_signed_rank',
    variables=['paired_pre', 'paired_post']
)

recommendation = checker.get_recommendation(results)
print(recommendation)
```

    ✓ All assumptions are met. You can proceed with the Wilcoxon Signed-Rank Test.
    

## Common issues and solutions

### 1. Handling missing data
`AssumptionSheriff` automatically handles missing data in most cases. However, for best results:
- Remove or impute missing values before checking assumptions
- Ensure complete cases for paired tests
- Document any data preprocessing steps

### 2. Dealing with outliers
When outliers are detected:
- Review them for data entry errors
- Consider robust statistical methods
- Document justification for outlier handling

### 3. Small sample sizes
For small samples:
- Consider non-parametric alternatives
- Use exact tests when available
- Be cautious with assumption violations
