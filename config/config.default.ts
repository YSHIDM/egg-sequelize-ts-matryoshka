import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg'
import * as path from 'path'

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1566191896114_7724'
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: false,
      withCredentials: false,
      ignore: () => true,
    },
    domainWhiteList: ['*'],
  }
  // 启动端口配置
  config.cluster = {
    listen: {
      path: '',
      port: 7002,
      hostname: '0.0.0.0',
    },
  }
  // 配置前端静态文件路径
  config.static = {
    prefix: '',
    dir: [appInfo.baseDir + '/app/public/dist', appInfo.baseDir + '/images'],
  }
  config.multipart = {
    mode: 'file',
    fileSize: '5mb',
    tmpdir: path.join(appInfo.baseDir, '/egg-multipart-tmp'),
    whitelist: [
      '.jpg', '.jpeg', // image/jpeg
      '.png', // image/png, image/x-png
    ],
    // cleanSchedule: {
    //   // run tmpdir clean job on every day 04:30 am
    //   // cron style see https://github.com/eggjs/egg-schedule#cron-style-scheduling
    //   cron: '0 30 4 * * *',
    // },
  }

  config.view = {
    mapping: {
      '.html': 'ejs',
    },
  }
  // 配置插件中间件
  config.middleware = ['graphql']
  config.authPath = [
    // '/graphql',
  ]
  // 配置grahql
  config.graphql = {
    router: '/graphql',
    app: true,
    agent: false,
    graphiql: true,
  }

  config.onerror = {

    all(err, ctx) {
      if (err.code === 'Request_fileSize_limit') {
        ctx.body = JSON.stringify({ rescode: err.status, resmassage: '文件大小不能超过5M!' })
      } else if (err.message.startsWith('Invalid filename')) {
        ctx.body = JSON.stringify({ rescode: err.status, resmassage: '文件名或后缀错误!' })
      } else if (err.code === 'Request_files_limit') {
        ctx.body = JSON.stringify({ rescode: err.status, resmassage: '请将图片数量限制在10张以内!' })
      } else {
        ctx.body = JSON.stringify({ tips: '错误信息已经输出到浏览器控制台,请联系管理员!', err })
      }

      ctx.status = 500
    },
  }

  return {
    ...config,
  }
}
