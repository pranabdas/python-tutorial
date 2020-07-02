### Pandas series and dataframe 

In this tutorial we will use **pandas**, as well as in some cases **numpy** library. 
```py
import pandas as pd 
import numpy as np 
``` 

We can create pandas series from a list: 
```py
>>> my_series = pd.Series([1, 3, 5, np.nan, 6, 8]);
... print(my_series)

0    1.0
1    3.0
2    5.0
3    NaN
4    6.0
5    8.0
dtype: float64
``` 
We can also use various pandas inbuilt functions to create useful series: 
```py 
>>> my_dates_index = pd.date_range('20190101', periods = 6);
... print(my_dates_index)

DatetimeIndex(['2019-01-01', '2019-01-02', '2019-01-03', '2019-01-04',
               '2019-01-05', '2019-01-06'],
              dtype='datetime64[ns]', freq='D')
```

We generate an array of data using numpy:
```py
>>> sample_numpy_data = np.array(np.arange(24)).reshape((6, 4)); 
... print(sample_numpy_data) 

[[ 0  1  2  3]
 [ 4  5  6  7]
 [ 8  9 10 11]
 [12 13 14 15]
 [16 17 18 19]
 [20 21 22 23]]
``` 

Now we combine our dates_index and the array of data to create a dataframe.
```py 
>>> sample_df = pd.DataFrame(sample_numpy_data, index=my_dates_index, columns=list('ABCD')); 
... sample_df
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
      <th>A</th>
      <th>B</th>
      <th>C</th>
      <th>D</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>2019-01-01</th>
      <td>0</td>
      <td>1</td>
      <td>2</td>
      <td>3</td>
    </tr>
    <tr>
      <th>2019-01-02</th>
      <td>4</td>
      <td>5</td>
      <td>6</td>
      <td>7</td>
    </tr>
    <tr>
      <th>2019-01-03</th>
      <td>8</td>
      <td>9</td>
      <td>10</td>
      <td>11</td>
    </tr>
    <tr>
      <th>2019-01-04</th>
      <td>12</td>
      <td>13</td>
      <td>14</td>
      <td>15</td>
    </tr>
    <tr>
      <th>2019-01-05</th>
      <td>16</td>
      <td>17</td>
      <td>18</td>
      <td>19</td>
    </tr>
    <tr>
      <th>2019-01-06</th>
      <td>20</td>
      <td>21</td>
      <td>22</td>
      <td>23</td>
    </tr>
  </tbody>
</table>
</div>

Dataframes are like excel spreadsheet. Now let's carry out some dataframe operations: 

**Transpose**
```python
>>> sample_df.T
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
      <th>2019-01-01</th>
      <th>2019-01-02</th>
      <th>2019-01-03</th>
      <th>2019-01-04</th>
      <th>2019-01-05</th>
      <th>2019-01-06</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>A</th>
      <td>0</td>
      <td>4</td>
      <td>8</td>
      <td>12</td>
      <td>16</td>
      <td>20</td>
    </tr>
    <tr>
      <th>B</th>
      <td>1</td>
      <td>5</td>
      <td>9</td>
      <td>13</td>
      <td>17</td>
      <td>21</td>
    </tr>
    <tr>
      <th>C</th>
      <td>2</td>
      <td>6</td>
      <td>10</td>
      <td>14</td>
      <td>18</td>
      <td>22</td>
    </tr>
    <tr>
      <th>D</th>
      <td>3</td>
      <td>7</td>
      <td>11</td>
      <td>15</td>
      <td>19</td>
      <td>23</td>
    </tr>
  </tbody>
</table>
</div>

```python
>>> sample_df.sort_index(axis=1, ascending=False)
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
      <th>D</th>
      <th>C</th>
      <th>B</th>
      <th>A</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>2019-01-01</th>
      <td>3</td>
      <td>2</td>
      <td>1</td>
      <td>0</td>
    </tr>
    <tr>
      <th>2019-01-02</th>
      <td>7</td>
      <td>6</td>
      <td>5</td>
      <td>4</td>
    </tr>
    <tr>
      <th>2019-01-03</th>
      <td>11</td>
      <td>10</td>
      <td>9</td>
      <td>8</td>
    </tr>
    <tr>
      <th>2019-01-04</th>
      <td>15</td>
      <td>14</td>
      <td>13</td>
      <td>12</td>
    </tr>
    <tr>
      <th>2019-01-05</th>
      <td>19</td>
      <td>18</td>
      <td>17</td>
      <td>16</td>
    </tr>
    <tr>
      <th>2019-01-06</th>
      <td>23</td>
      <td>22</td>
      <td>21</td>
      <td>20</td>
    </tr>
  </tbody>
</table>
</div>

```python
>>> sample_df.sort_values(by="B", ascending=False)
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
      <th>A</th>
      <th>B</th>
      <th>C</th>
      <th>D</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>2019-01-06</th>
      <td>20</td>
      <td>21</td>
      <td>22</td>
      <td>23</td>
    </tr>
    <tr>
      <th>2019-01-05</th>
      <td>16</td>
      <td>17</td>
      <td>18</td>
      <td>19</td>
    </tr>
    <tr>
      <th>2019-01-04</th>
      <td>12</td>
      <td>13</td>
      <td>14</td>
      <td>15</td>
    </tr>
    <tr>
      <th>2019-01-03</th>
      <td>8</td>
      <td>9</td>
      <td>10</td>
      <td>11</td>
    </tr>
    <tr>
      <th>2019-01-02</th>
      <td>4</td>
      <td>5</td>
      <td>6</td>
      <td>7</td>
    </tr>
    <tr>
      <th>2019-01-01</th>
      <td>0</td>
      <td>1</td>
      <td>2</td>
      <td>3</td>
    </tr>
  </tbody>
</table>
</div>

**Dataframe selection** 
```python
>>> sample_df['C']

    2019-01-01     2
    2019-01-02     6
    2019-01-03    10
    2019-01-04    14
    2019-01-05    18
    2019-01-06    22
    Freq: D, Name: C, dtype: int64
```

Selecting rows by index.
```python
>>> sample_df[1:4]
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
      <th>A</th>
      <th>B</th>
      <th>C</th>
      <th>D</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>2019-01-02</th>
      <td>4</td>
      <td>5</td>
      <td>6</td>
      <td>7</td>
    </tr>
    <tr>
      <th>2019-01-03</th>
      <td>8</td>
      <td>9</td>
      <td>10</td>
      <td>11</td>
    </tr>
    <tr>
      <th>2019-01-04</th>
      <td>12</td>
      <td>13</td>
      <td>14</td>
      <td>15</td>
    </tr>
  </tbody>
</table>
</div>

```python
>>> sample_df['2019-01-01':'2019-01-04']
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
      <th>A</th>
      <th>B</th>
      <th>C</th>
      <th>D</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>2019-01-01</th>
      <td>0</td>
      <td>1</td>
      <td>2</td>
      <td>3</td>
    </tr>
    <tr>
      <th>2019-01-02</th>
      <td>4</td>
      <td>5</td>
      <td>6</td>
      <td>7</td>
    </tr>
    <tr>
      <th>2019-01-03</th>
      <td>8</td>
      <td>9</td>
      <td>10</td>
      <td>11</td>
    </tr>
    <tr>
      <th>2019-01-04</th>
      <td>12</td>
      <td>13</td>
      <td>14</td>
      <td>15</td>
    </tr>
  </tbody>
</table>
</div>

```python
>>> sample_df.loc[my_dates_index[1:4]]
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
      <th>A</th>
      <th>B</th>
      <th>C</th>
      <th>D</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>2019-01-02</th>
      <td>4</td>
      <td>5</td>
      <td>6</td>
      <td>7</td>
    </tr>
    <tr>
      <th>2019-01-03</th>
      <td>8</td>
      <td>9</td>
      <td>10</td>
      <td>11</td>
    </tr>
    <tr>
      <th>2019-01-04</th>
      <td>12</td>
      <td>13</td>
      <td>14</td>
      <td>15</td>
    </tr>
  </tbody>
</table>
</div>

```python
>>> sample_df.loc[:]
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
      <th>A</th>
      <th>B</th>
      <th>C</th>
      <th>D</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>2019-01-01</th>
      <td>0</td>
      <td>1</td>
      <td>2</td>
      <td>3</td>
    </tr>
    <tr>
      <th>2019-01-02</th>
      <td>4</td>
      <td>5</td>
      <td>6</td>
      <td>7</td>
    </tr>
    <tr>
      <th>2019-01-03</th>
      <td>8</td>
      <td>9</td>
      <td>10</td>
      <td>11</td>
    </tr>
    <tr>
      <th>2019-01-04</th>
      <td>12</td>
      <td>13</td>
      <td>14</td>
      <td>15</td>
    </tr>
    <tr>
      <th>2019-01-05</th>
      <td>16</td>
      <td>17</td>
      <td>18</td>
      <td>19</td>
    </tr>
    <tr>
      <th>2019-01-06</th>
      <td>20</td>
      <td>21</td>
      <td>22</td>
      <td>23</td>
    </tr>
  </tbody>
</table>
</div>

```python
>>> sample_df.loc[:, ['A', 'B']]
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
      <th>A</th>
      <th>B</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>2019-01-01</th>
      <td>0</td>
      <td>1</td>
    </tr>
    <tr>
      <th>2019-01-02</th>
      <td>4</td>
      <td>5</td>
    </tr>
    <tr>
      <th>2019-01-03</th>
      <td>8</td>
      <td>9</td>
    </tr>
    <tr>
      <th>2019-01-04</th>
      <td>12</td>
      <td>13</td>
    </tr>
    <tr>
      <th>2019-01-05</th>
      <td>16</td>
      <td>17</td>
    </tr>
    <tr>
      <th>2019-01-06</th>
      <td>20</td>
      <td>21</td>
    </tr>
  </tbody>
</table>
</div>

```python
>>> sample_df.loc['2019-01-01':'2019-01-04', ['A', 'B']]
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
      <th>A</th>
      <th>B</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>2019-01-01</th>
      <td>0</td>
      <td>1</td>
    </tr>
    <tr>
      <th>2019-01-02</th>
      <td>4</td>
      <td>5</td>
    </tr>
    <tr>
      <th>2019-01-03</th>
      <td>8</td>
      <td>9</td>
    </tr>
    <tr>
      <th>2019-01-04</th>
      <td>12</td>
      <td>13</td>
    </tr>
  </tbody>
</table>
</div>
