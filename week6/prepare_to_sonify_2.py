import re
from parse_entries import get_entries

def get_topics():
  # read the MALLET topic list
  with open('topic_modelling/output/output_html/all_topics.html', 'r') as file:
    page = '\n'.join(file.readlines())
  # use REGEX to match the topics
  topics = [topic[topic.index('>') + 1:-3] for topic in re.findall(r'<a href=Topics/Topic[0-9].html>[a-z0-9 ]+</a', page)]
  # use REGEX to sanitize the topics into processable REGEX patterns
  regex_topics = [')|('.join(re.sub(r'\s?(\S+)', r'(\1)', re.sub(r'^\s+|\s+$', '', topic)).split(')(')) for topic in topics]
  # return the list of topics
  return (topics, regex_topics)

def get_lines():
  # use the parser I wrote before to get entries
  entries = get_entries()
  # convert those paragraphs into lines using list comprehension
  # it's a little complicated, I know but it bassically flattens
  # all the paragraphs in all the entries to a long list of lines
  lines = [line for entry in entries for paragraph in entry['paragraphs'] for line in paragraph if line]
  return lines

def main():
  # get n topics
  print("Getting topics...")
  (topics, regex_topics) = get_topics()
  # get lines
  print("Getting lines...")
  lines = get_lines()
  # construct the table, with n columns
  table = [[] for i in range(len(regex_topics))]
  # fill the table line-by-line
  print("Building table...")
  for line in lines:
    for i in range(len(regex_topics)):
      matches = re.findall(regex_topics[i], line)
      if matches:
        table[i].append(len([m for m in matches if m]))
      else:
        table[i].append(0)
  print("Converting table to csv...")
  height = len(table[0])
  with open('sonification/input.csv', 'w') as file:
    file.write(f"line_number,{','.join(topics)}\n")
    for i in range(height):
      row = '\n'.join([','.join([str(column[i]) for column in table])])
      if i == height - 1:
        file.write(f"{i},{row}")
      else:
        file.write(f"{i},{row}\n")
  print("Done")

if __name__ == '__main__':
  main()