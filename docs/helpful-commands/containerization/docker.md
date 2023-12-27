# Docker

Docker is a tool used to containerize applications so that they run consistently across machines.

## Docker Specific
`docker rm -f $(docker ps -a -q)` Remove all docker containers

`docker rmi -f $(docker images -a -q` Remove all docker images

`docker rm $(docker stop $(docker ps --quiet --filter name=<containerName>))` Stop and remove docker container by name

`docker ps` List docker containers

`docker exec -it {containername} bin/bash` SSH into docker container

`docker build --progress=plain -t app-name:1.0 .` Remove special formatting which can collapse lines and hide some output

## Docker Compose

`docker-compose up` Start the docker-compose.yaml file in the same directory

`docker-compose -f docker-compose-local.yaml up` Startup the docker compose file specified

`docker-compose up --force-recreate` Start docker compose and use new containers rather than previously used containers that have been stopped

docker compose docs: https://docs.docker.com/engine/reference/commandline/compose

docker compose up docs: https://docs.docker.com/engine/reference/commandline/compose_up
