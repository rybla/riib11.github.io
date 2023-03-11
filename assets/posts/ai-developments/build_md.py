import csv

# Data

ai = {}
with open("ai.csv") as csvfile:
  csvreader = csv.DictReader(csvfile, delimiter=',', quotechar='"')
  for row in csvreader:
    ai[row["Name"]] = row

company = {}
with open("company.csv") as csvfile:
  csvreader = csv.DictReader(csvfile, delimiter=',', quotechar='"')
  for row in csvreader:
    company[row["Name"]] = row

person = {}
with open("person.csv") as csvfile:
  csvreader = csv.DictReader(csvfile, delimiter=',', quotechar='"')
  for row in csvreader:
    person[row["Name"]] = row

# Markdown 

def mdLinkSection(sec):
  link = f'#{sec.replace(" ", "-")}'
  return f'[{sec}]({link})'

def mdLinkSections(secs):
  secs = secs.strip()
  if len(secs) == 0: return ""
  secs = secs.split(",")
  links = []
  for sec in secs:
    sec = sec.strip()
    links.append(mdLinkSection(sec))
  return ", ".join(links)

def mdLink(label, url):
  link = f'[{label}]({url})'
  return link

def mdLinkUrl(url):
  link = f'[{url}]({url})'
  return link

def mdLinkUrls(urls):
  urls = urls.strip()
  if len(urls) == 0: return ""
  urls = urls.split(",")
  links = []
  for url in urls:
    url = url.strip()
    links.append(mdLinkUrl(url))
  return ", ".join(links)


def mdVert(bodies):
  s = ""
  for body in bodies:
    s += f'{body}\n'
  return s

def mdSection(title, body):
  s = ""
  
  s += f'# {title}\n'
  
  s += "\n"

  s += body

  return s

# makes a table from a dictionary of dictionaries
def mdTable(d, key, keys_include):
  s = ""  

  ls = sorted(list(d.values()), key = key)

  s += "|"
  for key in keys_include:
    s += f' {key} |'

  s += "\n"

  s += "|"
  for key in keys_include:
    s += f' --- |'

  s += "\n"

  for d in ls:
    s += "|"
    for key in keys_include:
      val = None
      if key in d:
        val = d[key]
      if val is None:
        s += " |"
      else:
        val = val.strip()
        if key in ['Name', 'Category', 'Developer', 'Founders', 'AI Technologies']:
          val = mdLinkSections(val)
        elif key in ['Paper', 'Website']:
          val = mdLinkUrls(val)
        s += f' {val} |'

    s += "\n"

  return s

# Main

print(
  mdVert([
    mdSection(
      "AI Technologies Timeline",
      mdTable(
        ai, 
        key = lambda d: d["Announcement Date"],
        keys_include = ["Announcement Date", "Name", "Developer", "Category", "Links"]
      ),
    ),
    mdSection(
      "Companies",
      mdTable(
        company, 
        lambda d: d["Founding Year"],
        ["Name", "Founding Year", "Founders", "Owner", "Company Type", "AI Technologies"]
      )
    )
    # ,
    # mdSection(
    #   "People",
    #   mdTable(
    #     person,
    #     keys_include = ["Name", "Company", "AI Technologies", ],
    #     key = lambda d: d["Name"]
    #   )
    # )
  ])
)
