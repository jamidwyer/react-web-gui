# react-web-gui

Intended as a boilerplate, this runs a React web app in Docker. It's currently just a list of items that use hard-coded local data.

I don't recommend using this for anything but sample code yet, but to use this Docker image:

`docker run jami/react-web-gui`

## Requirements

Other versions might work. These ones did.

Docker

node 14.15.0

npm 8.1.2

## Local development

Clone to react-web-gui, change to that directory, then:

`docker run --rm -v build:/var/www/build -p 3000:80 react-web-gui`

Open http://localhost:3000.

Live reload will happen, but for now, you have to build and restart locally.

`sudo docker build -t react-web-ui .`

Ctrl-C to stop the running docker container, then:

`sudo docker run --rm -p 3000:80 react-web-ui`

## Docker gotchas

`docker: invalid reference format.`

There may be a typo in one of the mount paths.

---

`docker: Error response from daemon: invalid mode`

There may be a typo in one of the mount paths.

---

Maybe you need to peek around the Docker filesystem.

`docker exec -t -i react-web-gui /bin/bash`
