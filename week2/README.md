# DIGH 3814 notes

## Week 2

### New Stuff

#### Topic Modelling

A method of computational linguistics that aims to create clusters of words that often appear together in a text.

#### MARTHA BALLARD’S DIARY

An old-english diary belonging to Martha Ballard who was a midwife. The diary covers entrie over 27 years!

#### ALTO XML

A format used to describe the positioning of words on a page.

#### _other stuff_

- I'm getting pretty good at Markdown! Such a useful and easy language.

#### Transcription

I've usually only heard this term being used to describe converting video/audio to text but now I see it used to describe converting hand-written text into digital text.

### Hiccups

1. Turns out, Zotero doesn't work if you open a PDF while you have hypothes.is enabled. The hypothesis extension switches the regular PDF file into a custom HTML page so that it can overlay the annotations bar. The page it generates lives in the hypothes.is extension file domain so zotero is unable to access it.

    - How to fix: disable hypothes.is and open the PDF. Save it to zotero, then reenable hypothes.is

    ![URL of the hypothes.is file on my browser](hypothesis-annotations.png)

2. Annotations don't work when hypothes.is is enabled on a PDF file (wow so many bugs with hypothes.is). The url of the html page that is generated includes a random ID that identifes the extension in Chrome. The ID isn't global and so, you won't be able to see annotations on the page.

    - Yet to figure out how to fix this

3. Using wget was buggy for me. I ran `wget http://activehistory.ca/papers/` and got a debug log saying it had downloaded a file (or some files) but when I ran `ls` or looked in the file explorer, I saw nothing.

    - I went to [http://activehistory.ca/papers/](http://activehistory.ca/papers/) in my broser and saw that it was actually just a webpage

    - So I added `-OutFile website.html` and it worked! I could then view the page in my browser. (I knew it was html due to the `<!DOCTYPE html>` at the start of the file.)

      ![wget hiccup](wget-hiccup.png)

    - One thing I noticed that I think poses a problem for archiving is that despite me downloading the webpage, my browser still had to fetch a lot of resources, for example the css file had to be fetched

      ```plaintext
      Request URL: http://activehistory.ca/wp-content/themes/rubbersoul-pro/style.css?ver=2.6.4
      Request Method: GET
      ```

    - _This loosley relates to an article I read recently on how [Microsoft said they were wrong about open-source](https://www.theverge.com/2020/5/18/21262103/microsoft-open-source-linux-history-wrong-statement). In the past, the company had been famous for strongly opposing open-source (which might explain why wget is a little harder to user on my Windows laptop)._

4. The second wget command didn't work because of a type error with `-w 1` where Windows was expecting a WebRequestSession for some reason. So I put it up to Windows and it's lack of compatability with linux-ey commands and spun up git-bash (basically bash w/ git features). This time both wget commands worked!

5. I couldn't get data to show up in `output.txt` after running my R script. Turns out the file just didn't show text when viewed in RStudio but if I viewed the file in Notepad, I could see the output.

    - I tried reopening the file but that didn't do anything

    - I added a print line to the script and things were printing just fine

    - This is a bug I'm yet to understand but I'll keep researching and will probably fallback to the Discord community if I can't figure it out

### Readings

#### TOPIC MODELING MARTHA BALLARD’S DIARY

- I didn't really get much from this piece. Much of what was talked about wasn't too different from what I already knew. As a Computer Science major, topics like machine learning and statistics are talked about relatively freqeuently.

- What I did like though, was the process by which the author sought out data. It seemed that they were focused on retrieving trends concerning some specific topics, rather than attempting to obtain the general themes of MARTHA BALLARD’S DIARY.

  - I can't help but see this as a manifestation of key differences between human analysis and general computational analysis. Where a human would attempt to use heuristics to analyse the semantics of a piece of text, a computer would simply oberveve it's syntax and look for patterns.

  - I feel like, in machine learning, this is a slow way to understand things but I also beleive it might be a more robust method because once several processes are complete, you'll have a wealth of knowledge to draw upon.

  - It was good to see this at work, when the author stated that "one would think the household responsibilities for an aging grandmother with a large family would decrease over time", it really examplified how an algorithm may actually see things clearer than we do.

- It's pretty cool but also weird to see what written English looked like in the 18th and early 19th centuries.

#### Data is Capta

- I don't understand the point of this article. And that is not to say that it is stupid, I just feel that the author is arguing something distinct from what the title implies.

- To me it seems that the author is focused on highlighting that many uses of the term `data` are incorrectly using it. IT seems that the author is simply trying to remind us that '`data`' (or as they claim in this case is actually, `capta`) has qualitative attributes to it, it has meaning that is hidden behind the item itself.

  - To this I say that the piece is weak. I don't disagree with the author's statement about data as capta but I see data as instrinsicly having qualitative attributes to it. Our mind works by forming and using associations, hence, it is impossible for us to think about something in a purely quantitative way.
  
  - Perhaps I missed something in the article -- to be honest I didn't read the whole thing, it was very long.

#### #DayofDH2020

- Excited to see that the cloud is as pervasive as I imagined it to be

- The 'cloud' provides so much value as utility to pretty much every kind of professional and seeing it used by the National Library of Scotland really makes me want to utilise it more.

- [Minecraft](https://twitter.com/natlibscot/status/1255481161075372032) hehe

#### ‘Making such bargain’:TranscribeBenthamand the quality andcost-effectiveness of crowdsourcedtranscription

- Transcription seems like such a trivial task at first but then you realise us humans mess up on reading handwriting _all the time_, so how would a computer, the staple method for perfoming well-defined repetative tasks, be able to understand something as unpredictable as handwriting.

- I appreciate the strides we've taken with Machine Learning more now. Look at those volunteers who transcribed **over 1.6 million words in a year and 3 quaters**, what if we could make the task more straghtforward? What if we could define a small set of rules a network could follow, what would those rules be?

  - Maybe I should master in neural networks. This course is really revealing my true interests in technology. Thanks Dr. Graham!
