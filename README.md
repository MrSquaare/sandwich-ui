# sandwich-ui

A tasty React UI kit

## Table of Contents

- [About](#about)
- [Getting started](#getting-started)
  - [Installation](#installation)
- [Using](#using)
- [Contributing](#contributing)
- [License](#license)

## About

Sandwich UI is a React UI kit used for my personal projects.

This repository is a [monorepo](https://en.wikipedia.org/wiki/Monorepo), powered by [Turborepo](https://turborepo.org/).

It is composed of three projects:

- the [Sandwich UI library](sandwich-ui)
- the [Docs](docs)
- the [Storybook](storybook)

## Getting started

### Installation

```sh
# npm
npm install @sandwich-ui/react

# yarn
yarn add @sandwich-ui/react

# pnpm
pnpm install @sandwich-ui/react
```

## Using

```jsx
import { Button } from "@sandwich-ui/react";

function Example() {
  return (
    <Button>Click me</Button>
  );
}
```

## Contributing

Bug reports, feature requests, other issues and pull requests are welcome.
See [CONTRIBUTING.md](CONTRIBUTING.md) for more information.

## License

Distributed under the [ISC](https://choosealicense.com/licenses/isc/) License.
See [LICENSE](LICENSE) for more information.
