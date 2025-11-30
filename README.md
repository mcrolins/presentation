1. Project Title: Superstore Sales Performance Analysis
Overview

This project analyzes sales data from the Superstore Sales Dataset to identify top-performing products, seasonal patterns, and buyer behavior.
The goal is to support business decisions on product promotion, inventory planning, and sales optimization.

2. Objectives
Sales Performance and Trend Analysis

Goal: Determine which products drive the highest revenue and identify key seasonal patterns.

Data Process Focus:

Cleaning dataset

Handling missing values

Parsing dates

Standardizing categories

Key Business Questions:

Which products should be promoted?

When are sales typically highest or lowest?

Dataset: Kaggle – Superstore Sales Data

3. Data Preparation

Steps you performed (write these as bullet points to show your workflow):

Checked for missing values

Converted Order Date & Ship Date into datetime format

Extracted month and weekday for trend analysis

Standardized column names

Verified data types

Ensured there were no duplicates

This section shows you understand the data cleaning process — a must in portfolios.

4. Key Findings
📌 A. Top 10 Products by Sales

(Write this as a table or bullet list.)

Canon imageCLASS 2200 Advanced Copier — $61,599.82

Fellowes PB500 Electric Punch Binding Machine — $27,453.38

Cisco TelePresence System EX90 — $22,638.48

HON 5400 Series Task Chairs — $21,870.58

GBC DocuBind TL300 Binding System — $19,823.48

GBC Ibimaster 500 Manual ProClick — $19,024.50

HP LaserJet 3310 Copier — $18,839.69

HP DesignJet T520 Large Format Printer — $18,374.90

GBC DocuBind P400 Electric Binding System — $17,965.07

High-Speed Automatic Electric Letter Opener — $17,030.31

Interpretation

These products can be prioritized for:

Promotions

High-margin campaigns

Stocking strategies

📅 B. Sales by Month (Seasonality)
Month	Sales (USD)
Jan	91,982
Feb	59,371
Mar	197,573
Apr	134,988
May	154,086
Jun	145,837
Jul	145,535
Aug	157,315
Sep	300,103
Oct	199,496
Nov	345,041
Dec	321,275
Interpretation

Peak sales: September–December, with November being the highest.

Lowest sales: February.

Likely driven by holiday season, corporate spending cycles, and end-of-year budgets.

📆 C. Sales by Weekday
Weekday	Sales
Monday	346,404
Tuesday	416,131
Wednesday	315,683
Thursday	141,544
Friday	234,073
Saturday	420,901
Sunday	377,868
Interpretation

Highest sales days: Saturday, Tuesday, Sunday

Lowest: Thursday

Weekend sales spikes suggest consumer-focused shopping behavior.

5. Insights & Recommendations
📌 Product Strategy

Promote high-value machinery like Canon Copiers and GBC machines.

Maintain inventory for top 10 products especially during August–December.

📌 Seasonal Strategy

Increase campaigns between September–December.

Offer discounts during slow months (Feb–Apr).

📌 Weekday Strategy

Target weekend customers with:

Flash deals

Email promos

Free shipping weekends

6. Tools Used

Python (Pandas, NumPy, Matplotlib)

Jupyter Notebook / VS Code

Excel (initial exploration)

7. Conclusion

This analysis provides actionable insights into product performance, seasonal sales patterns, and customer purchase behavior.
It can support business decisions related to marketing, inventory planning, and revenue optimization.
