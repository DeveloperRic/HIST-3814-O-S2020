# DIGH 3814 Week 6 Notes

## Contents

1. [progress info](#progress-info)
2. [command line entries](#commands)
3. [error messages and debugging](#errors)
4. [urls of downloaded files](#downloads)

## Progress Info

[_back to top_](#contents)

### Tools used:

- Week 3:
  - REGEX
  - Open Refine
- Week 4:
  - Voyant
  - Topic Models
- Week 5:
  - Sound _(sonification)_
    - I was feeling a bit creative so I added a voice intro, so it's a bit of a podcast/sonification mashup 😉
  - Static Websites

### Done:

- 1-by-1 copy and paste each diary entry into it's own text file. I could have written a script to do this with wget but that would have taken more time because each diary entry was centered within other elements on the HTML page.
- Manually ensure every diary entry has a date at the top
- Write Python script ([parse_entries.py](parse_entries.py)) to parse all entires into a single [`parsed-entires.tsv`](diary-entries/parsed-entries.tsv) file
- (Attempt 😅) to use OpenRefine on the data [[project tar]](virginia-woolf-diary.openrefine.tar.gz)
- Visualise and find trends with Voyant [[view project]](https://voyant-tools.org/?panels=collocatesgraph%2Creader%2Ctrends%2Cknots%2Ccontexts&corpus=26eb9c0774002fa1ad8725fabf31ae6d)
- Use the TopicModeling tool to learn about the topics in Virginia Woolf's diary [[results page]](topic_modelling/output/output_html/all_topics.html)
- Sonify Woolf's diary based on topics identified in the previous step [[audio file (min 6- is pretty interesting)]](sonification/audio.mp3)
- Publish this week's work to [GitHub pages](https://HIST-3814-O-S2020.github.io)

## Commands / Actions

[_back to top_](#contents)

### Regex patterns used in parsed-entries.tsv

_`&nbsp;` represents a space_

| Pattern&emsp;&emsp;&emsp;&emsp;&emsp; | Replacement | Explanation |
|---------|-------------|-------------|
| `'^[0-9]+\.txt$'` | | only match diary entry-files |
| `(^ +)|( +$)` | | trim line |
| `&nbsp;&nbsp;+` | `&nbsp;` | reduce any lengthy spaces to just one space |
| `\n\n*` | | reduce all multi-newlines to just one newline |

### OpenRefine operations

1. Define column headings as `'date', 'column 2', ...`
2. Apply `trim leading and trailing whitespace` as well as `collapse consecutive whitespace` transformations
3. Remove empty columns
4. Save project as [`virginia-woolf-diary.tsv`](diary-entries\virginia-woolf-diary.tsv)

### Voyant actions

1. Load [virginia-woolf-diary.tsv](diary-entries\virginia-woolf-diary.tsv) directly into Voyant
2. In 'Contexts' view, search for collocates of 'England'
3. In 'Trends' view, show `'wom*'` and `'men*|man` using 25 document segements

    !['(?wo)m[ae]n' trends](voyant/woman-man-trends.png)

### TopicModelling steps

1. Write Python script ([sanitize_entries.py](sanitize_entries.py)) to sanitize all diary entry text files and write them back into a different `'input'` directory
2. Set the TopicModelintTool input dir to `topic_modelling/input`
3. Set the TopicModelintTool output dir to `topic_modelling/output`
4. Set number of topics to 7 _**| >> learn topics**_

### Sonification tracks

Here is a list of the tracks used in TwoTone to sonify Virginia Woolf's diary (from heighest to lowest track). I modified each track to better express the emotion of the topics that they portray. Sadder topics have their track in a minor scale; topics relating to dynamics (movement) have their tracks played in faster tempos. All tempos are factors of 2 (to preserve the consistency of the audio).

![sonify tracks snippet](https://github.com/DeveloperRic/HIST-3814-O-S2020/tree/master/week6/snippets/sonify-tracks.png)

1. Recorded audio detailing the instrument of each following track and the topic that it represents
    - volume: 66%
    - filter: by line_number 0-191

2. Double bass - line_number
    - volume: 21%
    - C Major; 2 octaves; auto; 6x; ascending

3. glockenspiel - expressing emotions about country/location
    - volume: 81%
    - C Major; 2 octaves; auto; 1x

4. curch organ - life & economics
    - volume: 84%
    - C Major; 2 octaves; auto; 1x

5. marimba - writing
    - volume: 72%
    - C Major; 2 octaves; auto; 4x; ascending

6. piano - home, colour & femininity
    - volume: 80%
    - C Major; 2 octaves; auto; 2x; ascending

7. electric guitar - movement & masculinity
    - volume: 84%
    - C Major; 2 octaves; auto; 2x; descending

8. violin - darkness, work & creativity
    - volume: 80%
    - C Minor; 2 octaves; auto; 1x

9. trumpet - clothing & joy
    - volume: 84%
    - C Major; 2 octaves; auto; 4x; ascending

## Errors

[_back to top_](#contents)

### Sonification

The TwoTone app seems to be really buggy. If I change any track, I have to reload the page before I can actually listen to the audio again. Also, I tried exporting the audio twice and both audio files have no sound (but they have all the metadata and megabytes). I loaded the created audio file into Audacity and sure enough, there was nothing in the file.

![sonify muted file snippet](https://github.com/DeveloperRic/HIST-3814-O-S2020/tree/master/week6/snippets/sonify-mute.png)

## Downloads

[_back to top_](#contents)

### Data

- `(collection)` [Diaries of Virginia Woolf](http://woolfonline.com/?node=content/contextual/transcriptions&project=1&parent=41&taxa=42)
  - 17 October 1924 - 25 November 1929
