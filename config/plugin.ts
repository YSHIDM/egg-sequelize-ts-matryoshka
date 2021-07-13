import { EggPlugin } from 'egg'
// import path from 'path'

const plugin: EggPlugin = {
  // static: true,
  nunjucks: {
    enable: true,
    package: 'egg-view-nunjucks',
  },
  ejs: {
    enable: true,
    package: 'egg-view-ejs',
  },
  sequelize: {
    enable: true,
    package: 'egg-sequelize-ts-upgrade',
  },
  // sequelize: {
  //   enable: true,
  //   package: 'egg-sequelize',
  // },
  // redis: {
  //     enable: true,
  //     package: 'egg-redis',
  // },
  graphql: {
    enable: true,
    package: 'egg-graphql',
  },
  oss: {
    enable: true,
    package: 'egg-oss',
  },

  // 'apollo-server-graphql': {
  //   enable: true,
  //   package: 'egg-apollo-server-graphql',
  // },
  // // token生成以及验证包
  // jwt: {
  //   enable: true,
  //   package: 'egg-jwt',
  // },
  // // 跨域
  // cors: {
  //   enable: true,
  //   package: 'egg-cors',
  // },
  // // redis缓存
  // redis: {
  //   enable: true,
  //   package: 'egg-redis',
  // },
  // validate: {
  //   enable: true,
  //   package: 'egg-validate',
  // },
  // bulls: {
  //   enable: true,
  //   path: path.join(__dirname, '../lib/plugin/egg-bulls'),
  // },
  // tracer: {
  //   enable: true,
  //   package: 'egg-apigw-tracer',
  // },
}

export default plugin
