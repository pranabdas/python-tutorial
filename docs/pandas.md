---
title: Pandas
---
**pandas** module helps us to work with tabular data. It is more like a
spreadsheet program. We can perform various data manipulation, cleaning, and
even visualization using **pandas**.

## Installation
Install pandas package:
```bash
pip install pandas

# for Microsoft Excel compatibility
pip install xlrd openpyxl

# for handling missing data
pip install missingno
```

## Dataframe
Dataframe is like a variable that can hold a whole table. It is more than a
variable, it is a python object. It has properties and methods. Let us create
some tabular data:
```python
import pandas as pd

# Create a python dictionary
data = {'Names':  ['Student 1', 'Student 2', 'Student 3'],
        'Age': [14, 15, 15],
        'Height': [150, 145, 152]
        }

# dataframe form a dictionary
df = pd.DataFrame(data)
```

We can visualize the table in Jupyter notebook:
```python
df  # this shows rich view

# alternatively print plaintext tables
print(df)

       Names  Age  Height
0  Student 1   14     150
1  Student 2   15     145
2  Student 3   15     152
```

Each column in a dataframe is a pandas series. We can select columns:
```python
df["Height"]

0    150
1    145
2    152
Name: Height, dtype: int64
```

Find the shape of the dataframe:
```python
df.shape

(3, 3)
```

Let us append a new row of data:
```python
df = df.append({'Names' : 'Student 4', \
                'Age' : 16, \
                'Height' : 155}, \
                ignore_index=True)
print(df)

       Names  Age  Height
0  Student 1   14     150
1  Student 2   15     145
2  Student 3   15     152
3  Student 4   16     155
```

Here `shape` is a property of the dataframe, while `append` is a method.
General convention is: `object.prop` to get a property value and
`object.function()` to perform some operation.

Assign a new column:
```python
# add new column
grades = ["A", "B", "C", "B"]
df['grades'] = grades
print(df)

       Names  Age  Height grades
0  Student 1   14     150      A
1  Student 2   15     145      B
2  Student 3   15     152      C
3  Student 4   16     155      B
```

Insert column in a specific location:
```python
df.pop('grades')  # remove last column
df.insert(1, 'Grades', grades)
print(df)

       Names Grades  Age  Height
0  Student 1      A   14     150
1  Student 2      B   15     145
2  Student 3      C   15     152
3  Student 4      B   16     155
```

Edit row:
```python
df.loc[1] = ['Student 2', 'A', 15, 147]
print(df)

       Names Grades  Age  Height
0  Student 1      A   14     150
1  Student 2      A   15     147
2  Student 3      C   15     152
3  Student 4      B   16     155
```

Delete a row:
```python
df.drop(df.index[[2]], inplace=True)

# Drop last row
# df.drop(df.index[[-1]], inplace=True)

print(df)

       Names Grades  Age  Height
0  Student 1      A   14     150
1  Student 2      A   15     147
3  Student 4      B   16     155
```

Sort by column:
```python
df.sort_values(by="Age", ascending=False)

	Names	Grades	Age	Height
3	Student 4	B	16	155
1	Student 2	A	15	147
0	Student 1	A	14	150
```

Select columns based on values:
```python
df[df["Height"] >= 150]

	Names	Grades	Age	Height
0	Student 1	A	14	150
3	Student 4	B	16	155
```

## Excel and CSV

Save to `.csv` or `.xlsx` format:
```python
# Save as both excel and csv
df.to_csv('student_info.csv', index=False)
df.to_excel('student_info.xlsx', index=False)
```

Read `.csv` or `.xlsx` files:
```python
df_copy_csv = pd.read_csv('student_info.csv')
df_copy_xlsx = pd.read_excel('student_info.xlsx')
```

Now let us try to load a larger dataset to explore:
```python
url = "https://pranabdas.github.io/drive/datasets/iris/iris.csv"
names = ["sepal_len", "sepal_width", "petal_len", "petal_width", "species"]
df = pd.read_csv(url, header=None, names=names)
```

First, let us check the size of the dataframe:
```python
df.shape

(150, 5)
```

We have 150 rows and 5 columns of data. We can see the top of the dataset by:
```python
df.head()

sepal_len	sepal_width	petal_len	petal_width	species
0	5.1	3.5	1.4	0.2	Iris-setosa
1	4.9	3.0	1.4	0.2	Iris-setosa
2	4.7	3.2	1.3	0.2	Iris-setosa
3	4.6	3.1	1.5	0.2	Iris-setosa
4	5.0	3.6	1.4	0.2	Iris-setosa
```

By default this shows first 5 rows, we can see any number of rows by:
```python
df.head(10)
```

Similarly, we can see the tail of the dataframe as well:
```python
df.tail()

sepal_len	sepal_width	petal_len	petal_width	species
145	6.7	3.0	5.2	2.3	Iris-virginica
146	6.3	2.5	5.0	1.9	Iris-virginica
147	6.5	3.0	5.2	2.0	Iris-virginica
148	6.2	3.4	5.4	2.3	Iris-virginica
149	5.9	3.0	5.1	1.8	Iris-virginica
```

We can also see any arbitrary rows:

```python
df.loc[15:20]

sepal_len	sepal_width	petal_len	petal_width	species
15	5.7	4.4	1.5	0.4	Iris-setosa
16	5.4	3.9	1.3	0.4	Iris-setosa
17	5.1	3.5	1.4	0.3	Iris-setosa
18	5.7	3.8	1.7	0.3	Iris-setosa
19	5.1	3.8	1.5	0.3	Iris-setosa
20	5.4	3.4	1.7	0.2	Iris-setosa
```

We can also select specific rows and columns:
```python
df.loc[15:20, "sepal_len"]

15    5.7
16    5.4
17    5.1
18    5.7
19    5.1
20    5.4
Name: sepal_len, dtype: float64
```

Instead of column header names, its index can be used:
```python
df.iloc[15:20, 0:2]


sepal_len	sepal_width
15	5.7	4.4
16	5.4	3.9
17	5.1	3.5
18	5.7	3.8
19	5.1	3.8
```

Notice that for indexing `loc` and `iloc` behaves differently.

## Datatype

Checking the data types. While importing, pandas might not correctly set the
datatype for your data. You can check the datatype by:
```python
df.dtypes

sepal_len      float64
sepal_width    float64
petal_len      float64
petal_width    float64
species         object
dtype: object
```

We can change a datatype of a column using `astype`:
```python
df["sepal_len"] = df["sepal_len"].astype(int)
df.dtypes

sepal_len        int64
sepal_width    float64
petal_len      float64
petal_width    float64
species         object
dtype: object
```

## Text manipulation
Say, I want to remove the "Iris-" prefix from the species names:
```python
df["species"] = df["species"].str.replace("Iris-", "")
```

Remove leading or trailing spaces:
```python
df["species"] = df["species"].str.strip()
```

Say, I want to make the names uppercase or lowercase or title formatted:
```python
df["species"] = df["species"].str.title()
# df["species"] = df["species"].str.upper()
# df["species"] = df["species"].str.lower()
df.head()


sepal_len	sepal_width	petal_len	petal_width	species
0	5.1	3.5	1.4	0.2	Setosa
1	4.9	3.0	1.4	0.2	Setosa
2	4.7	3.2	1.3	0.2	Setosa
3	4.6	3.1	1.5	0.2	Setosa
4	5.0	3.6	1.4	0.2	Setosa
```

We create a new pandas series to make some more data manipulation:
```python
names = pd.Series(['Albert Einstein', 'Richard Feynman', 'Issac Newton'])
```

We want to reorder the first and last names:
```python
names = names.str.split(" ")
names = pd.Series([i[::-1] for i in names])
names = [" ".join(i) for i in names]
print(names)

['Einstein Albert', 'Feynman Richard', 'Newton Issac']
```

## Customizing pandas

```python
pd.set_options('max_rows', 5)
pd.set_options('max_columns', 4)
```
## Notebooks

- [Pandas dataframe](
https://github.com/pranabdas/python-tutorial/blob/master/notebooks/pandas-dataframe.ipynb)
- [Working with CSV and Excel file format](
https://github.com/pranabdas/python-tutorial/blob/master/notebooks/pandas-csv-excel.ipynb)

If you have issues with viewing the notebooks in web browser, please clone or
download the repository and open the notebooks in Jupyter notebook.

:::tip

If you are interested in advanced use of pandas, please check out my
[machine learning](https://pranabdas.github.io/machine-learning/) tutorial and
notebooks.

:::
