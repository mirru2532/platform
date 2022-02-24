# <img src="assets/cooonvex.jpg" height="50px" width="50px" alt=""> Convex Enjoyooor Pack <img src="assets/cooonvex.jpg" height="50px" width="50px" alt="">
[![whatevs](https://img.shields.io/npm/v/convex-enjoyooor-pack)](https://www.npmjs.com/package/convex-enjoyooor-pack) [![whatevs](https://img.shields.io/github/last-commit/mirru2532/platform)](https://github.com/mirru2532/platform/tree/main/contracts)

Ok so I put this together quick while my mom made me some tea it's basically just the Convex contracts + data in a package and maybe I'll add some scripts to search through the data but anyways you can use this because Convex didn't publish anything by themselves yet and oh did I say we have a cool logo?

## Installation

```bash
yarn add --dev convex-enjoyooor-pack
```

## Use

You import the contracts as usual or you use the `distribution`, `contracts` or `rewards` json objects I added.

For JS:

```js
const convex = require('convex-enjoyoor-pack)
```

For TS, there are no typings available as of yet so pls:

```ts
// @ts-ignore
import * as convex from "convex-enjoyoor-pack";
```