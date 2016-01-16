---
layout: post
title: "Geodata web services"
date: 2016-01-16 21:04:51 +1300
comments: true
category: PostGIS
tags: ["PostGIS", "Node", "Express", "GeoJSON"]
---

Bill Dollins has a [downright useful tutorial](http://blog.geomusings.com/2013/12/11/building-a-simple-geodata-service-with-node-and-amazon-rds/) over on his blog for building a straightforward geodata service with Node, Express, PostgreSQL and Amazon RDS.

I'm actually surprised at how few of these sorts of server applications actually exist, given that they're reasonably straightforward to set up, and marvelous to use. A project I've been working on recently at work consists of a WebSocket server (using ws4py) that operates as an aggregator for real-time spatial data from a variety of sources (also implemented as WebSockets). Connecting to it is as simple as `wss://host:port/api-version/service` and then valid GeoJSON gets pushed to the browser. I don't think I can say much about the project, but I can say it has transformed how I see the delivery of spatial data over the Internet for time-critical applications. I'd love if the NZTA got around to implementing something like this for its traffic alert APIs.

I also have the beginnings of a QGIS plugin that connects to a specified WebSocket and will render arriving messages, provided they come as GeoJSON.
