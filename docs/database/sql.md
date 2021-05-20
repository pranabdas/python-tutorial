---
title: SQL basics
---
We will use sqlite3 to learn the syntax of SQL before working with servers.
Install sqlite3 in Ubuntu:
```bash
apt install sqlite3
```

If you are on macOS, sqlite3 comes preinstalled (checked on Catalina). If you
don't have it installed in your computer, you can install from Homebrew:
```bash
brew install sqlite3
```

Creating a database:
```bash
sqlite3 car.db
```

If the database file `car.db` already exists, it will open it. In order to exit
sqlite3 prompt, type: `.exit`.

First we will get some data to import in our database. Run the following python
code to have our data in a csv file.
```python
import pandas as pd
url = "http://archive.ics.uci.edu/ml/machine-learning-databases/autos/imports-85.data"
headers = ["symboling", "normalized-losses", "make", "fuel-type", "aspiration",\
          "num-of-doors", "body-style", "drive-wheels", "engine-location",\
          "wheel-base", "length", "width", "height", "curb-weight", "engine-type",\
          "num-of-cylinders", "engine-size", "fuel-system", "bore", "stroke",\
          "compression-ratio", "horsepower", "peak-rpm", "city-mpg", "highway-mpg",\
          "price"]
df = pd.read_csv(url, header=None, names=headers, na_values=["?"])
df.to_csv("cardata.csv", index=None)
```

Now let's import the file in our SQL database.
```sql
sqlite3 car.db
sqlite > .mode csv
sqlite > .import cardata.csv cardata
sqlite > .schema
```
We can see the schema it automatically used while importing the data. Later we will create our own schema, before that let's explore the database we have imported. We can select/read columns from the table by:
```sql
sqlite > SELECT COLUMN1, COLUMN2, ... FROM TABLE1;
sqlite > SELECT make, price FROM cardata;
sqlite > SELECT * FROM cardata;
sqlite > SELECT * FROM cardata WHERE price > 50000;
```

We will see that it does not work as we expected, because in our database the price is TEXT and not a number. We will fix it later.

Use functions/methods: number of rows in a table:
```sql
SELECT COUNT(*) FROM cardata;
```

Number of toyota cars:
```sql
SELECT COUNT(*) FROM cardata WHERE make='toyota';
```

Distinct car makers in our table:
```sql
SELECT DISTINCT make FROM cardata;
```

Grouping:
```sql
SELECT make, COUNT(make) FROM cardata GROUP BY make;
SELECT make, COUNT(make) FROM cardata GROUP BY make HAVING COUNT(make) > 10;
```

Sum, average, min, max functions:
```sql
SELECT AVG(price) FROM cardata;
SELECT AVG(price) FROM cardata WHERE make='jaguar';
SELECT AVG(price) as avg_price FROM cardata;
```

Other useful functions: ROUND(), LENGTH(), UCASE, LCASE, DAY(), MONTH(), DATE(), DATETIME(), TIMESTAMMP().

Sub-query, nested-query:
```sql
SELECT make, price FROM cardata WHERE price = (SELECT MAX(price) FROM cardata);
SELECT make, price FROM cardata WHERE price > (SELECT AVG(price) from cardata);
SELECT make, price, (SELECT AVG(price) FROM cardata) FROM cardata;
```

Select first 10 rows:
```sql
SELECT make, horsepower, price FROM cardata LIMIT 10;
SELECT make, horsepower, price FROM cardata WHERE make = 'toyota' LIMIT 5;
```

Let us create a table ourselves instead of importing it.
```sql
sqlite3 test.db
sqlite > CREATE TABLE customer (
	ID INTEGER,
	NAME varchar(30)
	);
```

Create another table in the same database:
```sql
CREATE TABLE newtable (
	ID INT,
	CCODE CHAR(2),
	NAME VARCHAR(60)
	);
```

Delete a table:
```sql
DROP TABLE newtable;
```

Additional parameter while creating table:
```sql
CREATE TABLE country(
	ID INT PRIMARY KEY NOT NULL,
	CCODE CHAR(2),
	NAME VARCHAR(60)
);
```

Insert data into our table:
```sql
INSERT INTO country (ID, CCODE, NAME) VALUES (1, 'IN', 'India');
INSERT INTO country (ID, CCODE, NAME) VALUES (2, 'SG', 'Singapore');
INSERT INTO country (ID, CCODE, NAME) VALUES (3, 'US', 'United States');
```

We can insert multiple rows at one time as well:
```sql
INSERT INTO country (ID, CCODE, NAME) VALUES (4, 'JP', 'Japan'),
(5, 'CN', 'China'),
(6, 'IT', 'Italy');
```

Now we can check if the data is correctly entered:
```sql
SELECT * FROM country;
```

Update an entry in the table:
```sql
UPDATE country SET NAME='United States of America' WHERE ID=3;
UPDATE country SET NAME="People's Republic of China" WHERE CCODE='CN';
```

Select row using string pattern and conditions:
```sql
SELECT * FROM country WHERE NAME LIKE '%china%';
SELECT * FROM country WHERE ID < 5 AND ID >= 3;
SELECT * FROM country WHERE ID BETWEEN 2 AND 5;
SELECT * FROM country WHERE CCODE='IN' OR CCODE='JP';
SELECT * FROM country WHERE CCODE IN ('IN', 'JP', 'IT');
```

Sorting results:
```sql
SELECT * FROM country ORDER BY CCODE;
SELECT * FROM country ORDER BY ID DESC;
```

Instead column name, we can use column number as well:
```sql
SELECT * FROM country ORDER BY 2;
```

Let's create another table in our database:
```sql
CREATE TABLE name(
	CCODE CHAR(2),
	NAME VARCHAR(60)
);

INSERT INTO name (CCODE, NAME) VALUES ('JP', 'Name Japan'),
	('IN', 'Pranab'),
	('IT', 'It name'),
	('SG', 'Sg name'),
	('CN', 'prc name'),
	('US', 'usa name');

SELECT * FROM name WHERE CCODE IN (SELECT CCODE FROM country WHERE ID > 4);
SELECT * FROM country WHERE CCODE IN (SELECT CCODE FROM country WHERE NAME='Italy');
```

Delete a row:
```sql
DELETE FROM country WHERE CCODE="CN";
```

Delete multiple rows:
```sql
DELETE FROM country WHERE CCODE IN ('US', 'JP', 'IT');
```
