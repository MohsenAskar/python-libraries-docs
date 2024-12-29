[![Python 3.10+](https://img.shields.io/badge/python-3.10+-blue.svg)](https://www.python.org/downloads/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

`AssumptionSheriff` is a comprehensive Python package designed to validate statistical test assumptions. It provides automated checking of common statistical assumptions and offers recommendations when assumptions are violated. The packges supports 16 commonly used statistical tests, more tests will be added in the coming package updates.

Unfortunately, it is quite common that published health research do not fully report or validate the underlying assumptions of statistical tests utilized as reported by many articles, see: 

- Hoekstra et al. (2012) "Are Assumptions of Well-Known Statistical Techniques Checked, and Why (Not)?" [https://doi.org/10.3389/fpsyg.2012.00137](https://doi.org/10.3389/fpsyg.2012.00137)

- Patino et. al (2018) "Meeting the assumptions of statistical tests: an important and often forgotten step to reporting valid results"
[https://doi.org/10.1590/S1806-37562018000000303](https://doi.org/10.1590/S1806-37562018000000303)

- Nielsen et. al (2019) "Assessing assumptions for statistical analyses in randomised clinical trials"
[https://doi-org.mime.uit.no/10.1136/bmjebm-2019-111174](https://doi-org.mime.uit.no/10.1136/bmjebm-2019-111174)

To bridge this gap, `Assumption Sheriff`  automates the process of checking statistical test assumptions, providing clear feedback and suggestions for alternative approaches when violations occur.

## Supported Statistical Tests

`AssumptionSheriff` supports assumption checking for the following statistical tests:

1. **Independent Samples t-test** `t_test_ind`
2. **Repeated-Measures ANOVA** `repeated_anova`
3. **Logistic Regression** `logistic`
4. **Factorial ANOVA (Two-way ANOVA)** `factorial_anova`
5. **One-Way ANOVA (one_way_anova)** `one_way_anova`
6. **Pearson Correlation** `pearson_correlation`
7. **Paired t-test** `paired_ttest`
8. **Chi-Square Test of Independence** `chi_square_independence`
9. **Multiple Regression** (`multiple_regression`)
10. **Two-Way ANOVA** `two_way_anova`
11. **Kaplan-Meier Analysis** `kaplan_meier`
12. **Cox Proportional Hazards** `cox_ph`
13. **Poisson Regression** `poisson`
14. **Spearman Correlation** `spearman`
15. **Wilcoxon Signed-Rank Test** `wilcoxon_signed_rank`
16. **MANOVA (Multivariate Analysis of Variance)** `manova`

More tests to be added in future vesrions.

## Key Features

1. Comprehensive assumption checking
2. Recommendations for alternative methods
3. Flexible integration
4. Commonly used test support


!!! quote "Citation"
    If you use AssumptionSheriff in your research, please cite:
    ```bibtex
    @software{assumptionsheriff2024,
        title = {AssumptionSheriff: A Python Package for Statistical Assumption Checking},
        author = {Mohsen Askar},
        e-mail = {ceaser198511@gmail.com},
        year = {2024},
        url = {https://pypi.org/project/assumption-sheriff/}
    }
    ```

<div>
    <img src="https://static.pepy.tech/badge/assumption-sheriff" alt="Total downloads"/>
</div>