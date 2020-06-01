# DIGH 3814 Week 3 Notes

## Contents

1. [progress info](#progress-info)
2. [command line entries](#commands)
3. [error messages and debugging](#errors)
4. [urls of downloaded files](#downloads)

## Progress Info

[_back to top_](#contents)

### Done:

- Graph population of children aged 1-4 with Excel
- Graph colonial newspapers articles & cities with R
- Load corpus into Voyant. `corupus_id=5d8ae32e9dadfc942fada12806ec2031`
- Visualise data in Voyant
  - use stopwords
- Chronicling America

### Cleaning up colonial newspapers

1. Started a new project in OpenRefine and loaded in my [CND.csv](CND.csv) file.
2. Created a text facet on `Newspaper City`
3. Merged misspellings with `'Edinburgh'`
4. Export cleaned csv file to [colonial_newspapers_cleaned.csv](colonial_newspapers_cleaned.csv)
5. Re-ran graphs in R [_(see commands)_](#graphing-the-cleaned-csv)

### Newspaper corpus

Things I'd like to find out about the data:

- What was the motivation to reprint articles?
- Who/what was involved in reprinting?
- Where did reprinted articles go?

#### Interesting stuff

<!--	Exported from Voyant Tools (voyant-tools.org).
The iframe src attribute below uses a relative protocol to better function with both
http and https sites, but if you're embedding this into a local web page (file protocol)
you should add an explicit protocol (https if you're using voyant-tools.org, otherwise
it depends on this server.
Feel free to change the height and width values or other styling below: -->
<iframe style='width: 424px; height: 291px;' src='https://voyant-tools.org/tool/DreamScape/?corpus=5d8ae32e9dadfc942fada12806ec2031'></iframe>

<!--	Exported from Voyant Tools (voyant-tools.org).
The iframe src attribute below uses a relative protocol to better function with both
http and https sites, but if you're embedding this into a local web page (file protocol)
you should add an explicit protocol (https if you're using voyant-tools.org, otherwise
it depends on this server.
Feel free to change the height and width values or other styling below: -->
<iframe style='width: 424px; height: 291px;' src='https://voyant-tools.org/tool/CorpusTerms/?corpus=5d8ae32e9dadfc942fada12806ec2031'></iframe>

In this one, I seached for relationships between 'government' and 'bad' too see what kind of negative thoughts people had surrounding policing of reprinting:

<!--	Exported from Voyant Tools (voyant-tools.org).
The iframe src attribute below uses a relative protocol to better function with both
http and https sites, but if you're embedding this into a local web page (file protocol)
you should add an explicit protocol (https if you're using voyant-tools.org, otherwise
it depends on this server.
Feel free to change the height and width values or other styling below: -->
<iframe style='width: 422px; height: 291px;' src='https://voyant-tools.org/tool/CollocatesGraph/?query=new&query=country&query=mr&mode=corpus&corpus=5d8ae32e9dadfc942fada12806ec2031'></iframe>

## Commands

[_back to top_](#contents)

### Excel commands

Get the sum of all female children 1-4yrs: in `R15500`, enter `=SUM(P15500:P15503)`

### R script commands

- `getURL`: performs a `GET` request at the specified url. This was used to download the colonial newspapers database.

- `read.csv`: parses a comma-separated string of lines into an R table

- `counts <- table`: used immediately before `counts` to count the number of occurences of each item in a table's field

- `barplot`: constructs a bar graph from the specified data

#### Graphing the cleaned csv

```R
# load in the csv file
clean_csv <- read.csv('colonial_newspapers_cleaned.csv')

# count the cities
counts <- table(clean_csv$Newspaper.City)
counts

# plot the cities
barplot(counts, main="Cities", xlab="Number of Articles")

# plot the articles' years
years <- table(clean_csv$Year)
barplot(years, main="Publication Year", xlab="Year", ylab="Number of Articles")
```

### Chronicling America

1. Seached for newspapers with the keyword `Nigeria` to see when the country was mentioned in the news

    - [Link to search for 1st 500 results](https://chroniclingamerica.loc.gov/search/pages/results/list/?date1=1789&rows=500&searchType=basic&state=&date2=1963&proxtext=Nigeria&y=13&x=20&dateFilterType=yearRange&page=1&sort=relevance). You have to save the results from that website as an XML

2. Cleanup XML file:

    |       |              |
    |-------|--------------|
    || _Clear leading and trailing whitespace_ |
    | Find _**(.*)**_: | `^\s*(.+)\s*$` |
    | Replace: | \1 |
    || _Remove `<item>` tags_ |
    | Find _**(.*)**_: | `(|</item>\n)<item>` |
    | Replace: |  |
    || _Remove tags_ |
    | Find _**(.*)**_: | `^<.*>(.*)</.*>$` |
    | Replace: | `\1,`_(space)_ |
    || _Bring description to newline_ |
    | Find _**(.*)**_: | `<description>\n` |
    | Replace: | `\n<description>` |
    || _Remove heading commas_ |
    | Find _**(.*)**_: | `<description>((, )+)(.*)</description>` |
    | Replace: | `<description>\3</description>` |
    || _Remove trailing commas_ |
    | Find _**(.*)**_: | `<description>(.*)((, )+)</description>` |
    | Replace: | `<description>\1</description>` |
    || _Remove \<hr/>'s_ |
    | Find _**(.*)**_: | `(,| |\.)*<hr />\n*(,| |\.)*` |
    | Replace: | _(space)_ |
    | Replace: | `<description>\1</description>` |
    || _Remove \<description> tags_ |
    | Find _**(.*)**_: | `, \n<description>(.*)</description>` |
    | Replace: | `, \1` |
    || _Remove closing tags_ |
    | Find _**(.*)**_: | `\n</.+>` |
    | Replace: |  |
    || _Remove closing tags_ |
    | Find _**(.*)**_: | `<description>((.|\n)*)</description>` |
    | Replace: | `\1` |

    - At this point, I realised I had been dumb and forgot to remove the extra commads within the file (or build a tab-separated file). So I quit parsing and moved onto visualisation

3. Pasted text into Voyant

4. Add `amp`, `rsquo` & `https` to stopwords

## Errors

[_back to top_](#contents)

### Voyant input error

Voyant failed to load the content from the url that was provided to us ([https://craftingdh.netlify.app/data/cnd.xlsx](https://craftingdh.netlify.app/data/cnd.xlsx)).

## Downloads

[_back to top_](#contents)

### Files

- Age (in Single Years) and Average Age (127) and Sex (3) for the Population of Canada, Provinces and Territories, Census Metropolitan Areas and Census Agglomerations, 2016 adn 2011 Censuses - 100% Data

  - [https://www12.statcan.gc.ca/census-recensement/2016/dp-pd/dt-td/CompDataDownload.cfm?LANG=E&PID=109523&OFT=CSV](https://www12.statcan.gc.ca/census-recensement/2016/dp-pd/dt-td/CompDataDownload.cfm?LANG=E&PID=109523&OFT=CSV)

- Colonial newspapers
  - [https://raw.githubusercontent.com/shawngraham/exercise/gh-pages/CND.csv](https://raw.githubusercontent.com/shawngraham/exercise/gh-pages/CND.csv)
