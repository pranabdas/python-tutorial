"use strict";(self.webpackChunkpython_tutorial=self.webpackChunkpython_tutorial||[]).push([["5169"],{176:function(e,n,a){a.r(n),a.d(n,{metadata:()=>s,contentTitle:()=>c,default:()=>E,assets:()=>i,toc:()=>o,frontMatter:()=>l});var s=JSON.parse('{"id":"sql-database","title":"SQL database","description":"We will use sqlite3 to learn the syntax of SQL before working with servers.","source":"@site/docs/sql-database.md","sourceDirName":".","slug":"/sql-database","permalink":"/python-tutorial/sql-database","draft":false,"unlisted":false,"editUrl":"https://github.com/pranabdas/python-tutorial/blob/main/docs/sql-database.md","tags":[],"version":"current","frontMatter":{"title":"SQL database"},"sidebar":"docs","previous":{"title":"Multiprocessing","permalink":"/python-tutorial/multiprocessing"},"next":{"title":"Webapps","permalink":"/python-tutorial/category/webapps"}}'),r=a("5893"),t=a("65");let l={title:"SQL database"},c=void 0,i={},o=[];function d(e){let n={code:"code",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"We will use sqlite3 to learn the syntax of SQL before working with servers.\nSQLite is a relational database based on SQL (language), and suitable for small\nscale applications. Install sqlite3 in Ubuntu:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"apt install sqlite3\n"})}),"\n",(0,r.jsx)(n.p,{children:"If you are on macOS, sqlite3 comes preinstalled (checked on Big Sur, 11.4). If\nyou don't have it installed in your computer, you can install from Homebrew:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"brew install sqlite3\n"})}),"\n",(0,r.jsx)(n.p,{children:"Creating a database:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sqlite3 car.db\n"})}),"\n",(0,r.jsxs)(n.p,{children:["If the database file ",(0,r.jsx)(n.code,{children:"car.db"})," already exists, it will open it. In order to exit\nsqlite3 prompt, type: ",(0,r.jsx)(n.code,{children:".exit"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"First we will get some data to import in our database. Run the following python\ncode to have our data in a csv file."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'import pandas as pd\nurl = "http://archive.ics.uci.edu/ml/machine-learning-databases/autos/imports-85.data"\nheaders = ["symboling", "normalized-losses", "make", "fuel-type", "aspiration",\\\n          "num-of-doors", "body-style", "drive-wheels", "engine-location",\\\n          "wheel-base", "length", "width", "height", "curb-weight", "engine-type",\\\n          "num-of-cylinders", "engine-size", "fuel-system", "bore", "stroke",\\\n          "compression-ratio", "horsepower", "peak-rpm", "city-mpg", "highway-mpg",\\\n          "price"]\ndf = pd.read_csv(url, header=None, names=headers, na_values=["?"])\ndf.to_csv("cardata.csv", index=None)\n'})}),"\n",(0,r.jsx)(n.p,{children:"Now let's import the file in our SQL database."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"sqlite3 car.db\nsqlite > .mode csv\nsqlite > .import cardata.csv cardata\nsqlite > .schema\n"})}),"\n",(0,r.jsx)(n.p,{children:"We can see the schema it automatically used while importing the data. Later we will create our own schema, before that let's explore the database we have imported. We can select/read columns from the table by:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"sqlite > SELECT COLUMN1, COLUMN2, ... FROM TABLE1;\nsqlite > SELECT make, price FROM cardata;\nsqlite > SELECT * FROM cardata;\nsqlite > SELECT * FROM cardata WHERE price > 50000;\n"})}),"\n",(0,r.jsx)(n.p,{children:"We will see that it does not work as we expected, because in our database the price is TEXT and not a number. We will fix it later."}),"\n",(0,r.jsx)(n.p,{children:"Use functions/methods: number of rows in a table:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT COUNT(*) FROM cardata;\n"})}),"\n",(0,r.jsx)(n.p,{children:"Number of toyota cars:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT COUNT(*) FROM cardata WHERE make='toyota';\n"})}),"\n",(0,r.jsx)(n.p,{children:"Distinct car makers in our table:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT DISTINCT make FROM cardata;\n"})}),"\n",(0,r.jsx)(n.p,{children:"Grouping:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT make, COUNT(make) FROM cardata GROUP BY make;\nSELECT make, COUNT(make) FROM cardata GROUP BY make HAVING COUNT(make) > 10;\n"})}),"\n",(0,r.jsx)(n.p,{children:"Sum, average, min, max functions:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT AVG(price) FROM cardata;\nSELECT AVG(price) FROM cardata WHERE make='jaguar';\nSELECT AVG(price) as avg_price FROM cardata;\n"})}),"\n",(0,r.jsx)(n.p,{children:"Other useful functions: ROUND(), LENGTH(), UCASE, LCASE, DAY(), MONTH(), DATE(), DATETIME(), TIMESTAMMP()."}),"\n",(0,r.jsx)(n.p,{children:"Sub-query, nested-query:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT make, price FROM cardata WHERE price = (SELECT MAX(price) FROM cardata);\nSELECT make, price FROM cardata WHERE price > (SELECT AVG(price) from cardata);\nSELECT make, price, (SELECT AVG(price) FROM cardata) FROM cardata;\n"})}),"\n",(0,r.jsx)(n.p,{children:"Select first 10 rows:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT make, horsepower, price FROM cardata LIMIT 10;\nSELECT make, horsepower, price FROM cardata WHERE make = 'toyota' LIMIT 5;\n"})}),"\n",(0,r.jsx)(n.p,{children:"Let us create a table ourselves instead of importing it."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"sqlite3 test.db\nsqlite > CREATE TABLE customer (\n	ID INTEGER,\n	NAME varchar(30)\n	);\n"})}),"\n",(0,r.jsx)(n.p,{children:"Create another table in the same database:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE newtable (\n	ID INT,\n	CCODE CHAR(2),\n	NAME VARCHAR(60)\n	);\n"})}),"\n",(0,r.jsx)(n.p,{children:"Delete a table:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"DROP TABLE newtable;\n"})}),"\n",(0,r.jsx)(n.p,{children:"Additional parameter while creating table:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE country(\n	ID INT PRIMARY KEY NOT NULL,\n	CCODE CHAR(2),\n	NAME VARCHAR(60)\n);\n"})}),"\n",(0,r.jsx)(n.p,{children:"Insert data into our table:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"INSERT INTO country (ID, CCODE, NAME) VALUES (1, 'IN', 'India');\nINSERT INTO country (ID, CCODE, NAME) VALUES (2, 'SG', 'Singapore');\nINSERT INTO country (ID, CCODE, NAME) VALUES (3, 'US', 'United States');\n"})}),"\n",(0,r.jsx)(n.p,{children:"We can insert multiple rows at one time as well:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"INSERT INTO country (ID, CCODE, NAME) VALUES (4, 'JP', 'Japan'),\n(5, 'CN', 'China'),\n(6, 'IT', 'Italy');\n"})}),"\n",(0,r.jsx)(n.p,{children:"Now we can check if the data is correctly entered:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM country;\n"})}),"\n",(0,r.jsx)(n.p,{children:"Update an entry in the table:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"UPDATE country SET NAME='United States of America' WHERE ID=3;\nUPDATE country SET NAME=\"People's Republic of China\" WHERE CCODE='CN';\n"})}),"\n",(0,r.jsx)(n.p,{children:"Select row using string pattern and conditions:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM country WHERE NAME LIKE '%china%';\nSELECT * FROM country WHERE ID < 5 AND ID >= 3;\nSELECT * FROM country WHERE ID BETWEEN 2 AND 5;\nSELECT * FROM country WHERE CCODE='IN' OR CCODE='JP';\nSELECT * FROM country WHERE CCODE IN ('IN', 'JP', 'IT');\n"})}),"\n",(0,r.jsx)(n.p,{children:"Sorting results:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM country ORDER BY CCODE;\nSELECT * FROM country ORDER BY ID DESC;\n"})}),"\n",(0,r.jsx)(n.p,{children:"Instead column name, we can use column number as well:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM country ORDER BY 2;\n"})}),"\n",(0,r.jsx)(n.p,{children:"Let's create another table in our database:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE name(\n	CCODE CHAR(2),\n	NAME VARCHAR(60)\n);\n\nINSERT INTO name (CCODE, NAME) VALUES ('JP', 'Name Japan'),\n	('IN', 'Pranab'),\n	('IT', 'It name'),\n	('SG', 'Sg name'),\n	('CN', 'prc name'),\n	('US', 'usa name');\n\nSELECT * FROM name WHERE CCODE IN (SELECT CCODE FROM country WHERE ID > 4);\nSELECT * FROM country WHERE CCODE IN (SELECT CCODE FROM country WHERE NAME='Italy');\n"})}),"\n",(0,r.jsx)(n.p,{children:"Delete a row:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'DELETE FROM country WHERE CCODE="CN";\n'})}),"\n",(0,r.jsx)(n.p,{children:"Delete multiple rows:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"DELETE FROM country WHERE CCODE IN ('US', 'JP', 'IT');\n"})})]})}function E(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},65:function(e,n,a){a.d(n,{Z:function(){return c},a:function(){return l}});var s=a(7294);let r={},t=s.createContext(r);function l(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);