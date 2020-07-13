---
layout: project
title: Reputation in Academic Citation Networks
abstract: Investigation of reputation measures in citation networks for papers in major computer science publications.
permalink: /projects/reputation-in-academic-citation-networks
status: stable
---

<center>
{% include panel_github.html href="https://github.com/Riib11/SocialNetworks/" %}
{% include panel_doc.html href="https://github.com/Riib11/SocialNetworks/raw/master/report/Report.pdf" %}
</center>

The data set I used for this study is the record of papers published in a selection of computer systems conferences and a few control, non-computer systems conferences from 2017.
The original format was the raw PDF's of all of these papers.
During the summer of 2018, Eitan Frachtenberg
 and his research assistants extracted features from the PDF's including author names, paper titles, and bibliographies.
The second layer of data embellishment was matching authors with Google scholar accounts and personal survey results in order to attach author features such as email, institution, country, and gender.
Finally, a third layer of data embellishment was matching authors and papers to Semantic Scholar entries.
Nearly all the papers and authors (2,422 ≅ 99.1%) from the original PDF's were found in Semantic Scholar.
Importantly, these Semantic Scholar identities significantly contributed to author disambiguation and retrieved the papers from previous years that were cited by the 2017 papers.

![](/assets/social-networks-in-cs-academia/paper-collaboration-network-centrality-degree.png)

The stated purpose for my work on and analysis of this data was to look for patterns in the authors' and papers' individual-level features (from the embellished data) and network-level features.
I analyzed several different networks, focussing on the collaboration and citation connections between authors, papers, and conferences.
I found that the author collaboration network was particularly interesting because it displayed some significant, meaningful and separate correlations between individual-level features and network-level features.
These correlations were novel in the context of some more tradition _author reputation metrics_, which suggest that they measure an aspect of influence that is not well measured by the reputation metrics.
