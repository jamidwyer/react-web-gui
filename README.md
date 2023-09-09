# react-web-ui

A UI library I work on when I need a component. It is neither good nor useful (yet?).

## Use

`npm i @jamidwyer/react-web-ui --save`

```jsx
import { Component } from "@jamidwyer/react-web-ui"

render {
    return (
        <Component />
    )
}
```

## Contributing

`npm i`
`npm run start`

### Requirements

Other versions might work. These ones did.

Docker

node 14.17.0

npm 8.1.2

### Development

Clone to react-web-ui, change to that directory, then:

Open http://localhost:9500.

### Release

Set up a [personal access token](https://github.com/settings/tokens) with repo and write:packages access.

Add it to in your .npmrc:

```sh
registry=https://registry.npmjs.org/
@YOUR_GITHUB_USERNAME:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=YOUR_AUTH_TOKEN
```

Bump the version number in package.json.

`npm run rollup`
`npm publish`

To see the changes, bump the version number in the project where you are using react-web-ui and run `npm i`.

## Roadmap

https://trello.com/b/cb1FLbrm/react-web-ui

## Docker

You can also run this in docker with

`docker-compose up --build`

### Docker gotchas

`docker: invalid reference format.`

There may be a typo in one of the mount paths.

---

`docker: Error response from daemon: invalid mode`

There may be a typo in one of the mount paths.

---

Maybe you need to peek around the Docker filesystem.

`docker exec -t -i react-web-ui /bin/bash`

## References

[How to Create and Publish a React Component Library](https://dev.to/alexeagleson/how-to-create-and-publish-a-react-component-library-2oe)
