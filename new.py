from datetime import date
from slugify import slugify

abstract = input("abstract = ")
title = input("title = ")
today = date.today()

filepath = f"_posts/{today.strftime('%Y-%m-%m')}-{slugify(title)}"

with open(filepath, "w+") as file:
    file.write(
        f"""
---
layout: post
title: {title}
categories: !TODO
abstract: {abstract}
author: Henry Blanchette
table_of_contents: false
---
""".strip()
    )
