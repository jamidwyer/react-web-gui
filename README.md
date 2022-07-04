# react-web-ui

Intended as a boilerplate, this runs a React web app listing various available components in Docker. It's currently just a handful of components and I don't recommend using this for anything but sample code yet, but to use this Docker image:

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

## Deploy a new Docker image

`docker login username <YOUR DOCKER USERNAME>`

```sh
docker-compose build
docker tag react-web-ui <YOUR DOCKER USERNAME>/react-web-ui
docker push <YOUR DOCKER USERNAME>/react-web-ui
```

## Roadmap

https://trello.com/b/cb1FLbrm/react-web-ui

## Docker gotchas

`docker: invalid reference format.`

There may be a typo in one of the mount paths.

---

`docker: Error response from daemon: invalid mode`

There may be a typo in one of the mount paths.

---

Maybe you need to peek around the Docker filesystem.

`docker exec -t -i react-web-ui /bin/bash`
