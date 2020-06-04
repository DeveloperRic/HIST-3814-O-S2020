install.packages("RCurl")
library("RCurl")

x <- getURL("https://raw.githubusercontent.com/shawngraham/exercise/gh-pages/CND.csv", .opts = list(ssl.verifypeer = FALSE))

documents <- read.csv(text = x, col.names=c("Article_ID", "Newspaper Title", "Newspaper City", "Newspaper Province", "Newspaper Country", "Year", "Month", "Day", "Article Type", "Text", "Keywords"), colClasses=rep("character", 3), sep=",", quote="")

counts <- table(documents$Newspaper.City)
counts

barplot(counts, main="Cities", xlab="Number of Articles")

years <- table(documents$Year)
barplot(years, main="Publication Year", xlab="Year", ylab="Number of Articles")

clean_csv <- read.csv('colonial_newspapers_cleaned.csv')
counts <- table(clean_csv$Newspaper.City)
counts

barplot(counts, main="Cities", xlab="Number of Articles")

years <- table(clean_csv$Year)
barplot(years, main="Publication Year", xlab="Year", ylab="Number of Articles")
