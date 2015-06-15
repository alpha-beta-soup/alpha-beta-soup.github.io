---
layout: page
title: Projects
permalink: /projects/
---

# [New Zealand Crash Map]({{site.url}}/national-crash-statistics/)

An interactive web map of the New Zealand Transport Agency's (NZTA) Crash Analysis System (CAS) data. The location, causes and circumstances behind each road crash attended by NZ Police can be explored.

This project was [featured](http://www.nzherald.co.nz/data-blog/news/article.cfm?c_id=1503710&objectid=11378832) in the New Zealand Herald on Christmas 2014, becoming the most read article on the website for that day.

<center>
![](/assets/crash-map.png)
</center>

&nbsp;
# [Videos of Wellington's public transport system](https://vimeo.com/album/2763946)

To explore data in the [General Transit Feed Specification](https://developers.google.com/transit/gtfs/) in preparation for my Master's thesis, I decided to make some videos of Wellington city's public transport system.

<center><iframe src="https://player.vimeo.com/video/88324152" width="500" height="314" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></center>

The code for this still exists but it is no longer public because it is very rough. If you're interested, I'd be willing to tidy it so you can use it with any GTFS for any city. The code is written in Python and makes use of [SQLite/Spatialite](http://www.gaia-gis.it/gaia-sins/), [Matplotlib's Basemap](http://matplotlib.org/basemap/), and [Shapely](https://pypi.python.org/pypi/Shapely).
