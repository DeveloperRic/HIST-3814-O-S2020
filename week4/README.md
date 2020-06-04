# DIGH 3814 Week 3 Journal

## Contents

I've decided to include content links starting this week because of how long my notes/journals get. _(It definitely looks long in my editor.)_

1. [new stuff](#new-stuff)
2. [hiccups](#hiccups)
3. [readings](#readings)

## New Stuff

[_back to top_](#contents)

### Corpus

I noticed this word in the instructions for R and realised that I had seen it before but I didn't really know what it meant. For my own reference, corpus is a language resource consisting of a large and structured set of texts.

### Voyant

This definitely is a gateway drug. I don't fully understand it yet but so far, in my interactions with it, it seems like a very powerful and useful tool.

Building my own corpus and visualising it was quite the fun experience. Defintiely, using regex to parse the newspapers was no fun! But I was really happy with my results.

[See the corpus here](https://voyant-tools.org/?stopList=keywords-9cb7e778459466c2b861744ac319e662&panels=cirrus%2Cwordtree%2Ctrends%2Csummary%2Ccontexts&corpus=0df63c2d9e164dca9a1ca1475d7103a1)

![corpus word cloud](chronicling_america_nigeria/wordcloud.png)

<!--	Exported from Voyant Tools (voyant-tools.org).
The iframe src attribute below uses a relative protocol to better function with both
http and https sites, but if you're embedding this into a local web page (file protocol)
you should add an explicit protocol (https if you're using voyant-tools.org, otherwise
it depends on this server.
Feel free to change the height and width values or other styling below: -->
<iframe style='width: 424px; height: 262px;' src='https://voyant-tools.org/tool/Trends/?stopList=keywords-9cb7e778459466c2b861744ac319e662&query=amp&query=library&query=rsquo&query=american&query=https&mode=document&corpus=0df63c2d9e164dca9a1ca1475d7103a1'></iframe>

### AntConc

_For some reason, AntConc served a very refreshing look with its UI (even though it was pretty blurry). I guess it was just nice to see an interface that actually does what it needs to do **properly**_

Anyway, working with AntConc was insightful. Despite the fact that I had to suffer through 100% CPU usage (I know!). When I searched for `the`, I didn't really understand what I was looking at but the tutorial suggested searching for `wom?n` and `m?n` and I noticed the usefulness of sorting. To avoid articles I sorted further away from the noun and I got richer data.

When working with the collocate tool, the author expected to see 'beautiful' or 'pregnant' or 'sophisticated' as collocates for `wom[ae]n` but it was very different for me (possibly because of different data), I got 'old', 'poor' and 'young' as the top 3 non-article collocates. For men, it was 'young', 'poor' and 'good'.

### Digital Simulcra

Probably properly spelt 'digital simulacra'. Based on my [quick search](https://en.wikipedia.org/wiki/Simulacrum), it's a digital representation or imitation of a person or thing.

## Hiccups

[_back to top_](#contents)

### Voyant input error

_a short form of this is also [in my notes](notes.md#voyant-input-error)_

Voyant failed to load the content from the url that was provided to us ([https://craftingdh.netlify.app/data/cnd.xlsx](https://craftingdh.netlify.app/data/cnd.xlsx)).

I searched up the problem in Discord and someone else had the same problem as me. I tried the solution that worked for them -- using [https://voyant-tools.org/?corpus=1b1176715ac6efbcc762f127d7ff37d2](https://voyant-tools.org/?corpus=1b1176715ac6efbcc762f127d7ff37d2) instead of the provided url. That link didn't work either, so I tried another solution (uploading the Excel sheet, not depending on Voyant to download the file), and that worked! Thank God for community forums! Definitely a good idea Dr. Graham, especially since I like working through things myself, unlike a classroom or email, we can all just collaborate without the stress. I'll definitely be posting more!

### AntConc-Anaconda

I was really struggling to use AntConc, and also TopicModelTool because anaconda decided to take a whopping **10+ GBs** of space on my computer. I had no choice but to uninstall as many anaconda tools as I could. The tools I uninstalled were:

- CMD.exe prompt
- JupyterLab
- Jupyter Notebook
- Powershell prompt

### Topic Modeling

- Missing `tm` package.

  - installed the package 😁

- LDA function not found
  - installed `topicmodels` package 😉

## Readings

### Confabulation in the humanities

[_back to top_](#contents)

- Hidsight 20/20.

- I think this is a very good way of illustrating how we like to inject meaning to things that don't have any, or that mean something completely different

- I also think this literary experiment is in fact actually touching on _confirmation bias_

- When you have such a complex world, I assume it would be very easy to real history with perceived history (I just invented that)
  - Perhaps because our mental models are formed largely based on our own experiences, it is difficult to conceptualise the reality of an historical event.
