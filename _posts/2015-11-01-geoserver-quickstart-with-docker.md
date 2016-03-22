---
layout: post
title: "GeoServer Quickstart with Docker"
date: 2015-11-01 21:06:00 +1300
comments: true
category: [Tutorials, GeoServer, Docker]
tags: ["GeoServer", "Docker"]
---

<center>
{% fullwidth "/assets/docker.png" %}

{% fullwidth "/assets/geoserver.png" %}
</center>

I've been exploring [GeoServer](geoserver.org/) recently, while also doing the same with [Docker](https://www.docker.com/). I figured I'd share a simple Dockerfile I wrote for getting started with GeoServer (Master) and some extensions, using Docker. I was pleasntly surprised how easy this is to do, after reading a few horrow stories online about getting off the ground with GeoServer. Obviously there's a lot of additional configuration required before deploying GeoServer, but Docker does at least make it very easy to try something out by ensuring your on the same page as somebody else.

```dockerfile

# Dockerfile
FROM debian:wheezy

# Update the sources list
RUN apt-get update
RUN apt-get upgrade -y

# Install basic applications
RUN apt-get install -y build-essential wget unzip

# Get the JRE/JDK installation
RUN apt-get install -y default-jre default-jdk
RUN apt-get install -y openjdk-7-jre openjdk-7-jdk
ENV JAVA_HOME=/usr/lib/jvm/java-1.7.0-openjdk-amd64

# Get GeoServer
ENV GEOSERVER_HOME=/usr/share/geoserver/
RUN mkdir $GEOSERVER_HOME
RUN wget http://ares.boundlessgeo.com/geoserver/master/geoserver-master-latest-bin.zip
RUN cp geoserver-master-latest-bin.zip $GEOSERVER_HOME
RUN unzip $GEOSERVER_HOME/geoserver-master-latest-bin.zip -d $GEOSERVER_HOME
RUN rm $GEOSERVER_HOME/geoserver-master-latest-bin.zip
ENV GEOSERVER_VER=2.9

# A plugin
ENV A_PLUGIN=geoserver-$GEOSERVER_VER-SNAPSHOT-netcdf-plugin
RUN wget http://ares.boundlessgeo.com/geoserver/master/ext-latest/$A_PLUGIN.zip
RUN cp $A_PLUGIN.zip $GEOSERVER_HOME
RUN ls $GEOSERVER_HOME
RUN ls $GEOSERVER_HOME/geoserver-$GEOSERVER_VER-SNAPSHOT/
RUN unzip $GEOSERVER_HOME/$A_PLUGIN.zip -d $GEOSERVER_HOME/geoserver-$GEOSERVER_VER-SNAPSHOT/webapps/geoserver/WEB-INF/lib/
RUN rm $GEOSERVER_HOME/$A_PLUGIN.zip

ENV GEOSERVER_HOME=$GEOSERVER_HOME/geoserver-$GEOSERVER_VER-SNAPSHOT/
WORKDIR $GEOSERVER_HOME/bin
```

Then to build and run the Docker container:

```bash

docker build -t user/geoserver-master:test .
docker run -it --net="host" user/geoserver-master:test
./startup.sh
```

Now you have GeoServer running, so head to `localhost:8080/geoserver`, and login with the default user and password: `admin` and `geoserver`.

If you want to try out GeoServer with data on your machine, you can just mount your data volume to the Docker container and point GeoServer to it in the admin panel. For instance, I mount `/home/data/sampledata` to `$GEOSERVER_HOME/data_dir/sampledata` with [Docker Compose](https://docs.docker.com/compose/).

There. Now play around with GeoServer. I expect a cheque for 5% of what you would have spent on ArcGIS Server.

### Update

Docker hygeine is important, although I'm still figuring it out. I've made the image use Debian Wheezy as a lightweight alternative to the Ubuntu 15.04 image I had before. It was also broken because I hadn't added the command to install `wget`, among a litany of other problems. It usually pays to test things, sorry if you tried it out earlier!
