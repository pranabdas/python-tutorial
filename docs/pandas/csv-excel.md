### Read/write CSV and Excel files

We often receive data in CSV or Excel format. First let's create a dataframe. 
```python
import pandas as pd

# Create a dataframe
data = {'User':  ['Edwin', 'Pranab', 'Luis'],
        'Activity': ['Sample preparation', 'ARPES measurement', 'XPS measurement'],
         'Usage (hours)': [4, 2, 2]
        }

df = pd.DataFrame (data)
```


```python
# Print the dataframe
df
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
      <th>User</th>
      <th>Activity</th>
      <th>Usage (hours)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>Edwin</td>
      <td>Sample preparation</td>
      <td>4</td>
    </tr>
    <tr>
      <th>1</th>
      <td>Pranab</td>
      <td>ARPES measurement</td>
      <td>2</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Luis</td>
      <td>XPS measurement</td>
      <td>2</td>
    </tr>
  </tbody>
</table>
</div>




```python
# Save as both excel and csv 
df.to_csv('user-activity.csv', index=False)
df.to_excel('user-activity.xlsx', index=False)
```


```python
# Read the files 
df_copy_csv = pd.read_csv('user-activity.csv')
df_copy_excel = pd.read_excel('user-activity.xlsx')
```


```python
df_copy_csv
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
      <th>User</th>
      <th>Activity</th>
      <th>Usage (hours)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>Edwin</td>
      <td>Sample preparation</td>
      <td>4</td>
    </tr>
    <tr>
      <th>1</th>
      <td>Pranab</td>
      <td>ARPES measurement</td>
      <td>2</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Luis</td>
      <td>XPS measurement</td>
      <td>2</td>
    </tr>
  </tbody>
</table>
</div>




```python
df_copy_excel
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
      <th>User</th>
      <th>Activity</th>
      <th>Usage (hours)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>Edwin</td>
      <td>Sample preparation</td>
      <td>4</td>
    </tr>
    <tr>
      <th>1</th>
      <td>Pranab</td>
      <td>ARPES measurement</td>
      <td>2</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Luis</td>
      <td>XPS measurement</td>
      <td>2</td>
    </tr>
  </tbody>
</table>
</div>




```python
# Add new row of data
df_copy_csv = df_copy_csv.append({'User' : 'Akash', \
                                  'Activity' : 'Sample de-cap', \
                                  'Usage (hours)' : 3}, \
                                  ignore_index=True)
```


```python
df_copy_csv
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
      <th>User</th>
      <th>Activity</th>
      <th>Usage (hours)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>Edwin</td>
      <td>Sample preparation</td>
      <td>4</td>
    </tr>
    <tr>
      <th>1</th>
      <td>Pranab</td>
      <td>ARPES measurement</td>
      <td>2</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Luis</td>
      <td>XPS measurement</td>
      <td>2</td>
    </tr>
    <tr>
      <th>3</th>
      <td>Akash</td>
      <td>Sample de-cap</td>
      <td>3</td>
    </tr>
  </tbody>
</table>
</div>




```python
# Drop last row 
df_copy_csv.drop(df_copy_csv.index[[-1]], inplace=True)
df_copy_csv
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
      <th>User</th>
      <th>Activity</th>
      <th>Usage (hours)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>Edwin</td>
      <td>Sample preparation</td>
      <td>4</td>
    </tr>
    <tr>
      <th>1</th>
      <td>Pranab</td>
      <td>ARPES measurement</td>
      <td>2</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Luis</td>
      <td>XPS measurement</td>
      <td>2</td>
    </tr>
  </tbody>
</table>
</div>




```python
# We can remove any row by 
df_copy_csv.drop(df_copy_csv.index[[1]], inplace=True)
df_copy_csv
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
      <th>User</th>
      <th>Activity</th>
      <th>Usage (hours)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>Edwin</td>
      <td>Sample preparation</td>
      <td>4</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Luis</td>
      <td>XPS measurement</td>
      <td>2</td>
    </tr>
  </tbody>
</table>
</div>




```python
# Edit a row 
df_copy_csv.loc[0] = ['Edwin', 'PLD growth', 5]
df_copy_csv
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
      <th>User</th>
      <th>Activity</th>
      <th>Usage (hours)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>Edwin</td>
      <td>PLD growth</td>
      <td>5</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Luis</td>
      <td>XPS measurement</td>
      <td>2</td>
    </tr>
  </tbody>
</table>
</div>




```python
df_copy_csv.to_csv('user-activity.csv', index=False)
df_copy_csv = pd.read_csv('user-activity.csv')
df_copy_csv
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
      <th>User</th>
      <th>Activity</th>
      <th>Usage (hours)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>Edwin</td>
      <td>PLD growth</td>
      <td>5</td>
    </tr>
    <tr>
      <th>1</th>
      <td>Luis</td>
      <td>XPS measurement</td>
      <td>2</td>
    </tr>
  </tbody>
</table>
</div>




```python
# Add a new column. We will use datetime format
import datetime
```


```python
date = [datetime.date(2020, 7, 2), datetime.date(2020, 7, 4), datetime.date(2020, 7, 5)]
```


```python
df['Date'] = date
df
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
      <th>User</th>
      <th>Activity</th>
      <th>Usage (hours)</th>
      <th>Date</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>Edwin</td>
      <td>Sample preparation</td>
      <td>4</td>
      <td>2020-07-02</td>
    </tr>
    <tr>
      <th>1</th>
      <td>Pranab</td>
      <td>ARPES measurement</td>
      <td>2</td>
      <td>2020-07-04</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Luis</td>
      <td>XPS measurement</td>
      <td>2</td>
      <td>2020-07-05</td>
    </tr>
  </tbody>
</table>
</div>




```python
# Insert in the first column 
df.pop('Date')  # remove the last column 
df.insert(0, 'Date', date)
df
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
      <th>Date</th>
      <th>User</th>
      <th>Activity</th>
      <th>Usage (hours)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>2020-07-02</td>
      <td>Edwin</td>
      <td>Sample preparation</td>
      <td>4</td>
    </tr>
    <tr>
      <th>1</th>
      <td>2020-07-04</td>
      <td>Pranab</td>
      <td>ARPES measurement</td>
      <td>2</td>
    </tr>
    <tr>
      <th>2</th>
      <td>2020-07-05</td>
      <td>Luis</td>
      <td>XPS measurement</td>
      <td>2</td>
    </tr>
  </tbody>
</table>
</div>
