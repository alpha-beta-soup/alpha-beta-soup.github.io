---
layout: post
title: "Parallel geocoding in Python with geopy"
date: 2015-09-10 10:24:00 +1200
comments: true
category: [Tutorials, Portfolio, Geocoding, Python]
tags: ["geocoding", "geppy"]
---

Geocoding: the process of taking an address as a piece of semi-structured text, and returning a coordinate somewhere on the surface of the Earth. It's very unlikely that you're not going to use an online service to do this. This means a few things. Firstly, that you have to decide on a geocoding provider. Secondly, you're going to have to sit tight while the geocoding takes place. Python can address both of these issues for you.

## [GeoPy](https://geopy.readthedocs.org/en/1.11.0/)

GeoPy is a Python 2/3 module for accessing a whole suite of geocoding web services. As of version 1.10.0, these include: ArcGIS; Baidu; Bing; DataBC; GeocodeFarm; GoecoderDotUS; GeoNames; Google; IGN France; LiveAddress; NaviData; Nominatim (OSM); OpenCage; OpenMapQuest; Yahoo! BOSS Place Finder; What3Words; and Yandex.

Of these, I would recommend Google if you are OK with a reasonably low limit but high tolerance to poorly-formatted addresses, or otherwise Nominatim. Nominatim is free, requires no API token, and only uses OpenStreetMap data. However, OpenMapQuest is even better, as it is also based on OSM, but doesn't restrict you to geocoding in multiple threads.

## Basic usage

Using GeoPy is great, because it abstracts away all the details of which provider you're connecting to. Although I'm yet to try it, it would be trivial to iterate over a set of providers and actually produce multiple geocoded locations per address, perhaps as part of a process to determine error, or to average the returned locations.

Here's a short sample demonstrating the simplicity of the module:

```python

from geopy.geocoders import Nominatim
geolocator = Nominatim(country_bias='New Zealand', timeout=4)
geocoded = geolocator.geocode('Raglan, Waikato', exactly_one=True)
if geocoded is not None:
    # success
    lat = geocoded.latitude
    lon = geocoder.longitude
else:
    # Here, perhaps you can run the geocoding function again,
    # after cleaning your input a little bit
    # Then you have recursion until you get a result!
    pass
```

If you want to use OpenMapQuest (for example), you just need to swap it out for Nominatim, and also remove the country bias (which OpenMapQuest doesn't support).

## Multiprocessing

There's still a problem, despite all this. Geocoding takes forever. All web services take some time, really. But geocoding is special, given what is actually going on behind the scenes. A list of roughly 500 addresses, most of which needed the recursion I alluded to above, took me about 15 minutes to resolve. Duane Wilkins [posted on LinkedIn recently](https://www.linkedin.com/pulse/easy-address-geocoding-duane-wilkins) that using the Google geocoding service via Google Sheets resulted in about 800 addresses done in about 5 minutes. I suspect that they were clean, but Google is damn fast at geocoding. You'd expect that relative speed difference though: Nominatim is sitting on donated hardware.

However both of these are very slow, in my opinion. Agonisingly so.

A good Python free lunch to speed this up is to launch mutliple geoprocessing calls asynchronously. In my case, I had a small number of very long and poorly-formatted adddresses that took forever to resolve because the geocoder had to be performed multiple times, most of which resulted in nothing as the string was progressively cleaned, or indeed stripped of information that the geocoder simply could not understand ("5 nm out to sea east of Tauranga" is the best example). What if I could get these slow processes running, and run others alongside, in parallel? This is totally possible! And because Python is batteries-included, it is very, very easy!

In my case, I had a list of objects (`sightings`) which are members of a class that has a method called `geocode` that essentially launches the geocoding routine I showed you above. (In my case, the function doesn't return anything, but has the side-effect of setting each Address object's `latitude` and `longitude`.)

```python

import multiprocessing

addresses = # Gather a list of Address objects with a `geocode`

def geocode_worker(address):
    address.geocode()
    return address

def main():
    # Start as many worker processes as you have cores
    pool = multiprocessing.Pool(processes=multiprocessing.cpu_count())
    # Apply geocode worker to each address, asynchronously
    addresses = pool.map(geocode_worker, addresses)

if __name__ == '__main__':
    main()
```

{% newthought "A quick gotcha" %} is that the worker function has to be [able to be pickled](http://docs.python.org/library/pickle.html#what-can-be-pickled-and-unpickled). In simple terms, you have to have the worker function at the top level. The above snippet would not work if `geocode_worker` were defined within `main`. In that case, you'd see this error:

```

cPickle.PicklingError: Can't pickle <type 'function'>: attribute lookup __builtin__.function failed
```

{% newthought "Don't use Nominatim for this!" %} I made the mistake of *not* reading [the usage restrictions](http://nominatim.openstreetmap.org/) of the geocoding service, and forgetting a debug switch, and then launched tens of requests at the same time, repeatedly, hundreds of times, and then had my IP address blocked. Currently I can't even *visit* [http://nominatim.openstreetmap.org/](http://nominatim.openstreetmap.org/), let alone use the geocoder.

The restriction is that you must use a single thread. That is, you must not do what I just showed you using Nominatim as your geocoding service, or you will end-up thrashing their limited resources. You also should really cache the results as they come in.

However, OpenMapQuest uses Nominatim but does not have usage restrictions. You can launch some nice parallel processes with this geocoder... just be respectful.

## Results

I achieved a speed-up of around 20x over the full set. The small number of dirty addresses that earlier caused the geocoder to hang still did so, but real work was going on around them; they were no longer blocking.

Looking at the logs, here's what the difference in processing looks like for a sample of my addresses. When you see `fail`, that is when my recursion kicks in that applies an algorithm to clean the address string before trying to geocode again.

```

'Gluepot Road, Oropi, Tauranga, North Island' ← geocoder starting up
'Gluepot Road, Oropi, Tauranga, New Zealand' ← fail
'Gluepot Road, Tauranga, New Zealand' -37.8475939 176.1500778 ← success
'Maungaraki, Lower Hutt, North Island' ← geocoder starting up
'Maungaraki, Lower Hutt, New Zealand' -41.2058337 174.8800422 ← success
'Rimutaka Ranges, Wairarapa, North Island' ← geocoder starting up
'Rimutaka Ranges, Wairarapa, New Zealand' ← fail
'Rimutaka, Wairarapa, New Zealand' -41.3573081 175.0005109 ← success
'Mourea, Rotorua, North Island' ← geocoder starting up
'Mourea, Rotorua, New Zealand' -38.0442035 176.3261444 ← success
'Tauranga, North Island' ← geocoder starting up
'Tauranga, New Zealand' -37.6867319 176.1673614 ← success
'Waihopai Valley, Marlborough, South Island' ← geocoder starting up
'Waihopai Valley, Marlborough, New Zealand' -41.5149705 173.7897351 ← success
'At sea off the coast of the Bay of Plenty, North Island' ← geocoder starting up
'At sea off the coast of the Bay of Plenty, New Zealand' ← fail
'At Bay Plenty, New Zealand' ← fail
'sea off the coast of the Bay of Plenty, New Zealand' ← fail
'Bay of Plenty, New Zealand' -37.9503755 176.938287362 ← success
'Taupo, North Island' ← geocoder starting up
'Taupo, New Zealand' -38.6883048 176.0755486 ← success
Done in 16s
```

```

'Gluepot Road, Oropi, Tauranga, North Island' ← geocoder starting up
'Maungaraki, Lower Hutt, North Island' ← geocoder starting up
'Rimutaka Ranges, Wairarapa, North Island' ← geocoder starting up
'Mourea, Rotorua, North Island' ← geocoder starting up
'Waihopai Valley, Marlborough, South Island' ← geocoder starting up
'Tauranga, North Island' ← geocoder starting up
'At sea off the coast of the Bay of Plenty, North Island' ← geocoder starting up
'Taupo, North Island' ← geocoder starting up
'Tauranga, New Zealand' -37.6867319 176.1673614 ← success
'Mourea, Rotorua, New Zealand' -38.0442035 176.3261444 ← success
'Waihopai Valley, Marlborough, New Zealand' -41.5149705 173.7897351 ← success
'Taupo, New Zealand' -38.6883048 176.0755486 ← success
'Gluepot Road, Oropi, Tauranga, New Zealand' ← fail
'Rimutaka Ranges, Wairarapa, New Zealand' ← fail
'Maungaraki, Lower Hutt, New Zealand' -41.2058337 174.8800422 ← success
'At sea off the coast of the Bay of Plenty, New Zealand' ← fail
'Gluepot Road, Tauranga, New Zealand' -37.8475939 176.1500778 ← success
'Rimutaka, Wairarapa, New Zealand' -41.3573081 175.0005109 ← success
'At Bay Plenty, New Zealand' ← fail
'sea off the coast of the Bay of Plenty, New Zealand' ← fail
'Bay of Plenty, New Zealand' -37.9503755 176.938287362 ← success
Done in 4s
```

Notice the difference? In the latter case, there are multiple processes: 8 addresses get geocoded at once. They don't return in order because they're all happening at the same time and take different lengths of time to complete depending on their complexity. Failing addresses don't prevent others from getting underway, and the whole process is so much smoother.

The blocking geocoder ran in 16 seconds, while the second took only 4 seconds. Extrapolate that over hundreds of addresses, and before you declare that that is still not worth the effort, look how little code I had to write. It pays off even for very small, one-off jobs.

There is much more that can be done with Python's builtin multiprocessing, particularly using queues. There are a bunch of third-party modules that also implement the idea. I encourage you to explore, perhaps by looking at tutorials for how to write a daemon, and then make something that polls mutliple related APIs at the same time, populating a common database in near real time.
