# react-web-ui

Intended as a boilerplate, this runs a React web app in Docker. It's currently just two half-baked components: 1. A list of items that use hard-coded local data. 2. A search box that filters as you type.

I don't recommend using this for anything but sample code yet, but to use this Docker image:

`docker run jami/react-web-ui`

## Requirements

Other versions might work. These ones did.

Docker

node 14.15.0

npm 8.1.2

## Local development

Clone to react-web-ui, change to that directory, then:

`docker-compose up --build`

Open http://localhost:3000.

## Docker gotchas

`docker: invalid reference format.`

There may be a typo in one of the mount paths.

---

`docker: Error response from daemon: invalid mode`

There may be a typo in one of the mount paths.

---

Maybe you need to peek around the Docker filesystem.

`docker exec -t -i react-web-ui /bin/bash`
