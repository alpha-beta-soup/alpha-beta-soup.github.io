---
layout: post
title: "What does dropping little Johnny off at school mean for commuters?"
date: 2014-06-13 17:44:17 +1200
comments: true
categories: ["Original Content", "Portfolio", "Wellington", "Bus", "Travel Time", "Travel Time Variability"]
---

I have recently been fortunate enough to gain access to the real-time information (RTI)
for buses and trains in the Wellington region. This is the information that gets displayed in the 
box at your bus or train stop giving an estimate of how many minutes until your bus arrives.
This information isn't publicly available as a download or as an API, although
you can try your luck looking at [the mobile version of the Metlink website](http://m.metlink.org.nz/stop/5006 "Change the number at the end of the URL for a different stop").
Building statistics from that is a different thing entirely. I tried to write a 
program to scrape the information, but you have to look at each stop individually
and 'Due', '2 mins', '3 mins', etc. isn't actually very useful beyond catching your service.

So. Without further ado, here is something I whipped up today. It demonstrates not
only the travel time variation along a single bus route, but also how the mean travel
time changes according to different conditions. In particular, I added information 
to the dates stored with the data to be able to distinguish trips made on 'ordinary' 
weekdays where people are going to work and school, school holiday weekdays, and weekends.

{% imgcap center ../images/airport91_ttcomparison.png Travel time data from the Greater Wellington Regional Council. Open in new tab for larger. %}

This data covers all of April 2014. This year, both primary and secondary school holidays
began on April 17, and lasted until May 5, so the data is split roughly evenly between weekdays
where little Johhny is being ferried to school, and days when he is not. Most of us know from
experience that traffic congestion is worse in the school term than in the school holidays.
But how much? Well, if we take [the Airport Flyer bus route](http://www.metlink.org.nz/timetables/bus/091/inbound "Click to see the route") as a unit of analysis, school-related
congestion adds about 14 minutes of travel time across the length of the route. This mostly accrues between
Jackson St and Murphy St. For those of you playing at home, that's the longest stretch between stops at
approximately 15 kilometres, and takes in the busiest section of State Highway 2 and the
urban motorway. However, from experience as a rider on this route, a lot of this
additional travel time comes from Petone (Jackson St/Hutt Rd, attempting to get
onto SH2). Also from experience as a resident in Petone, **school congestion is a total 
time killer**.

---
## What varies?
---

Now, let's back up a bit, because I can hear a few voices at the back. What can cause
variation in travel time apart from school-related congestion? Here's a list:

* Passengers getting on and off
* Road maintenance
* Bus driver behaviour
* Non-school related road congestion
* Weather
* Possibly some other things

Now, it is possible to separate out these different effects, although I leave that
as an exercise for the reader. I picked only a single month to ensure I'd be comparing
apples with apples to the greatest extent possible. Admittedly, April **did** see a bit of roadworks
between Petone and Wellington that would have affected this route. However, this work
was being performed just as intensely during the school term and the weekend as for the 
rest of April--so there is no reason to attribute the difference to that.

School children don't typically board the Airport bus, not only because it goes to the 
Airport, but because it carries a surcharge. Some amount of variation is perhaps due to buses
on this route getting stuck behind the buses on other routes which school children are
boarding in the school term, and are not boarding in the holidays.

It's been noted that New Zealand has seen a significant increase in the proportion
of children and teenagers who are driven (or drive themselves) to school. Often the 
impact on obesity is noted, as well as the opportunity cost of missed early morning 
exercise which could help boost attention spans.

However, I have not seen it mentioned how this effects our transport system beyond 
a general acceptance that congestion is worse. Although
I have only shown you one chart, I have played around with displaying the same information
for a variety of routes. The typical result for buses is that the mean travel time is greater
during the school term than outside of it. In terms of the variation around this mean, every example 
I have plotted has shown a much greater standard deviation of travel time.

What does that mean? It means buses are generally getting stuck in school traffic, 
causing people to be **later than they otherwise need to be**, or making them leave home earlier than otherwise.
It means **buses are more late more often**; people have **less certainty about their arrival time**, and the **schedule becomes
less and less useful as a tool to reduce the amount of time you spend waiting**.

Notably, the effect is much more limited for rail services, which do not want to put up
with any of that school-gate SUV madness.


