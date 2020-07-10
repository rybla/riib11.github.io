---
layout: page
title: Categories
permalink: /categories/
---

{% assign categories_sorted = site.categories | sort %}
{% for category in categories_sorted %}
# #{{ category | first }}
<ul>
    {% for post in category.last %}
    <li><a href="{{ post.url | relative_url }}">
        {{ post.title | escape }}
    </a></li>
    {% endfor %}
</ul>
{% endfor %}
