### Regression 

#### Linear regression 

Minimize the square loss function: 

$$  L(w, b) = \sum_i [y_i - (w \cdot x_i + b)]^2  $$ 

#### Ridge regression 

$$  L(w, b) = \sum_i [y_i - (w \cdot x_i + b)]^2 + \lambda |w|^2  $$

Linear regression is a good choice when we have lots of training data. In reality, we can vary $\lambda$ and choose a value for which the test error is minimum. 

#### Lasso 

Similar to Ridge regression: 

$$  L(w, b) = \sum_i [y_i - (w \cdot x_i + b)]^2 + \lambda |w|  $$

It has some advantages, like it produces sparse $w$ matrix (lots of zero elements). 

**Squashing function:** 

$$  s(x) = \frac{1}{1 + e^{-x}}  $$ 

$x$ can have range [-$\infty$, +$\infty$], while $s$ have range [0, 1]. 

#### Conditional probability estimation : Logistic regression

When we are on a decision boundary, the probability is equal for both outcomes. When we move away from the decision boundary, we have certain outcome more likely. 

$$ Pr(y|x) = \frac{1}{1 + e^{-y (w \cdot x + b)}}  $$ 
