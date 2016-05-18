---
layout: post
title: "Mobile Road: Valuable Data Hiding in Plain Sight"
date: 2016-05-18 19:00:00 +1300
comments: true
category:
tags: ["Open Data", "NZTA", "mobileroad"]
---

I've spent a lot of time recently testing the waters of open transport data in New Zealand. The summary is that there is actually quite a lot of data available, but it's not easy to find, it's not readily interoperable, it's heavily coupled to the NZTA's own applications, and generally there are severe uncertainties about the rights to use some of it.

A dataset that proves all these points is the NZTA's data on annual average daily traffic (AADT), and the percentage of this figure that represents heavy traffic.

I didn't realise this data was available. Judging by reactions on Twitter and Facebook, I certainly wasn't the only one.

<br>
<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">New Zealand state highway system by average daily volume <a href="https://t.co/PL0rpvyHOa">pic.twitter.com/PL0rpvyHOa</a></p>&mdash; ∆ Richard Law (@alphabeta_soup) <a href="https://twitter.com/alphabeta_soup/status/731813068888363008">May 15, 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

I don't know a lot about how this data is collected, who collects, or even who ultimately uses it. It has been suggested that this data is RAMM AADTs. From what I understand, the commercial [Road Assessment and Maintenance Management (RAMM) software](http://www.ramm.com/) is used by Road Controlling Authorities (RCAs) in New Zealand, their consultants and contractors, and by the NZTA in the management of the State Highway network. RAMM offers some APIs, including a Web Feature Service for easy consumption by both web and desktop GIS—although this has some costs according to the 2014 documentation available on the RAMM website. Their documentation can be found [here](https://apps.ramm.co.nz/rammapi6.1/documentation/index), and it looks wonderful... if you are an RCA and actually have access to it.

I'm not convinced that there are good reasons why most of this data isn't public by default. Fortunately, a small portion of it is now available to download [from my repository](https://github.com/alpha-beta-soup/mobile-road-extraction).

# Hiding in plain Sight

I came across the [Mobile Road](https://mobileroad.org/index.html) website last week after a presentation I saw at WaiGIS, a meeting of people working in GIS within the Waikato region. The presenter has been using Mobile Road freely to obtain current road volume and surfacing information when working on noise mitigation at individual sites. It's currently a rather strange, possibly beta website primarily intended for mobile and offline use. I can't criticise the website a great deal because I'm not exactly a wonderful front-end developer; but it is objectively difficult to use, and appears very bizarre on a non-mobile device. Documentation for Mobile Road can be found [here](https://wiki.mobileroad.org/). According to that documentaiton, Mobile Road is a "free and collaborative" app for the roading industry hosted at Auckland Motorways.

> Most people use the app to identify route positions, capture notes whilst on site or use it as an auditing tool to check RAMM data.

I spent some time inspecting the requests made when using the Mobile Road application, and noticed that it first makes a request to download a metadata document providing links to further JSON files that include road centreline geometries, AADTs and other information (including road surface and the percentage of the traffic that is heavy). Given that this is not an official API, there is almost no documentation about this data, aside from what I can surmise from how Mobile Road uses the information.

The geometries are in New Zealand Transverse Mercator and are specified with [delta encoding](https://en.wikipedia.org/wiki/Delta_encoding), which means they're a little special. The structure of the JSON data is also rather complicated, with a `centrelines` object containing more than just centrelines, and it being associated with another array that unfortunately often has a different length. I have made what I think is a correct transformation of the information into GeoJSON, so feel free to just download the files from my [repository](https://github.com/alpha-beta-soup/mobile-road-extraction), or clone it see if I have made any mistakes.

If you want to re-download the data (perhaps to get updated counts), there are instructions in the repository.

# What is it good for?

Some noted that this data is incredibly valuable for a range of applications, particularly in research. In my own case, a year or so ago when I worked as a Research Assistant at the New Zealand Institute for the Study of Competition and Regulation, we could have used this data to improve our regional models of transportation and residential choices. As it stood, the driving mode was the least-well developed, and sufferred particularly from missing estimates of congestion and driver route preference.

<br>
<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr"><a href="https://twitter.com/alphabeta_soup">@alphabeta_soup</a> <a href="https://twitter.com/dflydsci">@dflydsci</a> that would have been awesome for my research on human mediated dispersal. Nice work.</p>&mdash; jp (@ferrouswheel) <a href="https://twitter.com/ferrouswheel/status/732095184763125761">May 16, 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

Others (including those in industry) have said that they have been able to attend this data at a State Highway level (via enail request), but not at a local level.

# Are we allowed to use it?

I really have no idea. There is nothing on the Mobile Road website specifiying who the data ultimately belongs to, or who is allowed to use it. I figure that given it is provided by a public agency with no usage agreement, because it is downloaded onto your device when you use the application, and because it requires no authentication or credentials, then it is fair and reasonable to assume it is in the public domain. I possibly now have a track record of being a little cavalier with respect to taking publicly-accessible transport data and putting it out to a wider audience, but I will respect explicit boundaries when they are stated. In this case, they are absent.

It has been suggested to me that the RAMM data (the traffic counts) is owned by RCAs and is not intended for public use. The same person suggests that the centreline data might be proprietary, possibly CoreLogic's or Critchlow's. The first point is probably true, but I don't think the second one is true. Even if the centreline geometries are proprietary, it's worth noting that it's not especially realistic data, with poor precision, notable absences of new subdivisions, abundant topological errors, and no information necessary for forming a road network (e.g. oneway restrictions). You can get better road centreline data for free, both from OpenStreetMap and LINZ. In fact I think as it stands the geometry is barely fit for the purpose I intend for it (matching it to crash locations as normalisation for calculating crash rates).

To the extent that RAMM traffic counts aren't public information by default, I think it's worth recalling my own experience requesting some of that data. After a traffic count was performed near my house, I emailed the Waikato District Council asking for the data. I recieved a detailed tabular breakdown of everything that was collected; including the distribution of traffic speeds in hourly bins. Having a single AADT per road segment actually pales in comparison to that level of detail.

# How could it be better?

This data, while impressive and surprising in its scope, still is not fit for a variety of purposes. Mostly this is because I have no real idea how AADTs are determined, and simply can't rely on them.

Perhaps the NZTA could take this opportunity to note that lots of people are excited about using this data. It has no privacy implications. It is already public. It already has a system in place to keep it current. Take the opportunity to make this official! Publish some documentation, advertise an API endpoint, and encourage peple to actually use it. All the key pieces are already in place.

Good reading: [the Open Data Handbook](http://opendatahandbook.org/)

# Some samples

The following maps show heavy vehicle AADT, as both an absolute number of heavy vehicles, and as a percentage of the total AADT. The upper class in the latter case is ≥10%. I attempted to also include Dunedin and Tauranga, but the data for them seems rather erroneous. In the case of Tauranga, my script is unable to identify the percentage of heavy vehicles (data schema issue?), and in the case of Dunedin it seemed very suspicious that there were few identifiable patterns (measurement error?).

Still, I find it interesting that the industrial districts of our major cities are so readily apparent with this data. With a bit of official support and eyes on the data we could perhaps get the quality and metadata issues sorted and start benefiting from people's effort. I should probably make a legend (or an interactive) so you can decode the values better, but for now, red represents more heavy vehicles, and blue represents the category with the fewest heavy vehicles.

## Auckland

<br>
{% fullwidth "./assets/mobile-road/auck-perc.png" "Percentage of AADT that is heavy. The clear boundaries of former councils is awfully suspicious." %}

<br>
{% fullwidth "./assets/mobile-road/auck-vol.png" "Absolute heavy AADT" %}

## Wellington

<br>
{% fullwidth "./assets/mobile-road/wgtn-perc.png" "Percentage of AADT that is heavy" %}

<br>
{% fullwidth "./assets/mobile-road/wgtn-vol.png" "Absolute heavy AADT" %}

## Christchurch

<br>
{% fullwidth "./assets/mobile-road/chch-perc.png" "Percentage of AADT that is heavy" %}

<br>
{% fullwidth "./assets/mobile-road/chch-vol.png" "Absolute heavy AADT" %}
