### Machine learning introduction 

**How is machine learning different from an algorithm?** 

If we have a well defined problem (say distance between two points), we may find an exact steps or algorithm to find the answer. However, in machine learning deals with problems there is no such exact steps, and often the problems itself are not well defined (such a image recognition). In such situation, we collect a set of input and output (called training set), and based on those trends we make decision on future inputs. 

#### Some terminology 

**Cross validation:** 

We can divide available dataset in k-folds. Use (k-1) folds for training, and use remaining 1-fold data points for error estimation. Then pick another set of (k-1) fold points for training, and 1-fold points for error estimation and so on. 

**Supervised and un-supervised learning:** 

When the training data is labeled, we call it supervised learning. 

**Classification vs. regression:** 

If the labels or result space is discrete, then it is a classification. On the other hand, if the result space is continuous, it is a regression problem. 
