# hackernews-async-ts

model 多代继承

[Hacker News](https://news.ycombinator.com/) showcase using typescript && egg

## QuickStart

### Development

```sh
npm i
npm run dev
open http://localhost:7002/
```

Don't tsc compile at development mode, if you had run `tsc`
then you need to `npm run clean` before `npm run dev`.

### Deploy

```bash
npm run tsc
npm start
```

### Npm Scripts

- Use `npm run lint` to check code style
- Use `npm test` to run unit test
- se `npm run clean` to clean compiled js at development mode once

### Requirement

- Node.js 14.x
- Typescript 4.1+

## 相关教程

[使用ts版的eggjs来搭建api](https://blog.tcs-y.com/2018/09/28/eggjs-ts-project/)
