# DIGH 3814 Week 6 Journal

## Contents

1. [new stuff](#new-stuff)
2. [hiccups](#hiccups)
3. [readings](#readings)

## New Stuff

[_back to top_](#contents)

### Reflections from Voyant

#### England

It seems like Virgina Woolf was a very passionate Englishwoman. By investivating the conexts in which Woolf used the word 'England' and reading the surrounding diary entries, I could see that Woolf felt very invovled in the growth of England, so much so that she felt it was important for her to celebrate the voices of those who built the nation. Specifically, in a diary entry where Woolf described feeling sentimental, she mentions that she want's to "gather material for the Lives of the Obscure" -- a book written to recount the history of England through 'obscure' lives.

_contexts of 'England':_
<iframe style='width: 638px; height: 183px;' src='https://voyant-tools.org/tool/Contexts/?query=england*&context=10&corpus=26eb9c0774002fa1ad8725fabf31ae6d'></iframe>

#### Woman/Man

Taking a hint from [this exercise](https://programminghistorian.org/en/lessons/corpus-analysis-with-antconc) in week 4, I searched for the trend graph of `'wom*'` and `'men*|man` to see how Virginia Woolf's use of both words changed over time, and what came up was quite interesting. At 5 document segments, Woolf mentioned men significantly more than she did women and at 1 document segment she did the same but for women. This didn't mean much to me but I used that information as a heuristic for what to look for when topic modelling and using Antconc.

<iframe style='width: 424px; height: 291px;' src='https://voyant-tools.org/tool/Trends/?query=man*%7Cmen&query=wom*&bins=25&mode=document&corpus=26eb9c0774002fa1ad8725fabf31ae6d'></iframe>

### TopicModeling Tool

By running the TopicModeling tool, I discovered 7 general themes of Virginia Woolf's diary, which I named:

0. expressing emotions about country/location
1. life & economics
2. writing
3. home, colour & femininity
4. movement & masculinity
5. darkness, work & creativity
6. clothing & joy

The fact that 'writing' surfaced up as a topic proved my assumption that Woolf was a lover of books, particularly those about patriotism and class. It seems like a lot of what Woolf wrote in her diary expressed her highly emotive perspective on life which perhaps, was needed in the "Roaring Twenties", the age right after the first world war.

I plan to use the diary entries that heavily featured topics 1 and 3 as a possible measure for sonification.

### Sonification

I tried to really utilise my coding expertise as a Computer Science major in this weeks work. Hence, I made a Python script ([prepare_to_sonify.py](prepare_to_sonify.py)) to parse the output of the TopicModeling tool into a single tsv that I can use for sonification.

After listening to the track, I could see that Virginia Woolf wrote a lot about _clothing & joy_ in the earlier entires of her diary but not so much in the later ones. Woolf also seems to write a whole lot about _writing_, itself. Perhaps writing in her diary was more than just record keeping for her, it may have been an beloved hobby. However, when it comes to the instruments of the other topics, their notes are fleeting but consistent and loud. It could be possible that those other topics weren't discussed as frequently but more heavily than _clothing & joy_ and _writing_.

## Hiccups

[_back to top_](#contents)

### Downloading Orlando Data

As I was about to begin work on developing my corpus of work for this week. I encountered a paywall barring me from being able to access the data relating to the "understanding of literature, focusing particularly on the part women have played in its development".

With me already being behind schedule this issue threw a real monkey wrench into the gears of my workflow.

In response, I pivoted -- whilst still focusing on the same theme of feminism -- to the [diaraies of Viginia Woolf](http://woolfonline.com/?node=diary_overview). Woolf is accreddited as the main source of inspiration for [Orlando](http://orlando.cambridge.org/public/svDocumentation?formname=t&d_id=ABOUTTHEPROJECT) and as such I have chosen her diaries as the focus of my analysis. _(Talk about turning an L into a W)_

### OpenRefine

It was kind of funny trying to use OpenRefine for my data. Because each row was an entry and each entry was a diary log, the columns (exluding the date column) were all cluttered with arbitrary amounts of text.

![open refine loading](https://raw.githubusercontent.com/DeveloperRic/HIST-3814-O-S2020/master/week6/snippets/load-open-refine.PNG)

![open refine facet](https://raw.githubusercontent.com/DeveloperRic/HIST-3814-O-S2020/master/week6/snippets/open-refine-facet.PNG)

The columns proved to be too diverse for me to use OpenRefine on them and so I decided to just perform some basic operations on the entires -- trimming & colapsing whitespace and removing empty columns.

![open refine history](https://raw.githubusercontent.com/DeveloperRic/HIST-3814-O-S2020/master/week6/snippets/open-refine-history.PNG)

### Sonification

Writing the Python script [prepare_to_sonify.py](prepare_to_sonify.py) was difficult because I found it hard to visualise what sort of trend I actually wanted to surface through sonification.

Initially, my plan was to build 2 tracks corresponding to the diary entires of 2 different topics. But this was difficult because, I soon realised that by using words instead of numbers, I would be creating a qualitative description of my corpus, which wouldn't be so useful for sonification.

To fix this, I decided that I would build a number of tracks where each track corresponded to the lines when a topic was mentioned. The tsv table of data would be built with 7 columns;

- each column would belong to a topic
- each row would belong to a line
- each cell would contain the count of how many topic-words were used in that line.

The resulting script, I called [prepare_to_sonify_2.py](prepare_to_sonify_2.py)

## Readings

[_back to top_](#contents)


