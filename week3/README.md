# DIGH 3814 Week 3 Journal

## Contents

I've decided to include content links starting this week because of how long my notes/journals get. _(It definitely looks long in my editor.)_

1. [new stuff](#new-stuff)
2. [hiccups](#hiccups)
3. [readings](#readings)

## New Stuff

[_back to top_](#contents)

### Digital [hH]istory

What on earth does this mean? I saw this term used describe both "soft" and "hard" digital history. Initially, I assumed the `hH` represented the softness of "soft" digital history but after seeing it immediately used to describe "hard" history, now, I'm not so sure. I searched in Google for: `"[hH]istory"`, `"\[hH\]istory"`, and `"soft" Digital "[hH]istory"` and got nothing.

### Regex group numbering

I had previously know about regular expressions and had even used it sometimes. But it never occured to me the use of numbering groups. Seeing the example you provided with `(dogs)( and )(cats)` as `\1\2\3`, I realised wait, you can really do a whole lot with regex. For example, fixing syntactical mistakes in huge files (I bet Grammarly does this at least to some extent).

### Markdown tables(!)

I just figured out you can use tables in markdown! What can this language not do? You just draw a table with `|s [pipes]` and `-s [hyphens]`!

| No way... | Is this... |
|-----------|------------|
| a table!               |

(They probably use regex groups for this too.)

### Bimodal Projection

The process of converting a bimodal network (or as I know it, a bipartite network) into a unimodal network.

![bimodal projection diagram](https://github.com/DeveloperRic/HIST-3814-O-S2020/blob/master/week3/bimodalprojection-1024x591.png)

## Hiccups

[_back to top_](#contents)

### Downloading the Texas correspondence

Anaconda PowerShell again refused to cooperate. The terminal showed that it performed and completed the web request and created the file for writing but nothing showed up in the file -- curl didn't actually write anything! I executed the command again, this time in Git Bash and curl worked flawlessley! I might have to forgo Anaconda PowerShell for this class.

### I wanted to be a bit ambitious and attempted to use regex to remove heading and trailing lines

Turns out, writing out huge blocks of text is harder than I thought. I'm yet to figure this out, doesn't help that I get a "Ran out of stack space trying to match the regular expression" error.

### ConnectTheDots server error

While trying to use the ConnectTheDots tool, I kept receiving 'Internal Server Error's from the website. I tried modifying my correspondence file to exactly have `source,target` on the first line and only contain 2 columns but to no luck.

![error snippet](https://github.com/DeveloperRic/HIST-3814-O-S2020/blob/master/week3/connectthedotserror.png)

But... lucky for me Paladio worked!

![palladio graph](https://github.com/DeveloperRic/HIST-3814-O-S2020/blob/master/week3/PalladioGraph.svg)

### Gephi PageRank

For steps 16 and 17:

16. Going back to the Overview pane, you can visualize this centrality by changing the size of each correspondent’s node based on its PageRank. Do this in the “Ranking” tab on the left side of the Overview pane.

17. Make sure “Nodes” is selected, press the icon of a little red diamond, and select PageRank from the drop-down menu.

I couldn't find the "icon of a little red diamond" that was mentioned. I was behind on the weeks because of my work and didn't have time to discuss the problem on Discord. Eventually, I figured out that, on my installation (which was the latest one), the icon was actually a set of conccentric black circles titled 'size'.

## Readings

[_back to top_](#contents)

### THE SOFT DIGITAL HISTORY THAT UNDERPINS MY BOOK

- The author mentions how he had an "instinct" to remove 'stationers' from his data so that he could observe patterns. Perhaps this shows that too much data can be just as unhelpful as too little data -- maybe even more.

### THE HARD DIGITAL HISTORY THAT UNDERPINS MY BOOK

- Similar to my reflection from the 'soft' history text, this reading again highlights the importance of presenting concise, selective data in visualisations.

- The author really recommends using Networks to quantitatively analyse literature or 'corpus'

- There is a resounding notion of tailoring digital history to the audience that will consume it. Which is an interesting thing to talk about because my knowledge of digital history is keeping records of and/or analysing the details of the past.

  - Perhaps, by trying to avoid having too much data, digital historians tend to use audience perspective as heuristics for deciding what to focus on and what to ignore.

### Networks Demystified 9: Bimodal Networks

- I feel like I'd seen the concept of unimodal networks in a Shopify overview of machine learning.
