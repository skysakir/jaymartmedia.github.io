---
slug: nginx-reverse-proxy
title: Setting up an NGINX reverse proxy
authors: jaymartin
tags: [NGINX, Linode]
---

In this blog post I will show you how to set up an NGINX reverse proxy which will allow you to serve multiple sites on port 80 and 443 (default http/https ports) from a single server.

<!--truncate-->

## Overview

## What is a reverse proxy and why would I need one?

## Configuration

The Linode, Docker and example app set up steps are completely optional.

I am using Linode because it's cheap and easy to get a server up and running with a public IP address. If you have an existing VPS, or physical server/computer on your home network then you can use that.

I am using Docker as a simple way to run multiple site to demonstrate how the reverse proxy works. If you're watching this video, you likely already have multiple apps running that you would like to put the reverse proxy in front of. You are welcome to follow through the Docker steps as a way to get some hands-on experience as part of the tutorial, or you can just use your existing apps.

### Linode VPS (optional)

### Install Docker (optional)

The following steps to set up Docker on Debian were taken from the Docker site. Feel free to refer to the [first-party documentation](https://docs.docker.com/engine/install/debian/).

To check if you have Docker installed already you can run `docker --version`. If this returns a Docker version, then you may be good to go, otherwise you can follow the steps below.

```sh
# Setup apt repositories for docker
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/debian/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

# Add the repository to Apt sources:
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/debian \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update

# Install docker
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

# Test docker
sudo docker run hello-world
```

### Startup example apps in Docker (optional)

If you have chosen to install Docker, you can use the following commands to run three instances of the [micro-express](https://hub.docker.com/r/jaymartmedia/micro-express) Docker container which can be used to test the reverse proxy. These commands will set up the containers to listen on ports 5000, 5001, 5002 and each return a unique message to indicate which container received the request. You can change the INSTANCE_ID and MESSAGE environment variables to be something more memorable/meaningful to you if you want to.

```sh
docker run -d -p 5000:3000 --name 000 -e MESSAGE="Hello from instance RED"   -e INSTANCE_ID="RED"   jaymartmedia/micro-express:0.0.1
docker run -d -p 5001:3000 --name 001 -e MESSAGE="Hello from instance GREEN" -e INSTANCE_ID="GREEN" jaymartmedia/micro-express:0.0.1
docker run -d -p 5002:3000 --name 002 -e MESSAGE="Hello from instance BLUE"  -e INSTANCE_ID="BLUE"  jaymartmedia/micro-express:0.0.1
docker run -d -p 5003:3000 --name 003 -e MESSAGE="Hello from instance ROOT"  -e INSTANCE_ID="ROOT"  jaymartmedia/micro-express:0.0.1
```

Run the following CURL commands on the server to test the containers

```sh
curl localhost:5000 # Should return "Hello from instance RED"   (or the message you specified if you change it)
curl localhost:5001 # Should return "Hello from instance GREEN" (or the message you specified if you change it)
curl localhost:5002 # Should return "Hello from instance BLUE"  (or the message you specified if you change it)
curl localhost:5003 # Should return "Hello from instance ROOT"  (or the message you specified if you change it)
```

Run the following CURL commands from another machine (or enter each URL in your browser) to make sure that your app is publicly accessible. If you are using a computer on your home network you will have to set it up to be publicly accessible, likely by configuring NAT rules in your router. This is outside of the scope of this tutorial, but you can refer to [this superuser answer](https://superuser.com/a/965590) and Google "{router model} NAT setup" to get you started in the correct direction.

```sh
# Replace 123.123.123.123 with the public IP address of the server
# You could also go to 123.123.123.123:5000 in your browser if you don't have CURL installed
curl 123.123.123.123:5000 # Should return "Hello from instance RED"
curl 123.123.123.123:5001 # Should return "Hello from instance GREEN"
curl 123.123.123.123:5002 # Should return "Hello from instance BLUE"
curl 123.123.123.123:5003 # Should return "Hello from instance ROOT"
```

## DNS set up

The Domain Name System is used to point human-readable domain names to specific IP addresses. DNS also does other things, but pointing domain names to IPv4 addresses with "A records" is all we will be doing in this blog post.

If you own a domain name, you will need to create "A records" which point to the public IP address of your server. If your domain is in use, then you can use subdomains as I have in some of the examples below. For TTL (time-to-live) any value works, but for testing frequent changes low values such as 300-600 seconds (5-10 minutes) is convenient.

Example of A record in CPanel:
![A record in CPanel](nginx-reverse-proxy/cpanel-dns.jpg)

Example of A record in Namecheap:
![A records in Namecheap](nginx-reverse-proxy/namecheap-dns.jpg)

Once the A records are set up, they can take some time to [propagate](https://www.digicert.com/faq/dns/what-is-dns-propagation). You can use a tool such as https://dnschecker.org/ to check whether they have propagated.

Once the DNS A records have propagated you can visit the domain

## NGINX

### Install NGINX

### Understand the default NGINX configuration

### Configure NGINX as a reverse proxy

## Certbot (technically optional)

### Install Certbot

### Use Certbot to add TLS certificates for each domain

## Summary