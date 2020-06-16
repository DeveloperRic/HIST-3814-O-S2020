# Uses python3
# make sure your working directory is that of week6

import os
import re
from parse_entries import get_entries

def main():
  out_directory = os.sep.join(['topic_modelling', 'input'])
  # get entries
  entries = get_entries()
  # ensure the output directory exists
  os.makedirs(out_directory, exist_ok=True)
  print(f'Writing sanitized entires to {out_directory}')
  for entry in entries:
    with open(os.sep.join([out_directory, entry['file_name']]), 'w') as file:
        # destruct the nested list of paragraphs and lines
        # into a single string consiting of pretty-printed paragraphs
        entry_body = '\n\n'.join([' '.join([line for line in paragraph if line]) for paragraph in entry['paragraphs']])
        # write the entry
        file.write(f"{entry['date']}\n\n{entry_body}")
  print('Done')

if __name__ == '__main__':
  main()