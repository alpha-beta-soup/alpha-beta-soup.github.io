---
layout: post
title: "Spatial isn't that special"
date: 2015-11-01 17:00:00 +1200
comments: true
category: [Other, Opinion]
tags: [GIS, Opinion]
---

This may be a strange thing for me to say, given that my postgraduate qualification, and profession is in geographic information systems. But I don't think that spatial is particularly special. People pretend it is, and then use that to justify the selling of ridiculous desktop software and "enterprise" solutions to problems that Paul Ramsey here shows can all be solved in a single (PostGIS) SQL query and some wrapper PHP script alongside a slippy map.

<br>
<div align="center">
<iframe width="65%" height="500px" src="https://www.youtube.com/embed/PwVRi37qXn8" frameborder="0" allowfullscreen></iframe>
</div>
&nbsp;

Now this headline assertion is not without nuance. While I currently think that 90% of any GIS workflow can and ought to be automated with something like PostGIS-extended PostgreSQL tables, views, [upse](https://gist.github.com/alpha-beta-soup/6f0fe6a219a014ca9d4d)[rts](https://wiki.postgresql.org/wiki/UPSERT) and trigger functions, that last 10% is actually very, very important. It's where GIS folk **should** be focusing their attention, given the other problems have been solved by technology. Unfortunately, a lot of people seem to get so caught up inefficiently achieving the fundamental 90% of issues that they don't actually pay attention to the remaining problems that are actually difficult and/or emerging:

1. **Spatial autocorrelation**

2. **Metadata**

3. **Cartography**{% sidenote "sn-id-cartography" "Interactive and otherwise: bad defaults threaten to undo hundreds of years of cartographic experience." %}

4. Efficient, client-side implementations of **geometric algorithms**{% sidenote "sn-id-turf" "Read: [turf.js](https://github.com/Turfjs/turf)" %}

5. **Spatial accuracy**{% sidenote "sn-id-sa" "I've yet to see a geocoding implementation that even attempts to **record** accuracy!" %}

6. **Spatial error**

7. Modifiable areal unit problem

8. Ecological fallacy

9. Locational fallacy {% sidenote "sn-id-lf" "e.g. the reduction of an entity to a single point when it is more appropraitly modelled as existing over a mutlidimensional field." %}

10. Spatial sampling

11. **Stochastic processes**{% sidenote "sn-id-sp" "My own masters thesis considered this issue for measuring public transport accessibility: bus arrival time is a stochastic process, not a deterministic one. Further, spatial data is too often considered to be a random sample with many observations—I posit instead that it be viewed as a single realisation of a stochastic process. This should hardly be radical, but the gap in the literature for thinking like this is enormous." %}

Within the spatial profession (the Twittersphere, where I hear from most of these people), I also don't feel like enough attention is being paid to emerging and not-so-emerging technologies and how they can revolutionise the way spatial questions are posed and answered, and hopefully assist in shifting some attention to the 10% of real spatial problems, either directly, or by making the 90% more readily accomplishable.

[Spatially-augmented graph databases](https://github.com/neo4j-contrib/spatial) are something that has been piquing my interest recently and I intend to write a blog post about some experiments shortly. Why is no one really talking about them?

I'm not going to hold my breath waiting for the self-delcared GIS commentators on the circle-jerk that is LinkedIn to discuss the relative merits of GeoDjango.

I didn't even encounter a NetCDF dataset with an arbitrary number of dimensions, embedded metadata, sigma coordinate systems and irregular grid spacing until I started working around oceanographers and meteorologists.

Why is [GeoGig](http://geogig.org/) still in beta? Why is no one really using it?

Turf.js!

There are exceptions of course. But if you want to participate in these exceptions, I found some useful advice that builds on the argument that a desktop GIS is increasingly akin to word processing software:

> So if you’re considering a GIS career, you might want to reframe the question. Instead of learning ArcGIS and getting a GISP certificate, I would recommend that you choose one of 4 paths:
1. geospatial or geostatistical analyst;
2. cartographer or visualization design expert;
3. software developer;
4. Geographic Information Scientist;
Or some combination of the four (and an application area of interest wouldn’t hurt either).  If you only train yourself to be a GIS user you’ll be in the same boat as a professional word processor before too long.

— [Justin Holman](http://www.justinholman.com/2012/03/20/spatial-is-indeed-special/)

As Holman notes, the existence of Microsoft Word didn't make good writers obsolete. In fact probably the opposite is true.

I recognise that this post actually comes across as quite condescending. Frankly, I hope it is a little, as that was completely my intention. I mean what I say and a I say what I mean. I know I'm not blameless, and I'm comfortable with that because I recognise it and frequently acquiesce to those who know a lot more than I do about what I make my living in. I know for a fact that a lot of other people aren't blameless, either. I just worry that many don't recognise it. As a profession, spatial people should be extolling the merits of the solutions to difficult problems that we have studied. We need less button-clicking, more actual problem solving, because I'm not seeing enough evidence of the latter actually happening.

We're not typists, we're fucking writers, *auteurs*, creators, scientists, and problem solvers. We should be proud of it... and act like it.
