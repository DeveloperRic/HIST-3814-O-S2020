import re

def get_links():
  topics = []
  for i in range(7):
    with open(f'topic_modelling/output/output_html/Topics/Topic{i}.html', 'r') as file:
      page = '\n'.join(file.readlines())
      topic = re.findall(r'<u>TOPIC</u> \: [a-z0-9 ]+\.\.\.', page)
      topic = re.sub(r'^\s+|\s+$', '', topic[0][15:-3])
      links = [l[l.index('>') + 1:] for l in re.findall(r'<a href=\.\./Docs/Doc[0-9]+.html >[0-9]+.txt', page)]
      topics.append({
        'number': i,
        'topic': topic,
        'links': links
      })
  return topics

def inflate_links(topics):
  for topic in topics:
    for i in range(len(topic['links'])):
      link = topic['links'][i]
      with open(f"topic_modelling/input/{link}", 'r') as file:
        topic['links'][i] = {
          'file': link,
          'data': ' '.join(file.readlines()[2:])
        }
  return topics

def flatten_data(selection, topics):
  columns = []
  max_length =  -1
  for topic_number in selection:
    links = []
    for topic_links in [topic['links'] for topic in topics if topic['number'] == topic_number]:
      links.extend([link for link in topic_links])
    column = [link['data'] for link in links]
    if len(column) > max_length:
      max_length = len(column)
    columns.append(column)
  return (columns, max_length)


def main():
  selection = [1, 3]
  (columns, max_length) = flatten_data(selection, inflate_links(get_links()))
  with open('sonification/input.tsv', 'w') as file:
    rows = []
    for i in range(max_length):
      row = []
      for j in range(len(columns)):
        if i > len(columns[j]):
          row.append("")
        else:
          row.append(columns[j][i])
      rows.append('\t'.join(row))
    file.write('\n'.join(rows))

if __name__ == '__main__':
  main()