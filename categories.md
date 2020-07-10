---
layout: page
title: Categories
permalink: /categories/
---

{% for category in site.categories %}
# #{{ category | first }}
<ul>
{% for post in category.last %}
<li><a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a></li>
{% endfor %}
</ul>
{% endfor %}
