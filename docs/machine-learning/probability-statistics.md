### Basic probability and statistics 

Expectation value of $x$ = ($\bar{x}$) = $\sum_i^n P(x_i) x_i$.  

Expectation value of $x^2$ = $\sum_i^n P(x_i) x_i^2$.

Standard deviation ($\sigma$) = $\sqrt{Variance}$ = Expectation value of $(x_i - \bar{x})^2$  

$\sigma (x) = \bar{x^2} - \bar{x}^2 = <x^2> - <x>^2$ 

#### Correlation 

Uncorrelated: $\mathcal{E}(XY) = \mathcal{E}(X) \mathcal{E}(Y)$, where $\mathcal{E}$ denotes expectation values. 

Positive correlation: $\mathcal{E}(XY) > \mathcal{E}(X) \mathcal{E}(Y)$ 

Negative correlation: $\mathcal{E}(XY) < \mathcal{E}(X) \mathcal{E}(Y)$

Measure of correlation: Covariance 

$Cov(X, Y) = \mathcal{E}(XY) - \mathcal{E}(X) \mathcal{E}(X)$ 

Pearson's correlation coefficient: 

$$  \frac{\mathcal{E}(XY) - \mathcal{E}(X) \mathcal{E}(X)}{\sigma(X) \sigma(Y)}  $$ 

Range for Pearson's coefficient: [-1, 1]. 

**Note:** If two variables are uncorrelated, their covariance is 0. However, the reverse need not be true: two variables can dependent on each other and still can have zero covariance. 

#### How is machine learning different from an algorithm? 

If we have a well defined problem (say distance between two points), we may find an exact steps or algorithm to find the answer. However, in machine learning deals with problems there is no such exact steps, and often the problems itself are not well defined (such a image recognition). In such situation, we collect a set of input and output (called training set), and based on those trends we make decision on future inputs. 

#### Cross validation 

We can divide available dataset in k-folds. Use (k-1) folds for training, and use remaining 1-fold data points for error estimation. Then pick another set of (k-1) fold points for training, and 1-fold points for error estimation and so on. 
