# Uses python3
# make sure your working directory is that of week6

import os
import re

def get_entries():
  in_directory = 'diary-entries'
  entries = []
  for file_name in [os.sep.join([in_directory, n]) for n in os.listdir(in_directory) if re.match(r'^[0-9]+\.txt$', n) != None]:
    print(f'Processing {file_name}')
    with open(file_name, 'r', encoding="utf-8") as file:
      entry = {
        'file_name': os.path.basename(file_name),
        'paragraphs': []
      }
      paragraph = []
      for line in file:
        # trim line
        line = re.sub(r'(^\s+)|(\s+$)', '', line)
        # detect a new paragraph
        if not line or line == '\n':
          # add the paragraph if it is populated
          if paragraph:
            entry['paragraphs'].append(paragraph)
            paragraph = []
          # skip the empty line
          continue
        # sanitize the non-empty line
        line = re.sub(r'\n', '', re.sub(r'\s+', ' ', line), 1)
        # add the date column if not yet there
        if 'date' not in entry:
          entry['date'] = line
          continue
        # append the line to the paragraph
        paragraph.append(line)
      # if the last paragraph hasn't been added, add it
      if paragraph:
        entry['paragraphs'].append(paragraph)
      # append the diary entry
      entries.append(entry)
  return entries

def main():
  directory = 'diary-entries'
  entries = get_entries()
  print('Writing to parsed-entires.tsv')
  with open(os.sep.join([directory, 'parsed-entries.tsv']), 'w') as file:
    for entry in entries:
      # destruct the nested list of paragraphs and lines
      # into a single string consiting of tab-separated paragraphs
      # and space separated lines
      joined = '\t'.join([' '.join([line for line in paragraph if line]) for paragraph in entry['paragraphs']])
      # write the entry
      file.write(f"{entry['date']}\t{joined}\n")
  print('Done')

if __name__ == '__main__':
  main()