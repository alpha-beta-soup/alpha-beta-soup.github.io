---
layout: page
title: Projects
permalink: /projects/
---

# [New Zealand Crash Map]({{site.url}}/national-crash-statistics/)

An interactive web map of the New Zealand Transport Agency's (NZTA) Crash Analysis System (CAS) data. The location, causes and circumstances behind each road crash attended by NZ Police can be explored. Most of the interface was written by [Andrew Parnell](https://twitter.com/parnelandr) did most of the work on this interface, my role was more data munging.

This project was [featured](http://www.nzherald.co.nz/data-blog/news/article.cfm?c_id=1503710&objectid=11378832) in the New Zealand Herald on Christmas 2014, becoming the most read article on the website for that day.

<br>
{% fullwidth "/assets/crash-map.png" "New Zealand Crash Map interface." %}

# Videos of Wellington's public transport system

To explore data in the [General Transit Feed Specification](https://developers.google.com/transit/gtfs/) in preparation for my Master's thesis, I decided to make some videos of Wellington city's public transport system.

<br>
<iframe src="https://player.vimeo.com/video/88324152" width="85%" height="520" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
<br>

See the [album](https://vimeo.com/album/2763946) for more.

The code for this still exists but it is no longer public because it is very rough. If you're interested, I'd be willing to tidy it so you can use it with any GTFS for any city. The code is written in Python and makes use of [SQLite/Spatialite](http://www.gaia-gis.it/gaia-sins/), [Matplotlib's Basemap](http://matplotlib.org/basemap/), and [Shapely](https://pypi.python.org/pypi/Shapely).

# Census cycling statistics for Wellington

CartoDB is a great initiative, that for many is a first taste of the power of PostgreSQL and PostGIS. I made this for the benefit of a Wellington-based cycling advocacy group, and it has been used in many discussions relating to the Island Bay protected cycleway which has recently been approved.

<br>
<iframe width='80%' height='520' frameborder='0' src='https://alphabetasoup.cartodb.com/viz/3c1e307c-e196-11e3-969e-0e10bcd91c2b/embed_map' allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>

# Collaborative cycle mapping with Google Maps Engine Lite

I am a member of the Hutt Cycle Network, a cycling advocacy group for Lower Hutt city. The group needed a way to share ideas for cycle-friendly routes, risks to cyclists, and other pertinent pieces of spatial information that the group has knowledge of, but had no means to record digitally. I suggested that the group try Google Maps Engine Lite, as a lightweight web GIS that most people find intuitive to use. [This is the result.](https://www.google.com/maps/d/edit?mid=zs0qRfa6-1hw.kYwo2V4cv3Pg) Non-technical members commented that they felt empowered to record their knowledge through the tool.

<br>
{% fullwidth "/assets/gme-sample.png" "Google Maps Engine lite, showing the layers maintained by the Hutt Cycle Network members." %}
<br>

Behind the scenes, I have a script running on a schedule to download the information, and upsert it into a PostGIS-enabled database. I combine this with other information to support the HCN's comments on matters relating to cycling in Lower Hutt. For instance, our response to an idea to develop protected cycle lanes was accompanied by information about how many students attend school within 500m of the protected cycle lanes.

# Projects unrelated to transportation

## [NZ UFO Sightings](http://www.nearimprov.com/nz-ufo-sightings/)

<br>
{% fullwidth "/assets/ufos.png" "Interactive map of NZ UFO sightings." %}

Disclaimer: I don't believe aliens visit earth, though they probably exist in some form in the vastness of infinite space.

For this project, I maintain a web scraper that I use periodically to update the data for the interactive map. Geocoding is done imperfectly, using the fantastic [`geopy`](http://geopy.readthedocs.org/en/latest/) Python module.

I'd like to do some analysis, trying to find reports of similar phenomena, reported around the same time, in around the same place. Sightings by an isolated stoner in Motueka are much less interesting than those reported by independent witnesses who describe the same thing. Get in touch if this could be of interest to you.

## [Cloudburst API](https://github.com/metocean/cloudburst-api)

Currently I am working to build a map tile server for weather data, which has a free tier, exposed via the linked API. I also wrote the API. Soon, you will be able to use it connect to a range of global weather forecasts, using Leaflet, OpenLayers, or Google Maps.

<br>
{% fullwidth "/assets/cloudburst.png" "Example tile map layer and interface constructed using the Cloudburst API." %}
<br>

## Real-time lightning server

I wrote a web socket server for sending lightning strikes to client applications in real time: seconds after they are detected by physical instrumentation.

<br>
{% fullwidth "/assets/lightning.gif" "This is a GIF of ten seconds of lightning occurring in central Australia; watch carefully around the major cluster of strikes as new ones occur." %}
<br>

I think there is massive underuse of web sockets in geographic applications; I have the beginnings of a QGIS plugin to connect to GeoJSON-serving web sockets to demonstrate their utility.
