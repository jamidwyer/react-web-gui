# react-web-ui

A UI library I work on when I need a component. Work in progress.

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

### Requirements

Other versions might work. These ones did.

node 22.2.0

npm 10.8.2

### Development

Clone to react-web-ui, change to that directory, then:

`npm i && npm run dev`

Component examples will load here: http://localhost:9500.

### Release

Set up a [personal access token](https://github.com/s
ettings/tokens) with repo and write:packages access.

Add it to in your .npmrc:

```sh
registry=https://registry.npmjs.org/
@YOUR_GITHUB_USERNAME:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=YOUR_AUTH_TOKEN
```

Bump the version number in package.json.

`npm run rollup && npm publish`

To see the changes, bump the version number in the project where you are using react-web-ui and run `npm i`.

## Roadmap

https://trello.com/b/cb1FLbrm/react-web-ui

## References

[How to Create and Publish a React Component Library](https://dev.to/alexeagleson/how-to-create-and-publish-a-react-component-library-2oe)
