

## The package is broadly divided into:

## **Mixin Classes**: 

To handle specific assumption checks:

- `NormalityChecker` class: Checks normality using Shapiro-Wilk test, skewness, and kurtosis.
- `HomoscedasticityChecker` class: Checks homoscedasticity using Levene's test.
- `MonotonicityChecker` class: Checks monotonic relationships using Spearman correlation.
- `PairedDataChecker` class: Checks if data is properly paired.
- `CategoricalDataChecker` class: Checks if variables are categorical.
- `MultivariateNormalityChecker` class: Checks multivariate normality using Mardia's test.
- `SurvivalDataChecker` class: Checks basic requirements for survival data.
- `ProportionalHazardsChecker` class: Checks proportional hazards using Schoenfeld residuals.
- `PairedDifferenceChecker` class: Checks properties of paired differences.

## **Specific Checkers**: 

Specific checkers for various statistical tests, each inheriting from AssumptionChecker and relevant mixins:

- `IndependentTTestChecker` class: For Independent Samples t-test
- `RepeatedMeasuresANOVAChecker` class: For Repeated ANOVA
- `LogisticRegressionChecker` class: For Logistic Regression
- `PearsonCorrelationChecker` class: For Pearson correlation
- `PairedTTestChecker` class: For Paired t-test
- `ChiSquareIndependenceChecker` class: For Chi-square independence test
- `MultipleRegressionChecker` class: For Multiple Linear Regression
- `TwoWayANOVAChecker` class: For Two-way ANOVA
- `KaplanMeierChecker` class: For Kaplan-Meier
- `CoxPHChecker` class: For 
- `PoissonRegressionChecker` class: For Cox Proportional Hazards 
- `SpearmanCorrelationChecker` class: For Spearman Corraletion
- `WilcoxonSignedRankChecker` class: For Wilcoxon Signed-Rank Test
- `MANOVAChecker` class: For MANOVA
- `OneWayANOVAChecker` class: For One-way ANOVA
- `FactorialANOVAChecker` class: For Factorial ANOVA
- Main Class: StatisticalTestAssumptions is the main class that manages the assumption checkers. It allows checking assumptions for a specified test type and provides recommendations based on the results.


## Inlcuded tests assumptions

### Independent Samples t-test `t_test_ind`
---------------------------------------------
1. Normality: The dependent variable should be (approximately) normally distributed within each group.
2. Homogeneity of Variances: The population variances in the two groups should be equal (often checked using Levene’s test).
3. Independence of Observations: Each observation in one group is independent of any observation in the other group.

### Repeated-Measures ANOVA `repeated_anova`
---------------------------------------------
1. Normality: The dependent variable should be (approximately) normally distributed at each time point or for each repeated measure.
2. Sphericity: The variances of the differences between all possible pairs of repeated-measure conditions should be equal (often checked by Mauchly’s test).
3. Independence of Observations: Observations from different subjects are assumed to be independent, although repeated measures on the same subject are inherently correlated.

### Logistic Regression `logistic`
---------------------------------------------
1. Dependent Variable: Binary (two categories, e.g., “success/fail” or “disease/no disease”).
Independence of Errors: Residuals (errors) should be independent across observations.
2. Lack of Multicollinearity: Predictor variables should not be too highly correlated with each other.
3. Linearity in the Logit: Although logistic regression is for categorical outcomes, continuous predictors should have a linear relationship with the log odds of the outcome.

### Factorial ANOVA `factorial_anova`
---------------------------------------------
1. Normality: The dependent variable in each cell of the design should be (approximately) normally distributed.
2. Homogeneity of Variances: The variance across all cells (factorial combinations of levels) should be equal.
3. Independence of Observations: Observations in each cell are independent of those in other cells and within cells.

### One-Way ANOVA `one_way_anova`
---------------------------------------------
1. Normality: The dependent variable should be (approximately) normally distributed in each group.
2. Homogeneity of Variances: The variances in each of the groups are assumed to be equal.
3. Independence of Observations: Observations in one group should be independent from those in other groups.

### Pearson Correlation `pearson_correlation`
---------------------------------------------
1. Linearity: The relationship between the two variables should be linear.
2. Normality (for Significance Testing): Each variable should be (approximately) normally distributed if you want to use significance tests and confidence intervals for r.
3. Interval or Ratio Scale: Both variables are typically continuous and measured on an interval or ratio scale.
4. Independence of Observations: Each pair of observations comes from independent subjects or units.

### Paired t-test `paired_ttest`
---------------------------------------------
1. Normality of Difference Scores: The differences between the paired observations should be (approximately) normally distributed.
2. Dependence of Observations: Each pair is taken from the same subject or matched subjects (hence, “paired”).
3. No Significant Outliers: Extreme outliers in the difference scores can affect the test.

### Chi-Square Test of Independence `chi_square_independence`
---------------------------------------------
1. Independence of Observations: Each subject or unit should be counted only once in the contingency table.
2. Expected Cell Frequency: Each cell in the contingency table should have an expected count of at least 5 (rule of thumb for validity of p-values).
3. Categorical Variables: Both variables should be categorical (nominal or ordinal).

### Multiple Regression `multiple_regression`
---------------------------------------------
1. Linearity: The relationship between each predictor and the outcome (dependent variable) is assumed to be linear in the parameters.
2. Independence of Errors: Residuals should be independent (often checked by plotting residuals vs. predicted values).
3. Homoscedasticity: The variance of residuals is constant across all levels of the predictors (also checked by residual plots).
4. Normality of Residuals: The residuals should be (approximately) normally distributed (checked with Q-Q plots).
5. Lack of Multicollinearity: Predictors should not be too highly correlated with each other.

### Two-Way ANOVA `two_way_anova`
---------------------------------------------
1. Normality: The dependent variable in each group (combination of two independent factors) should be (approximately) normally distributed.
2. Homogeneity of Variances: The variances across all factor-level combinations should be equal (Levene’s test is common).
3. Independence of Observations: Observations in one factor-level combination are independent from other factor-level combinations and within each combination.

### Kaplan-Meier Analysis `kaplan_meier`
---------------------------------------------
1. Random Censoring: Assumes that censoring is non-informative (the reason an individual leaves the study or is censored is independent of their underlying risk).
2. Independence of Survival Times: Each subject’s survival time is independent of others.
3. Time-to-Event Data: Typically used when the outcome is the time until an event (e.g., death, relapse).

### Cox Proportional Hazards Model `cox_ph`
---------------------------------------------
1. Proportional Hazards: The hazard functions for different groups (or at different levels of a covariate) are proportional over time (i.e., hazard ratios remain constant over time).
2. Random/Non-Informative Censoring: Similar to Kaplan-Meier, censoring should not be related to the outcome.
3. Linearity (for Continuous Covariates): Often assumed that continuous covariates have a log-linear relationship with the hazard.
4. Independence of Observations: Each subject’s time-to-event is independent (unless modeling random effects or frailty for clustering).

### Poisson Regression `poisson`
---------------------------------------------
1. Count Outcome Variable: The dependent variable is a count (e.g., number of doctor visits).
2. Mean-Variance Relationship: The Poisson model assumes the mean and variance are equal. (If variance > mean significantly, a Negative Binomial model might be preferred.)
3. Independence of Observations: Each count is assumed to be independent of the others.
4. Linearity in the Log Link: The log of the expected count is assumed to be a linear combination of predictors.

### Spearman Correlation `spearman`
---------------------------------------------
1. Monotonic Relationship: The relationship between the two variables should be monotonic (does not have to be linear).
2. Ordinal or Interval/Ratio Data: Although often used for ordinal data, Spearman correlation can also handle interval/ratio data that fail Pearson’s normality assumption.
3. Independence of Observations: Each pair of observations is assumed independent.

### Wilcoxon Signed-Rank Test `wilcoxon_signed_rank`
---------------------------------------------
1. Paired or Matched Samples: The same subjects measured twice, or matched subjects.
2. Ordinal or Continuous Data: Used when data are ordinal or not normally distributed, but we assume differences can be meaningfully ranked.
3. Symmetry of Distribution of Differences (Ideal): While not as strict as the normality assumption, it is often assumed that the distribution of differences is symmetrical around the median.

### MANOVA (Multivariate Analysis of Variance) `manova`
---------------------------------------------
1. Multivariate Normality: The combination of dependent variables follows a multivariate normal distribution within each group.
2. Homogeneity of Variance-Covariance Matrices: The variance-covariance matrices for the dependent variables are the same in each group (Box’s M test).
3. Independence of Observations: Observations across groups (and within groups) are independent.
4. No Multicollinearity Among Dependent Variables: If the dependent variables are very highly correlated, MANOVA might not be the best approach.


## Suggested test alternatives explanation


### Independent T-Test:
---------------------------------------------
- Suggested Alternatives: Mann-Whitney U test, Welch's t-test

- Explanation:

   - Mann-Whitney U test is a non-parametric alternative that does not assume normality.

   - Welch's t-test is used when the assumption of equal variances is violated.

### Repeated Measures ANOVA:
---------------------------------------------
- Suggested Alternatives: Friedman test, Mixed-effects model

- Explanation:

	- Friedman test is a non-parametric alternative for repeated measures.

	- Mixed-effects model can handle violations of sphericity and other complex data structures.


### Logistic Regression:
---------------------------------------------
- Suggested Alternatives: Penalized regression (Ridge, Lasso), Decision trees

- Explanation:

	- Penalized regression methods like Ridge and Lasso can handle multicollinearity.

	- Decision trees do not assume linearity or independence of errors.


## Pearson Correlation:
---------------------------------------------
- Suggested Alternatives: Spearman rank correlation, Kendall rank correlation, Robust correlation methods

- Explanation:

	- Spearman rank correlation and Kendall rank correlation are non-parametric and do not assume normality.

	- Robust correlation methods can handle outliers.


### Paired T-Test:
---------------------------------------------
- Suggested Alternatives: Wilcoxon signed-rank test, Sign test, Randomization test

- Explanation:

	- Wilcoxon signed-rank test is a non-parametric alternative for paired data.

	- Sign test is another non-parametric alternative.

	- Randomization test can be used when assumptions are severely violated.


### Chi-Square Test of Independence:
---------------------------------------------
- Suggested Alternatives: Fisher's exact test, G-test of independence, Freeman-Halton test, Log-linear analysis

- Explanation:

	- Fisher's exact test is used for small sample sizes.

	- G-test is an alternative to the chi-square test.

	- Freeman-Halton test extends Fisher's test to larger tables.

	- Log-linear analysis is used for more complex categorical data.

### Multiple Linear Regression:
---------------------------------------------
- Suggested Alternatives: Ridge Regression, Lasso Regression, Robust Regression, Quantile Regression, Non-linear regression models

- Explanation:

	- Ridge and Lasso Regression address multicollinearity.

	- Robust Regression handles outliers.

	- Quantile Regression does not assume homoscedasticity.

	- Non-linear regression models are used when linearity is violated.

### Two-Way ANOVA:
---------------------------------------------
- Suggested Alternatives: Non-parametric factorial analysis, Robust two-way ANOVA, Aligned Rank Transform ANOVA, Separate non-parametric tests with correction, Mixed-effects model

- Explanation:

	- Non-parametric factorial analysis is used when assumptions are violated.

	- Robust ANOVA methods handle violations of assumptions.

	- Aligned Rank Transform ANOVA is a non-parametric alternative.

	- Mixed-effects model can handle complex designs.

### Kaplan-Meier Survival Analysis:
---------------------------------------------
- Suggested Alternatives: Cox Proportional Hazards model, Parametric survival models, Competing risks analysis, Time-varying coefficient models

- Explanation:

	- Cox Proportional Hazards model is more flexible.

	- Parametric survival models assume specific distributions.

	- Competing risks analysis is used when there are competing events.

	- Time-varying coefficient models handle time-dependent covariates.

### Cox Proportional Hazards Regression:
---------------------------------------------
- Suggested Alternatives: Stratified Cox model, Time-varying coefficient Cox model, Parametric survival models, Additive hazards models

- Explanation:

	- Stratified Cox model handles non-proportional hazards.

	- Time-varying coefficient models address time-dependent effects.

	- Parametric survival models assume specific distributions.

	- Additive hazards models are an alternative to proportional hazards.

### Poisson Regression (continued):
---------------------------------------------
- Suggested Alternatives: Negative Binomial Regression, Zero-inflated Poisson Regression, Zero-inflated Negative Binomial Regression, Quasi-Poisson Regression

- Explanation:

	- Negative Binomial Regression is suitable when there is overdispersion (variance greater than the mean) in count data.

	- Zero-inflated Poisson Regression is used when there are more zeros in the data than expected under a standard Poisson model.

	- Zero-inflated Negative Binomial Regression combines the handling of excess zeros and overdispersion.

	- Quasi-Poisson Regression is another approach to handle overdispersion by adjusting the variance function.


### Spearman's Rank Correlation:
---------------------------------------------
- Suggested Alternatives: Kendall's tau, Kendall's tau-b (for ties), Pearson correlation (if relationship is linear), Distance correlation (for non-monotonic relationships)

- Explanation:

	- Kendall's tau is a non-parametric measure of correlation that is less sensitive to ties than Spearman's.

	- Kendall's tau-b is specifically designed to handle ties in the data.

	- Pearson correlation can be used if the relationship is linear and assumptions of normality are met.

	- Distance correlation is a more general measure that can detect both linear and non-linear associations.

### Wilcoxon Signed-Rank Test:
---------------------------------------------
- Suggested Alternatives: Sign test (for asymmetric differences), Paired t-test (if differences are normal), Permutation test, Bootstrap methods

- Explanation:

	- Sign test is a simpler non-parametric test that can be used if the differences are not symmetrically distributed.

	- Paired t-test is appropriate if the differences are normally distributed.

	- Permutation test is a non-parametric method that does not rely on distributional assumptions.

	Bootstrap methods provide a flexible approach to estimate the sampling distribution of the test statistic.

### MANOVA (Multivariate Analysis of Variance):
---------------------------------------------

- Suggested Alternatives: Separate univariate ANOVAs with Bonferroni correction, Robust MANOVA, Permutation MANOVA, Non-parametric multivariate tests (e.g., NPMANOVA), Linear Discriminant Analysis

- Explanation:

	- Separate univariate ANOVAs with Bonferroni correction control for Type I error across multiple tests.

	- Robust MANOVA methods handle violations of assumptions such as multivariate normality.

	- Permutation MANOVA is a non-parametric alternative that does not assume normality.

	- Non-parametric multivariate tests like NPMANOVA are used when assumptions are violated.

	- Linear Discriminant Analysis can be used for classification purposes when MANOVA assumptions are not met.

### One-Way ANOVA:
---------------------------------------------
- Suggested Alternatives: Kruskal-Wallis H-test, Welch's ANOVA, Brown-Forsythe test

- Explanation:

	- Kruskal-Wallis H-test is a non-parametric alternative that does not assume normality.

	- Welch's ANOVA is used when the assumption of equal variances is violated.

	- Brown-Forsythe test is another alternative for testing equality of means when variances are unequal.

### Factorial ANOVA:
---------------------------------------------
- Suggested Alternatives: Non-parametric factorial analysis, Mixed-effects model, Robust ANOVA

- Explanation:

	- Non-parametric factorial analysis is used when assumptions of normality and homoscedasticity are violated.

	- Mixed-effects model can handle complex designs and violations of sphericity.

