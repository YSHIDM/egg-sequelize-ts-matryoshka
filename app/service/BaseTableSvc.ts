import { Service } from 'egg'
import { BaseTableModel } from '../model/BaseTable'
import { Transaction } from 'sequelize'
// 并不需要
export default class LogSvc extends Service {
  model: ReturnType<typeof BaseTableModel>;
  // (...args: any) => any
  constructor(ctx) {
    super(ctx)
    this.model = this.ctx.model.BaseTable
  }
  /**
   * 批量新增
   * @param objArray 数据列表
   * @param transaction 事务
   */
  public async batchAdd(objArray, transaction?: Transaction) {
    objArray = objArray.map(obj => {
      obj.id = this.app['genId']('LOG')
      return obj
    })
    return await this.model.bulkCreate(objArray, { transaction })
      .then(data => data.map(d => d.toJSON()))
  }
  /**
   * 添加日志
   * @param obj 日志
   * @param transaction 事务
   * @return {Promise<any>} 日志
   */
  public async addLog(obj, transaction?) {
    let options = {}
    if (transaction) {
      options = { transaction }
    }
    const { app } = this
    const model = app.model.Log

    obj['id'] = app['genId']('LOG')
    return await model
      .create(obj, options)
      .then(d => {
        console.log('d :>>', d)
        return d?.toJSON()
      })
  }
  /**
   * 按id查询日志
   * @param id 主键
   * @return {Promise<any>} 日志
   */
  public async byPk(id) {
    const model = this.ctx.model.Log
    return model.findByPk(id).then(d => d?.toJSON())
  }
}
