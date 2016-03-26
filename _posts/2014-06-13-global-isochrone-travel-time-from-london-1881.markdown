---
layout: post
title: "Global Isochrone Travel Time from London (1881)"
date: 2014-06-13 10:33:38 +1200
comments: true
category: Critique
tags: [Historical Maps, Isochrones, Global, Travel Time, Static Maps]
---

Here's an interesting historical map that turned up on [/r/MapPorn](http://www.reddit.com/r/MapPorn/comments/27yfn0/isochronic_passage_chart_for_travelers_global_map/ "Link to Reddit thread") today. Made by Francis Galton for the Proceedings of the Royal Geographic Society in 1881, I find it particularly interesting because it represents the state of international travel only a decade or so after my Scottish and Irish ancestors travelled to New Zealand (via way of Cape Town, where one of my great-great aunts was born *en route*).

<br>
{% fullwidth "./assets/global-isochrone-travel-time-from-london-1881.jpg" "Isochronic passage chart for travellers" %}

The work of cartographers past is often so impressive on their own merits (although I suspect the chaff has been cut with time) yet when you also consider the technology that they *didn't* have to make their maps... the mind boggles and you realise that all of use currently practising the skill have it so easy. Really, if work of this calibre could be made then, there are no excuses for bad maps now.

One particular technique I'd like to draw attention to is the shape of the coastlines. They're *really wobbly*. I suspect this is probably because nice little shapefiles didn't exist for downloading---but the effect that this has is to express that coastlines are complex features even if that complexity isn't well known. Rather than generalise coastlines to rather round shapes (which would be fine at this scale, really), they have been deliberately given additional complexity: it's anti-generalisation.

As far as I am aware, this would be quite hard to achieve with modern software. You would have to first add vertices to existing shapes at not-quite-regular intervals, and then shift the vertices about to get that head-beach in-out effect.

I also really think the colour distinction between land and water with the same category value is really nifty, and of course is crucial when the main form of intercontinental travel is by sea (steam ship). It wouldn't really make sense for travel *par avion*, or any other mode.

Finally:

> It is supposed that local preparations have been made and that other circumstances are favourable.

I love this. These kind of assumptions have been made for over a hundred years in transportation analysis and cartography. I wonder if it will ever be possible to completely overcome them.
