import { Application } from 'egg'
import { Messenger } from './typings/app'
export default class AppBootHook {
  public app: Application

  constructor(app: Application) {
    console.log('this :>>', this)
    this.app = app
  }

  public async configWillLoad() {
    // 此时 config 文件已经被读取并合并，但是还并未生效
    // 这是应用层修改配置的最后时机
    // 注意：此函数只支持同步调用
  }
  public async configDidLoad() {
    // 配置文件加载完成
  }

  public async didLoad() {
    // 所有的配置已经加载完毕 文件加载完成
    // 可以用来加载应用自定义的文件，启动自定义的服务
  }

  public async willReady() {
    // if (this.app.config.env === 'local' || this.app.config.env === 'unittest') {
    //   // force: true: 强制建表,如果该表已经存在，则将其首先删除; force: false: 没有表时建表, 默认 false,如果已经存在，则不执行任何操作; alter: true 这将检查数据库中表的当前状态（它具有哪些列，它们的数据类型等），然后在表中进行必要的更改以使其与模型匹配
    //   await this.app.model.sync({ force: false })
    // }
    // 所有的插件都已启动完毕，但是应用整体还未 ready
  }

  public async didReady() {
    // 应用已经启动完毕
  }
  public on(event: string | symbol, listener: (...args: unknown[]) => void): Messenger {
    return this.app.messenger.on(event, listener)
  }
  // public agent(func, params: any[]) {
  //     ctx.state.user = params.pop();
  //   return () => func(params)
  // }
  public async serverDidReady() {
    // serverDidReady
    // const alinode:any = { process }
    // log('process.versions', alinode);

    // const ctx = this.app.createAnonymousContext();
    // // 定时器-应收提醒-计息
    // this.on('receivableRemind', ([scheduleRecord, user]) => {
    //   ctx.state.user = user;
    //   ctx.service.contractExecPlanSvc.execSchedule(scheduleRecord);
    // });
    // // 定时器-应收提醒
    // this.on('execScheduleRemind', ([scheduleRecord, user]) => {
    //   ctx.state.user = user;
    //   ctx.service.receivableSvc.execScheduleRemind(scheduleRecord);
    // });
    // // 定时器-应收逾期提醒
    // this.on('receivableOverdueMessage', ([scheduleRecord, user]) => {
    //   ctx.state.user = user;
    //   ctx.service.receivableSvc.receivableOverdueMessage(scheduleRecord);
    // });
    // // 定时器-应收逾期
    // this.on('receivableOverdue', () => {
    //   // 检查执行计划逾期,并修改状态
    //   ctx.service.contractExecPlanSvc.extenPlanOverdue();
    //   // 检查应收逾期,并修改状态
    //   ctx.service.receivableSvc.receivableOverdue();
    //   // 检查收款项逾期,并修改状态
    //   ctx.service.receiveItemSvc.receiveItemOverdue();
    //   // 检查部分应收逾期,并修改状态
    //   ctx.service.receivablePartSvc.receivablePartOverdue();
    // });
    // this.on('tip', () => {
    //   ctx.service.commonSvc.tip()
    // });
  }
  public async beforeClose() {
    // 应用即将关闭
  }
}
