### Basic data exploration using Pandas 

We will explore life expectancy data from WHO record. You can find such datasets from [Kaggle](https://www.kaggle.com){:target="_blank"} and other databases online. You can also find a copy of the CSV file that we will be using [here](https://pranabdas.github.io/drive/downloads/datasets/Life-Expectancy-Data.csv){:target="_blank"}.

```python
import pandas as pd
```


```python
# Read the data from csv file
data = pd.read_csv("~/Desktop/Life-Expectancy-Data.csv")
```


```python
# Print the head of the data to get an overview 
data.head()
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
      <th>Country</th>
      <th>Year</th>
      <th>Status</th>
      <th>Life expectancy</th>
      <th>Adult Mortality</th>
      <th>infant deaths</th>
      <th>Alcohol</th>
      <th>percentage expenditure</th>
      <th>Hepatitis B</th>
      <th>Measles</th>
      <th>...</th>
      <th>Polio</th>
      <th>Total expenditure</th>
      <th>Diphtheria</th>
      <th>HIV/AIDS</th>
      <th>GDP</th>
      <th>Population</th>
      <th>thinness  1-19 years</th>
      <th>thinness 5-9 years</th>
      <th>Income composition of resources</th>
      <th>Schooling</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>Afghanistan</td>
      <td>2015</td>
      <td>Developing</td>
      <td>65.0</td>
      <td>263.0</td>
      <td>62</td>
      <td>0.01</td>
      <td>71.279624</td>
      <td>65.0</td>
      <td>1154</td>
      <td>...</td>
      <td>6.0</td>
      <td>8.16</td>
      <td>65.0</td>
      <td>0.1</td>
      <td>584.259210</td>
      <td>33736494.0</td>
      <td>17.2</td>
      <td>17.3</td>
      <td>0.479</td>
      <td>10.1</td>
    </tr>
    <tr>
      <th>1</th>
      <td>Afghanistan</td>
      <td>2014</td>
      <td>Developing</td>
      <td>59.9</td>
      <td>271.0</td>
      <td>64</td>
      <td>0.01</td>
      <td>73.523582</td>
      <td>62.0</td>
      <td>492</td>
      <td>...</td>
      <td>58.0</td>
      <td>8.18</td>
      <td>62.0</td>
      <td>0.1</td>
      <td>612.696514</td>
      <td>327582.0</td>
      <td>17.5</td>
      <td>17.5</td>
      <td>0.476</td>
      <td>10.0</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Afghanistan</td>
      <td>2013</td>
      <td>Developing</td>
      <td>59.9</td>
      <td>268.0</td>
      <td>66</td>
      <td>0.01</td>
      <td>73.219243</td>
      <td>64.0</td>
      <td>430</td>
      <td>...</td>
      <td>62.0</td>
      <td>8.13</td>
      <td>64.0</td>
      <td>0.1</td>
      <td>631.744976</td>
      <td>31731688.0</td>
      <td>17.7</td>
      <td>17.7</td>
      <td>0.470</td>
      <td>9.9</td>
    </tr>
    <tr>
      <th>3</th>
      <td>Afghanistan</td>
      <td>2012</td>
      <td>Developing</td>
      <td>59.5</td>
      <td>272.0</td>
      <td>69</td>
      <td>0.01</td>
      <td>78.184215</td>
      <td>67.0</td>
      <td>2787</td>
      <td>...</td>
      <td>67.0</td>
      <td>8.52</td>
      <td>67.0</td>
      <td>0.1</td>
      <td>669.959000</td>
      <td>3696958.0</td>
      <td>17.9</td>
      <td>18.0</td>
      <td>0.463</td>
      <td>9.8</td>
    </tr>
    <tr>
      <th>4</th>
      <td>Afghanistan</td>
      <td>2011</td>
      <td>Developing</td>
      <td>59.2</td>
      <td>275.0</td>
      <td>71</td>
      <td>0.01</td>
      <td>7.097109</td>
      <td>68.0</td>
      <td>3013</td>
      <td>...</td>
      <td>68.0</td>
      <td>7.87</td>
      <td>68.0</td>
      <td>0.1</td>
      <td>63.537231</td>
      <td>2978599.0</td>
      <td>18.2</td>
      <td>18.2</td>
      <td>0.454</td>
      <td>9.5</td>
    </tr>
  </tbody>
</table>
<p>5 rows × 22 columns</p>
</div>




```python
# Let's see how many year data are there
data['Year'].unique()
```




    array([2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007, 2006, 2005,
           2004, 2003, 2002, 2001, 2000])




```python
data.columns
```




    Index(['Country', 'Year', 'Status', 'Life expectancy ', 'Adult Mortality',
           'infant deaths', 'Alcohol', 'percentage expenditure', 'Hepatitis B',
           'Measles ', ' BMI ', 'under-five deaths ', 'Polio', 'Total expenditure',
           'Diphtheria ', ' HIV/AIDS', 'GDP', 'Population',
           ' thinness  1-19 years', ' thinness 5-9 years',
           'Income composition of resources', 'Schooling'],
          dtype='object')


```python
# Let us first select a subset of data (say we are interested in life expectancy)
life_expectancy = data[['Country', 'Year', 'Life expectancy ']]
```

```python
# Let's select few countries and plot the life expectancy over the years 
life_expectancy_in = life_expectancy.loc[life_expectancy['Country'] == 'India']
life_expectancy_sg = life_expectancy.loc[life_expectancy['Country'] == 'Singapore']
life_expectancy_us = life_expectancy.loc[life_expectancy['Country'] == 'United States of America']
life_expectancy_cn = life_expectancy.loc[life_expectancy['Country'] == 'China']
```

```python
# Let's plot using matplotlib 
import matplotlib.pyplot as plt
%matplotlib inline
plt.rcParams["figure.figsize"] = (8, 6)

plt.plot(life_expectancy_in['Year'], life_expectancy_in['Life expectancy '], \
         label= 'IN', marker= 'o')
plt.plot(life_expectancy_sg['Year'], life_expectancy_sg['Life expectancy '], \
         label= 'SG', marker= 'o', color='r')
plt.plot(life_expectancy_us['Year'], life_expectancy_us['Life expectancy '], \
         label= 'US', marker= 'o', color='g')
plt.plot(life_expectancy_cn['Year'], life_expectancy_cn['Life expectancy '], \
         label= 'CN', marker= 'o', color='k')
plt.xlabel('Year')
plt.ylabel('Life expectancy')
plt.legend()
plt.show()
```

![png](../img/pandas-life-expectancy.png)

```python
gdp_life_expectancy = data[['Country', 'Year', 'Life expectancy ', 'GDP']]
```

```python
gdp_life_expectancy_2015 = gdp_life_expectancy.loc[gdp_life_expectancy['Year']==2015]
```

```python
plt.scatter(gdp_life_expectancy_2015['GDP'], \
            gdp_life_expectancy_2015['Life expectancy '])
plt.xlabel('GDP (USD)')
plt.ylabel('Life expectancy')
plt.show()
```

![png](../img/pandas-life-expectancy-gdp.png)

```python
gdp_life_expectancy_2015.loc[gdp_life_expectancy_2015['Life expectancy '] > 85]
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
      <th>Country</th>
      <th>Year</th>
      <th>Life expectancy</th>
      <th>GDP</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>737</th>
      <td>Denmark</td>
      <td>2015</td>
      <td>86.0</td>
      <td>5314.64416</td>
    </tr>
    <tr>
      <th>2345</th>
      <td>Slovenia</td>
      <td>2015</td>
      <td>88.0</td>
      <td>2729.86383</td>
    </tr>
  </tbody>
</table>
</div>
