# DIGH 3814 Week 3 Notes

## Contents

1. [progress info](#progress-info)
2. [command line entries](#commands)
3. [error messages and debugging](#errors)
4. [urls of downloaded files](#downloads)

## Progress Info

[_back to top_](#contents)

### Done:

- Download Texas correspondence
- Delete everything that isn’t the table of letters. The table..

    | starts with |  and ends with |
    |-------------|----------------|
    |Sam Houston to J. Pinckney Henderson, December 31, 1836 51|Wm. Henry Daingerfield to Ebenezer Allen, February 2, 1846 1582|
- Parse `texas.txt`
- Cluster `correspondence.csv` with Open Refine
- Visualise with ~~Connect the dots~~ Palladio

## Commands

[_back to top_](#contents)

### Install curl on Windows using Anaconda PowerShell

`conda install -c anaconda curl`

### Download the correspondence of the Republic of Texas, and independent state from 1835 to 1846

`curl http://archive.org/stream/diplomaticcorre33statgoog/diplomaticcorre33statgoog_djvu.txt > texas.txt`

The file will be downloaded to `./texas.txt`

#### Regex commands

##### Remove unnecesary heading and tailing lines

In `texas.txt`:

|       |              |
|-------|--------------|
| Find _**(.*)**_: |`(.*)(Sam Houston to J. Pinckney Henderson, December 31, 1836 51)`|
| Replace: | `\2` |
| Find: | `(Wm. Henry Daingerfield to Ebenezer Allen, February 2, 1846 1582)(.*)`|
| Replace: | `\1`

##### Identify any lines that indicate correspondence

|       |              |
|-------|--------------|
| Find _**(.*)**_: | `(.+\<to\>)` |
| Replace: | `~\1` |

##### delete the lines that do not begin with a tilde

|       |              |
|-------|--------------|
| Find _**(.*)**_: | `\n[^~]+` |
| Replace: | `\n` |

##### remove comma before year

|       |              |
|-------|--------------|
| Find _**(.*)**_: | `(,)( [0-9]{4})(.+)` |
| Replace: | `\2` |

##### remove tildas

|       |              |
|-------|--------------|
| Find _**(.*)**_: | `(~)(.+)` |
| Replace: | `\2` |

##### separate the Sender and Receiver

|       |              |
|-------|--------------|
| Find _**(.*)**_: | `(\b to \b)` |
| Replace: | `,` |

##### remove multiple commas

|       |              |
|-------|--------------|
| Find _**(.*)**_: | `.+,.+,.+,` |

I replaced any list representations (i.e. `a, b, and c` with ellipses `a... b... c` or `a... b... and c`)

### Open Refine Actions

1. Open project from `correspondence.csv`
2. For columns `sender` and `receipient` do `Facet -> Text Facet`, in each new Facet do `Cluster`
    - Check groups to be merged and do `Merge Selected & Re-Cluster`
    - Close
    - Do `Edit Cells -> Common transforms -> Trim leading and trailing whitespace` 

## Errors

[_back to top_](#contents)

### Ran out of stack space trying to match the regular expression

I tried using regex to clear heading and trailing lines. No luck.

### Mistake in Texas correspondence?

On line 505 in my `texas.txt` the line reads: `~David G. Burnet to Jamee Hamilton, August 19,1839 873`. You can see that there is no space between `August 19` and `, 1839`. This has to be a mistake since it is the only line with a format like this. I went ahead and added the missing space.

### Gephi loading

Several SEVERE errors of the form `[Record #n] Missing target id at index i`. The data still loaded up after displaying the errors.

## Downloads

[_back to top_](#contents)

### Files

- From [http://hdlab.stanford.edu/palladio-app/#/visualization](http://hdlab.stanford.edu/palladio-app/#/visualization) :

  - Data export.palladio.1.2.9.json
  - PalladioGraph.svg from

- From [http://archive.org/stream/diplomaticcorre33statgoog/diplomaticcorre33statgoog_djvu.txt](http://archive.org/stream/diplomaticcorre33statgoog/diplomaticcorre33statgoog_djvu.txt):

  - texas.txt

### Applications

- OpenRefine from [http://openrefine.org/download.html](http://openrefine.org/download.html)

- Gephi from [http://gephi.org/](http://gephi.org/)
