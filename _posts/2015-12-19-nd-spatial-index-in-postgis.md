---
layout: post
title: "3D spatial indexes in PostGIS"
date: 2015-12-19 14:37:19 +1300
comments: true
category: [PostGIS, Spatial Indexes]
tags: ["PostGIS", "Spatial Indexes"]
---

### And even 4D spatio-teporal indexes!

I have just watched Paul Ramsay's (CartoDB) breakout presentation from *PGConf Silicon Valley 2015*. I love watching these kinds of videos. They're reasonably short (~40 minutes) so are good while you're eating lunch or killing time. They also tend to have little nuggets of wisdom to solve "gotchas" that for some reason no one has ever told you about. This presentation in particular has lots of these for using PostGIS. One I did not know about was the ability to specify an n-dimensional index in PostGIS. The typical way to construct a two-dimensional GIST index in PostGIS is to do:

`CREATE INDEX idx ON table USING gist(geom);`

However if you have XYZ or XYZT data and you want to issue queries that take advantage of these additional dimensions with a multidimensional index, you will need:

`CREATE INDEX idx ON table USING gist(geom gist_geometry_ops_nd);`

The different operator, internally, means that the spatial functions use the `&&&` operator, rather than the `&&` operator.

I have been thinking recently about trying to get my hands on some LiDAR data. Acquiring this data is apparently very difficult at the moment. But if you use PostGIS, you're now well-equipped to deal with it... if you can get your hands on it :information_desk_person:

In addition, PostGIS allows you to switch out the geometry library from the Geometry Engine Open Source (GEOS) to the SFCGAL (SF (?) Computational Geometry Algorithms Library). SFCGAL is not as broad as GEOS, so if you do make the switch, internally a lot of your functions will still use GEOS. However, as Paul Ramsay notes, SFCGAL has a bunch of additional functions that GEOS does not. These include some interesting 3D functions:

- `ST_3DIntersection`
- `ST_Tesselate`
- `ST_3DArea`
- `ST_Extrude`
- `ST_ForceLHR`
- `ST_Orientation`
- `ST_Minkowski`
- `ST_StraightSkeleton`
- `ST_ApproximateMedialAxis`

SFCGAL will need to be compiled, and then activated within PostgreSQL:

1. `CREATE EXTENSION postgis_sfcgal;`
2. `SET postgis.backend = 'sfcgal';`

There is also a dedicated PostgreSQL extension for storing point cloud data: [https://github.com/pgpointcloud/pointcloud](https://github.com/pgpointcloud/pointcloud)

---

Also in the video, there is a tricky philosophical question, with important geometric implications (never thought I'd say that): *What is the intersection of two disjoint polygons?* The sound of a tree falling in the woods? The sound of one hand clapping? Close. It's a polygon representing the presence of nothing: `POLYGON EMPTY`. And empty geometry is not `NULL`. It's actually more like `0` (something with no magnitude, but not exactly nothing).

Another way to get `GEOMETRY EMPTY` is to use a negative buffer value that is larger than the geometry that is being buffered.

---

<center><iframe width="533" height="400" src="http://www.youtube.com/embed/GSuZP89UdGs" frameborder="0" allowfullscreen></iframe></center>

---

What did you find useful from this presentation?

Incidentally, if someone can tell me what the "SF" in SFCGAL stands for, I'd really appreciate it. It's driving me nuts. (Spatial Functions?)
