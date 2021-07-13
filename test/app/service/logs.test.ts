import { app } from 'egg-mock/bootstrap'
// import { Op } from 'sequelize'
// import * as assert from 'assert'
// import * as mock from 'egg-mock'


describe('get()', () => {

  it('get', async () => {
    // 创建 ctx
    const ctx = app.mockContext()

    // 通过 ctx 访问到 service.user
    const logs = await ctx.service.logSvc.batchAdd([{
      title: 'add',
      content: 'add logs',
      like: 1,
    }, {
      title: 'add2',
      content: 'add logs2',
      like: 2,
    }])
    console.log('get', logs)
    // assert(logs);
  })
  // it('add', async () => {
  //     // 创建 ctx
  //     const ctx = app.mockContext();
  //     // 通过 ctx 访问到 service.user
  //     console.log('ctx', ctx)
  //     const logs = await ctx.service.logSvc.addLogs({
  //         title: 'add',
  //         content: 'add logs',
  //         like: 1
  //     })
  //     console.log('add', logs)
  //     // assert(logs);
  // });
  // it('update', async () => {
  //     // 创建 ctx
  //     const ctx = app.mockContext();
  //     // 通过 ctx 访问到 service.user
  //     const logs = await ctx.service.logSvc.updateLogs({
  //         id: 'IMGhek0eLOq',
  //         title: 'update',
  //         content: 'update logs',
  //         like: 1
  //     })
  //     console.log('update', logs)
  //     // assert(logs);
  // });
})
