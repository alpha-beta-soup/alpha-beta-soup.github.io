---
layout: post
title: "What is a headway?"
date: 2014-06-17 08:38:41 +1200
comments: true
category: Portfolio
tags: ["Headway", "Computation", "Frequency", "Waiting Time"]
---

A headway, as used in transit planning and modelling, is typically defined as the time between consecutive services. If you catch a bus that "comes every half hour", then the service you catch has a headway of 30 minutes.

This concept is deceptively simple, and this blog post will explain why. There are  several examples of transit analyses that I have seen that use an incorrect definition  of the headway.

Defining the headway accurately is very important when modelling travel using public transport because it is used to determine how long we expect passengers will wait. Taking the example of the bus that comes every thirty minutes: if passengers all turn up to the stop without considering the schedule (that is, at random), we would expect the average passenger to be waiting there for a period of time equal to half the headway: 15 minutes.

The Transit Capacity and Quality of Service Manual ([TCQSM](http://onlinepubs.trb.org/onlinepubs/tcrp/tcrp100/part%203.pdf "TCQSM 2nd Edition, PDF")) has a pretty handy table on different headway classes and what they mean for waiting passengers. I've taken this from the second edition of the TCQSM (rather than the 3rd), because I don't have access to the 3rd edition. I don't know if it has changed (a heads-up if it has would be great).

<br>

Level of Service (LOS) |  Avg. Headway (min)  |  Vehicles/h  | Comments
:---:|:---:|:---:| --- |
A | <10 | >6 | Passengers do not need schedules
B | 10-14 | 5-6 | Frequent service, passengers consult schedules
C | 15-20 | 3-4 | Maximum desirable time to wait if bus/train missed
D | 21-30 | 2 | Service unattractive to choice riders
E | 31-60 | 1 | Service available during the hour
F | >60 | <1 | Service unattractive to all riders

<br>

Stops with LOS A mean that passengers can just up and board their service with barely any waiting. Stops with LOS F require that passengers take time to plan their arrival at the stop and probably change their schedules before or after their trip: living their life around the schedule.

The "average headway" in the table is the inverse of average frequency.

So far, so good. Headways are the time between vehicles, and are useful as indications of how frequent a public transport service is, and therefore how long passengers wait. Average waiting time is complicated by the fact that not all passengers arrive to their stops at random, but I will not bother you with this for the moment, as this post is concerned with defining the headway, not waiting time, even if they are related.

## Problem 1: Grouped arrivals

If I told you that a particular bus route had a frequency of 3 vehicles per hour, what would be headway on that route? Well, there's 60 minutes to an hour, and 3 services in that period. So we have 60/3=20 minute headway.

However what if the schedule (or, you know, reality) had all three of these services arriving at the same time, perhaps because it is a bus interchange where three routes coincide before heading their separate ways, or because buses can get caught behind a late service (bunching). In this case, despite having a frequency of 3 vehicles per hour (LOS C), your headway could arguably be defined in two ways.

The first is to assume that three services all arriving at once just count as one arrival. Your headway is then 60 minutes, and LOS E.

The second is to acknowledge that O.K., the schedule says that they arrive at the same time, but it can't be *exactly* the same time. Let's say for argument's sake, last Tuesday they arrived at 7:00 am, 7:01 am, and 7:02 am, and then again at 8 am. Let's call this Arrival Pattern A. Your headway as we have so far defined it is one minute for the first bus, one minute for the second, and 58 minutes for the third. Your average headway in this period is (1+1+58)/3=20 minutes, LOS C. So we're back at 20 minutes! But hold on, none these buses has a 20 minute headway when considered as an individual arrival.

This is tricky. What does the TCQSM recommend (p. 3-29)?

> Some judgment must be applied to bus stops located near timed transfer centers. There is a considerable difference in service from a passenger’s perspective between a bus arriving every 10 minutes and three buses arriving in a row from a nearby transfer center every 30 minutes, even though both scenarios result in six buses per hour serving the stop. In general, buses on separate routes serving the same destination that arrive at a stop within 3 minutes of each other should be counted as one bus for the purposes of determining service frequency LOS.

As it so happens, the TCQSM therefore suggests using the first approach, where buses that arrive within three minutes of each other are considered as one bus. So the 7:00, 7:01 and 7:02 buses would collapse down to some time point in the range 7:00-7:02. I'm not sure what moment exactly should be used within this range. It may sound picky to be wondering if the representative arrival is 7:00 or 7:02, but when writing code to calculate these headways for you, you have to make rather precise decisions. I'd guess it'd be the average of these values, so 7:01 am.

However, if the buses arrived at 7:00, 7:04, 7:08 and 8:00, we'd be back to an average headway of 20 minutes, and square one. We'll call this Arrival Pattern B.

### Median headway

This issue is why, when aggregating headways (rather than determining the headways of particular trips) over an interval of time, the median headway is sometimes used instead of the average headway. With a median headway, the potential to calculate a headway that is never exhibited in reality is reduced.

For the two examples given in this section, Arrival Pattern A has a median headway of 1 minute. Arrival Pattern B has a median headway of 4 minutes.

That's not quite right. If you were to use this as your headway for the purposes of determining the average waiting time of a randomly-arriving passenger, they'd be waiting for 0.5 minutes (AP A) or 2 minutes (Arrival Pattern B).

### Is it a problem?

I got to this point in my thinking and after a bit of time spent smashing my head into my desk, I asked myself whether it was really a problem if the average headway in Arrival Patterns A and B can be 60 and 20 minutes, respectively. This seems like a very big difference in headway (and hence waiting time) for such a small difference in vehicle arrivals. However, if passengers are arriving uniformly at random over the hour 7:00-8:00, then the average passenger *does* indeed wait for -20 minutes in Arrival Pattern B. In Arrival Pattern A, three minutes, while arbitrary, does seem like a reasonable amount of time to consider services to be functionally arriving at the same time, given acceptable levels of variation in arrival time.

That's fine and dandy for little examples like AP A and B above. But what if you have a major stop where buses typically arrive every minute for the entire hour? What is the headway? We'll call this Arrival Pattern C. In this case, the frequency-derived measurement of headway (60 arrivals in 60 minutes, so 1 minute headways) is spot-on.

But the TCQSM just told us that arrivals less than 3 minutes apart should be considered equivalent to the arrival of only one vehicle. So the 7:00 and 7:01 arrivals are equivalent to each other. And the 7:01 and the 7:02. And the 7:02 and the 7:03. In fact, taking the TCQSM's advice to the letter (as code written to solve this problem would naïvely), the whole pattern of arrivals would be reduced down to one single arrival and a headway of 60 minutes for the 7:00-8:00 period!

### What do you do?

Thinking about these problems, the most defensible solution I have come up with is to take the TCQSM's grouping advice, but modify it slightly so we don't avoid that last incomprehensible travesty. I would *bin* all arrivals into groups of four minutes. So for Arrival Pattern C (arrivals every minute for an hour), we'd see single arrival events at 7:00, 7:04, 7:08, 7:12, and so on. 60 arrivals would be reduced to 15, each with four minute headways. The average and the median headways in this case would then both be four minutes, with an average waiting time of two minutes.

For AP B (7:00, 7:04, 7:08, and 8:00), no modification of the arrivals is required, and the average headway is 20 minutes.

For AP A (7:00, 7:01, 7:02, and 8:00), we would modify the arrival pattern to be 7:00 and 8:00, as the three arrivals near the start of the hour are grouped into the same bin. If there was a fourth service at 7:03, the pattern would be the same, as well as the average headway (60 minutes). When we get an additional service at 7:04, our (grouped) arrival pattern becomes 7:00, 7:04, 8:00, and **our average headway becomes 30 minutes** rather than 60. The median also changes from 60 to 30.

This last case may not seem ideal, but let's recap the possible alternatives.

1. A literal interpretation of the TCQSM has us grouping all of the first five arrivals into
one, leading to only one headway of **60 minutes**.
2. Without grouping, we'd have headways of 1, 1, 1, 1, and 56 minutes, for an average
of **12 minutes**, and a median of 1 minute. Notice that the average headway is the same
as that determined from the frequency per hour (5 arrivals in 60 minutes).

Deciding which method to follow is tricky. I don't have a clear favourite; but if forced to pick,
I like the method that uses the bins. It acknowledges the TQCSM's recommendation that
arrivals close in time be considered functionally equivalent, and results in a headway
that falls between the other two estimates derived from alternative interpretations.

From the perspective of someone who has to calculate these values programmatically, it
adds a bit of overhead, particularly over the simple arrivals per hour calculation. However that
calculation does not account for the scheduled arrivals, and I would not recommend it, ever.

## Problem 2: The destination matters

I've been a little dishonest in my definition of what a headway is. Well, I've said a half-truth. The headway *is* the time between vehicle arrivals at a stop. However, all arrivals are not equivalent. What matters is **where they are going**. Let's say we have a network with stops A-E serviced by three different routes.

<br>
{% fullwidth "./assets/network-headway-diagram.png" %}

If you're seeking to travel directly from A to D, you don't at all care that there is a blue line between A and E. So even if a blue line service arrived at A every minute of every day, it would do you no good to board it (we'll assume you can't walk between any of the stops). That is, if travelling A-D, your headway is defined only as the headway of the green route.{% sidenote "sn-id-cb" "For the colourblind, red is solid, blue is dashed, and green is dotted." %}

Now if you're instead travelling A-C, you can choose between the red and the green routes. Unless these services arrive at A at the same time, your headway (and hence waiting time) is less than it would be if you were travelling A-D, even though you are waiting at the same stop. This path A-B-C is a public transport *corridor* of overlapping routes.

Travelling A-E, you again benefit from the corridor effect, as your line is shared between the blue and the red services. Note, however, that although these overlapping routes work together to reduce your headway, you may not necessarily choose to board the first red or blue service that arrives. For instance, if blue is an express route that travels A-E while red is a slower route that stops at A-B-C-E, you may be aware that skipping that red bus that just turned up at A in favour of waiting just a little bit longer for the next blue bus is better, because the blue bus will get you to E in better time.

Given this, what's the headway? If the headway is used as a proxy for waiting time, how can it account for the presence of express routes that may give people an incentive to wait a little bit longer for a faster route? Given that you don't *know* with certainty that the blue bus is going to turn up quickly enough for your gamble to pay off, what is your expected waiting time?

Further, what about the possibility of taking a green bus to C and then waiting at C for a red bus to take you all the way to E? Might sound weird given transfers are annoying, but it's certainly an advantage to have this option if C is more comfortable or well-lit as a place to wait than is A.

These are very tricky questions with very tricky answers. The key thing to keep in mind, however, is the mantra: **the destination matters**. To this end, the TCQSM does acknowledge that headways are defined with respect to a particular destination. By no means has this been clearly stated, however. To quote their fuller definition (p. 3-29):

> Service frequency LOS is determined by destination from a given transit stop, as several routes may serve a given stop, but not all may serve a particular destination.

Take home point: a stop served by more than one route with multiple possible destinations doesn't have a single headway; it has a headway for each possible direct destination from each stop.

### How do you calculate headways when the destination matters?

An issue here, from the perspective of someone who wants to calculate headways from a published schedule (e.g. from your local GTFS) or from observation of real-time service arrivals, is that as soon as we define headways not as one number for each stop, but as one number for each possible board-egress stop pair, the dimensionality of the problem grows.

Given this blog is ostensibly about transit visualisation, I'll make a diagram for this. This is the exact same sample network as we had before, but now shown in terms of the direct stop edges that exist. If you're to find the headway of travel A-C, you simply need to look at the two edges that progress uninterrupted from A to C, and ignore all others. This is convenient.

<br>
{% fullwidth "./assets/network-headway-diagram-logical.png" %}

The problem with this is that the number of edges we have in the network has grown. Where before we had 7 edges all holding information in our database (route, time, mode, etc.), we now have 11. This increase of three doesn't sound big, but the only reason it is small is because I have drawn a very simple network. Despite being simple, this is still coming up against the limits of what I can reasonably convey in an diagram, what with its overlapping lines.

If instead of 5 stops I had drawn 60 stops, the number of edges now represented would be approximately half of the number of stops squared (see below equation, where {% m %} s {% em %} is the number of stops in the network, per route). For instance, in a 60-stop route, the first stop now has 59 edges leaving from it. The second would have 58, the third 57, and so on. Before we changed to this representation, we had **59** edges. Now there's **1770**. Across an entire transport network of thousands of stops and overlapping routes, where before we had thousands of edges, we now have thousands of millions and you're looking at moving from a database less than one GB in size to one in the tens of GBs or more, depending on how exactly you choose to structure and aggregate your data.

{% math %}e = s^{2}/2 - (s-0.5 \times s){% endmath %}

This problem is tractable (although takes a bit of crafty SQL) for a schedule or small database of real-time observations. If you want to calculate the average travel time, or headway or some other parameter for each of the millions of edges in this reconfigured network representing several years, you've got your work cut out for you. Unfortunately, that's exactly where I find myself.

## Problem 3: What is the headway of the last service?

Imagine you have a commuter service that is scheduled to arrive at your stop at 7:00 and then 7:30 in the morning. What is the headway? Well, for the 7:00 service, it's half an hour. That's fair. But the 7:30 service? Assuming there's a 7:00 service tomorrow, your headway is 23 hours and 30 minutes, right?

Plug that in to your script for calculating headways and you now have an average headway of twelve hours. Enjoying your 6 hour wait, average passenger?

If using headways to get an average waiting time, one would presumably have a ceiling on the waiting time. Especially when the headways are such that you'd be mad or critically uninformed not to check the schedule.

Why have I never seen this problem mentioned? I don't see it in the TCQSM. I don't see it in any academic paper that has used "headway" as though it is something you can touch with your hands.

Given I'm facing this issue, what do I do? I can't be the only who has thought about it.

## Conclusion

If I had a nickel for every time I've read a paper where someone has constructed a computer model of a public transport network and simply said:

> Waiting time is calculated as half of the headway.

I'd have very many nickels. The headway **of what**? Have you considered overlapping routes? Did you calculate the headway as a mean or a median? Over what time interval? What did you do if one of the arrivals is the last one for the day?

Calculating a headway is deceptively simple. If you get into the business of calculating them for whatever purpose, I implore you to clearly state exactly what you did to calculate them. Talk about corner cases. Talk about how you wrote your program to calculate them efficiently as pairs of stops.

Because I'll have your head if you tell me that you used "the headway" and leave it at that.

### Care to weigh in?

Have you dealt with calculating headways from schedules or real-time observations of transit arrivals? What issues did you come across? How did you deal with them?
