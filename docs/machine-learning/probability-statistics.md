### Basic probability and statistics 

Expectation value $\bar{x} = \sum_i^n P(x_i) x_i$. 

In case of continuous distribution: $\bar{x} = \int_{\infty}^{\infty} x p(x) dx$. 

Expectation value of $<x^2>$ = $\sum_i^n P(x_i) x_i^2$.

Standard deviation ($\sigma$) = $\sqrt{Variance}$ 

Variance = Expectation value of $(x_i - \bar{x})^2 = <x^2> - <x>^2$ 

**Correlation:** 

Uncorrelated: $\mathcal{E}(XY) = \mathcal{E}(X) \mathcal{E}(Y)$, where $\mathcal{E}$ denotes expectation values. 

Positive correlation: $\mathcal{E}(XY) > \mathcal{E}(X) \mathcal{E}(Y)$ 

Negative correlation: $\mathcal{E}(XY) < \mathcal{E}(X) \mathcal{E}(Y)$

Measure of correlation: Covariance 

$Cov(X, Y) = \mathcal{E}(XY) - \mathcal{E}(X) \mathcal{E}(X)$ 

Pearson's correlation coefficient: 

$$  \frac{\mathcal{E}(XY) - \mathcal{E}(X) \mathcal{E}(X)}{\sigma(X) \sigma(Y)}  $$ 

Range for Pearson's coefficient: [-1, 1]. 

**Note:** If two variables are uncorrelated, their covariance is 0. However, the reverse need not be true: two variables can dependent on each other and still can have zero covariance. 

**Bayes' rule:**  

$$ P(A|B) = \frac{P(A \cap B)}{P(B)} = \frac{P(A) P(B|A)}{P(B)}  $$ 

**Resources:** 

- [https://projects.iq.harvard.edu/stat110](https://projects.iq.harvard.edu/stat110){:target="_blank"} 
