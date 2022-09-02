"use strict";(self.webpackChunkpython_tutorial=self.webpackChunkpython_tutorial||[]).push([[6384],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),c=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=c(n),d=r,m=f["".concat(p,".").concat(d)]||f[d]||u[d]||a;return n?o.createElement(m,l(l({ref:t},s),{},{components:n})):o.createElement(m,l({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7394:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),l=["components"],i={title:"Geographical plots using geopandas and bokeh",sidebar_label:"Geo-plots"},p=void 0,c={unversionedId:"matplotlib/geo-plot",id:"matplotlib/geo-plot",title:"Geographical plots using geopandas and bokeh",description:"Geo-maps are very helpful in visualizing geographical data. In order to create",source:"@site/docs/matplotlib/geo-plot.md",sourceDirName:"matplotlib",slug:"/matplotlib/geo-plot",permalink:"/python-tutorial/matplotlib/geo-plot",draft:!1,editUrl:"https://github.com/pranabdas/python-tutorial/blob/main/docs/matplotlib/geo-plot.md",tags:[],version:"current",frontMatter:{title:"Geographical plots using geopandas and bokeh",sidebar_label:"Geo-plots"},sidebar:"docs",previous:{title:"3D volume plots",permalink:"/python-tutorial/matplotlib/3d-vol"},next:{title:"Customizing matplotlib",permalink:"/python-tutorial/matplotlib/mpl-customizations"}},s={},u=[],f={toc:u};function d(e){var t=e.components,i=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,o.Z)({},f,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Geo-maps are very helpful in visualizing geographical data. In order to create\ngeo-maps, we need the shape files. You can download such shape files ",(0,a.kt)("a",{parentName:"p",href:"https://www.naturalearthdata.com/downloads/"},"here"),". We will be plotting life\nexpectancy data over our map from WHO record. You can find such datasets from\n",(0,a.kt)("a",{parentName:"p",href:"https://www.kaggle.com"},"Kaggle"),". You can also find a copy of the CSV file that\nwe will be using ",(0,a.kt)("a",{parentName:"p",href:"https://pranabdas.github.io/drive/downloads/datasets/Life-Expectancy-Data.csv"},"here"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"showLineNumbers",showLineNumbers:!0},"import pandas as pd\nimport geopandas as gpd\nimport json\nfrom bokeh.io import output_notebook, show, output_file\nfrom bokeh.plotting import figure\nfrom bokeh.models import GeoJSONDataSource, LinearColorMapper, ColorBar\nfrom bokeh.palettes import brewer\n\n# Load the shapefile, we are only loading necessary columns\ngdf = gpd.read_file(\"/Users/Pranab/Desktop/map-data/\\\nne_110m_admin_0_countries.shp\")[['ADMIN', 'geometry']]\n\n# rename the columns\ngdf.columns = ['Country', 'geometry']\n\n# load life expectancy data\nlife_expectancy = pd.read_csv(\"~/Desktop/Life-Expectancy-Data.csv\")\n\n# choose only life expectancy data\nlife_expectancy = life_expectancy[['Country', 'Year', 'Life expectancy ']]\n\n# choose only data for 2015\nlife_expectancy = life_expectancy.loc[life_expectancy['Year'] == 2015]\n\n# Merge dataframes gdf and life_expectancy\nmerged = gdf.merge(life_expectancy, left_on = 'Country', right_on = 'Country')\n\n# Read data to json\nmerged_json = json.loads(merged.to_json())\n\n# Convert to String like object\njson_data = json.dumps(merged_json)\n\n# Input GeoJSON source that contains features for plotting\ngeosource = GeoJSONDataSource(geojson = json_data)\n\n# Define a sequential multi-hue color palette\npalette = brewer['YlGnBu'][8]\n\n# Reverse color order\npalette = palette[::-1]\n\n# Instantiate LinearColorMapper that linearly maps numbers in a range\ncolor_mapper = LinearColorMapper(palette = palette, low = 50, high = 90)\n\n# Define custom tick labels for color bar\ntick_labels = {'50': '50', '55': '55', '60':'60', '65':'65', \\\n               '70':'70', '75':'75', '80':'80','85':'85', '90': '90'}\n\n# Create color bar\ncolor_bar = ColorBar(color_mapper = color_mapper, label_standoff = 8,\\\n                     width = 500, height = 20,\nborder_line_color=None,location = (0,0), orientation = 'horizontal', \\\n                     major_label_overrides = tick_labels)\n\n# Create figure object\np = figure(title = 'Life expectancy, 2015', plot_height = 450 , \\\n           plot_width = 750, toolbar_location = None)\np.xgrid.grid_line_color = None\np.ygrid.grid_line_color = None\n\n# Add patch renderer to figure\np.patches('xs','ys', source = geosource,fill_color = {'field' :\\\n          'Life expectancy ', 'transform' : color_mapper},\\\n          line_color = 'black', line_width = 0.25, fill_alpha = 1)\n\n# Specify figure layout\np.add_layout(color_bar, 'below')\np.axis.visible = False\n\n# Display figure inline in Jupyter Notebook\noutput_notebook()\nshow(p)\n")),(0,a.kt)("picture",null,(0,a.kt)("source",{type:"image/webp",srcSet:n(1968).Z}),(0,a.kt)("img",{src:n(3470).Z,alt:"geo-plot"})))}d.isMDXComponent=!0},3470:function(e,t,n){t.Z=n.p+"assets/images/geo-plot-77f696660cd2ffe10360545c6628ed2f.png"},1968:function(e,t,n){t.Z=n.p+"assets/images/geo-plot-8943f43922e436a2e0f98720e179a5c9.webp"}}]);