---
layout: post
title: "GeoServer Quickstart with Docker"
date: 2015-11-01 21:06:00 +1300
comments: true
category: [Tutorials, GeoServer, Docker]
tags: ["GeoServer", "Docker"]
---

<center>
[![](/assets/docker.png)](https://www.docker.com/)

[![](/assets/geoserver.png)](geoserver.org)
</center>

I've been exploring [GeoServer](geoserver.org/) recently, while also doing the same with [Docker](https://www.docker.com/). I figured I'd share a simple Dockerfile I wrote for getting started with GeoServer (Master) and some extensions, using Docker. I was pleasntly surprised how easy this is to do, after reading a few horrow stories online about getting off the ground with GeoServer. Obviously there's a lot of additional configuration required before deploying GeoServer, but Docker does at least make it very easy to try something out by ensuring your on the same page as somebody else.

```dockerfile
FROM ubuntu:15.04

# Update the sources list
RUN apt-get update
RUN apt-get upgrade -y

# Install basic applications
RUN apt-get install -y build-essential vim nano less unzip

# Get the JRE/JDK installation
RUN apt-get install -y default-jre default-jdk
RUN apt-get install -y openjdk-7-jre openjdk-7-jdk
ENV JAVA_HOME=/usr/lib/jvm/java-1.7.0-openjdk-amd64

# Get GeoServer
RUN mkdir /usr/share/geoserver/
RUN wget http://ares.boundlessgeo.com/geoserver/master/geoserver-master-latest-bin.zip
RUN cp geoserver-master-latest-bin.zip /usr/share/geoserver/
RUN unzip /usr/share/geoserver/geoserver-master-latest-bin.zip -d /usr/share/geoserver
RUN rm /usr/share/geoserver/geoserver-master-latest-bin.zip
ENV GEOSERVER_HOME=/usr/share/geoserver/geoserver-2.8-SNAPSHOT

# NetCDF plugin
RUN wget http://ares.boundlessgeo.com/geoserver/2.8.x/ext-latest/geoserver-2.8-SNAPSHOT-netcdf-plugin.zip
RUN cp geoserver-2.8-SNAPSHOT-netcdf-plugin.zip /usr/share/geoserver/
RUN unzip /usr/share/geoserver/geoserver-2.8-SNAPSHOT-netcdf-plugin.zip -d /usr/share/geoserver/geoserver-2.8-SNAPSHOT/webapps/geoserver/WEB-INF/lib/
RUN rm /usr/share/geoserver/geoserver-2.8-SNAPSHOT-netcdf-plugin.zip

WORKDIR /usr/share/geoserver/geoserver-2.8-SNAPSHOT/bin
```

Then to build and run the Docker container:

```bash
docker build -t user/geoserver-2.8:test .
docker run -it --net="host" user/geoserver-2.8:test
./startup.sh
```

Now you have GeoServer running, so head to `localhost:8080/geoserver`, and login with the default user and password: `admin` and `geoserver`.

If you want to try out GeoServer with data on your machine, you can just mount your data volume to the Docker container and point GeoServer to it in the admin panel. For instance, I mount `/home/data/sampledata` to `$GEOSERVER_HOME/data_dir/sampledata` with [Docker Compose](https://docs.docker.com/compose/).

There. Now play around with GeoServer. I expect a cheque for 5% of what you would have spent on ArcGIS Server. (I'm going to be rich! :dollar:)
