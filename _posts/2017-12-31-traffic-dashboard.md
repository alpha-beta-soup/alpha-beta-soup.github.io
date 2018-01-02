---
layout: post
title: "NZ Traffic Dashboard"
date: 2017-12-31 14:25:00 +1300
comments: true
category:
tags: ["side projects", "development", "react", "javascript", "transport", "New Zealand", "NZTA"]
---

Looking back at my ambitions for 2017 in early December, I've done OK. Getting married was obviously a huge personal milestone for me. There was one outstanding item that I'd intended to do early in the year that instead I decided to devote December to: an interactive traffic dashboard for New Zealand. In my mind's eye this would be something like a traffic control centre, [like the one in Wellington](https://www.stuff.co.nz/national/99897853/curious-city-the-team-that-keep-new-zealands-traffic-moving), which manages about two thirds of the nation's roads.

I like to pick at least one new piece of technology when I work on a personal project of this nature. This time it was [Electron](https://electronjs.org/): a way to make cross platform desktop apps using familiar tools for web development. I ended up using [Electron Forge](https://electronforge.io/) to make the process even easier, because I'd rather spend time on the actual project than on build configuration.

The goal for this project was quite a low bar initially: a map that could show the available traffic cameras exposed by the [NZTA traffic camera API](https://www.nzta.govt.nz/traffic-and-travel-information/infoconnect-section-page/about-the-apis/traffic-cameras/). When zooming and panning that map, I wanted the cameras that were displayed in the application to filter according to the [minimum bounding box](https://en.wikipedia.org/wiki/Minimum_bounding_box) defined by the user's current map extent. I wanted this simply because when browsing the NZTA's website for traffic cameras, I found it frustrating to have to click through menus (text) to access spatial information. To build such an application that could respond the way I wanted, I decided to use [React](https://reactjs.org/), and in particular Google's Material UI and [this React binding of Mapbox GL JS](https://github.com/alex3165/react-mapbox-gl) that I've been using for most of this year at work.

I found that my decision to use Electron (and therefore a local desktop application) eventually led to some other decisions that I hadn't originally intended: images from cameras could be cached locally on disk, so I store them in a sensible structure and then I can list the contents of each camera's cache, sort by [mtime](https://www.unixtutorial.org/2008/04/atime-ctime-mtime-in-unix-filesystems/), and create a looping animation for each camera. Anticipating that this would not always be a desktop application, it's just a configuration change away from using an S3 bucket to cache images and to use that to drive the animation (e.g. using `listObjectsV2` in the AWS JavaScript SDK to order images by modification time).

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">The NZTA traffic camera API only gives you instantaneous results. So I&#39;ma address that: <a href="https://t.co/4B0aoe3Lby">pic.twitter.com/4B0aoe3Lby</a></p>&mdash; ∆ Richard Law (@abetasoup) <a href="https://twitter.com/abetasoup/status/936165994837327872?ref_src=twsrc%5Etfw">November 30, 2017</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


## The NZTA APIs

In addition to the NZTA traffic camera API, I also used their Variable Message Signs API, the OpenWeatherMap API, the Mapbox vector tile API (with their traffic tiles), and trivial parts of the AWS JS SDK. There's a handful of pain points about the NZTA APIs that would be nice to see addressed in 2018.

1. You can't manage your own API keys. You have to send a message to request access, and give a reason for wanting access (although my reason was literally just "Curiosity"). Every request must also include a username and password in the request headers. However your username and password are determined for you, and you cannot change them yourself. This all smells a little bit of an immature API and API culture. As the terms of use include a requirement that you keep this information secure, I'd argue that if someone else has control of my password, then I already have no control over the security of it.

2. From doing a bit of digging into how our traffic control centres operate in New Zealand, I realised that the API only exposes a small fraction of the cameras that are on our roads. On Twitter [the NZTA posted a short video of SH2](https://twitter.com/NZTAWgtn/status/943889798405771264) in Wellington. This camera is video, as opposed to 30/60/240 second stills that the API exposes. It's also in a particularly useful position. It was argued that this is done to protect privacy (e.g. in the case of a serious accident), but I'm not sure I buy this reasoning. Cameras can already be marked "unavailable" and no images retrieved for as long as that status remains. I'd hope that this feature gets used appropriately. What worries me is whether the NZTA actually has multiple camera systems operating with different APIs. I'm a firm believer in [eating your own dog food](https://en.wikipedia.org/wiki/Eating_your_own_dog_food), so I **hope** that this API doesn't just exist for external consumption, but rather is used internally.

3. The cameras in Hamilton are almost always "under maintenance". This I don't really understand, unless there's some network connectivity issue, because it only seems to affect Hamilton. A few of the cameras in Hamilton were reliable, the rest were almost always off.

4. The API responses themselves could be a bit more useful. For instance the direction that a camera is facing would be a very useful attribute to have. Almost all of the cameras are described as being, for example, "*Northbound* on State Highway 1 at Pokeno". However the cameras are not all fixed, and indeed I watched a few being rotated and zoomed, in 30 second snapshots, as the traffic controllers monitored holiday traffic north of Wellington. They can be panned 360°, tilted, and zoomed. However the only physical camera attribute that is exposed is the location. I parsed the descriptions looking for an indication of direction, and then used that to rotate symbols in the map—but it just made it more confusing (an upside-down camera icon?). The camera facing direction would be great given the ability to tilt and rotate in Mapbox GL.

5. The Variable Message Signs API doesn't use standard characters for newlines and tabs, which is a minor annoyance, but irritating nonetheless.

## Wrapping up

All in all, this was a fun little distraction for the past month. I think it was a good idea to "time box" myself to avoid some bad habits, but also because it means I can now move on to something else for the month of January without feeling guilty. I don't consider the project "finished", although nothing ever really is, so I will probably revisit it later in the year. The code is on Github [here](https://github.com/alpha-beta-soup/traffic-dash) and there is also a loose Kanban-stype project board for it [here](https://github.com/alpha-beta-soup/traffic-dash/projects/1) where I've recorded the ideas I have for it.

<br>
{% maincolumn "./assets/traffic-dashboard/Peek 2017-12-31 15-35.gif" "A brief snapshot of "Traffic Dash" in action." %}

<br>
