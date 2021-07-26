import { Service } from 'egg'
import ExportLog from '../model/Log'
import { Transaction } from 'sequelize'

export default class LogSvc extends Service {
  model: ReturnType<typeof ExportLog>;
  // (...args: any) => any
  constructor(ctx) {
    super(ctx)
    this.model = this.ctx.model.Log
  }
  /**
   * 批量新增
   * @param objArray 数据列表
   */
  public async batchAdd(objArray) {
    objArray = objArray.map(obj => {
      obj.id = this.app['genId']('LOG')
      return obj
    })
    return await this.model.bulkCreate(objArray)
      .then(data => data.map(d => d.toJSON()))
  }
  /**
   * 添加日志
   * @param obj 日志
   * @param transaction 事务
   * @return {Promise<any>} 日志
   */
  public async addLog(obj, transaction?: Transaction) {
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
   * 修改日志
   * @param obj 日志
   * @return {Promise<any>} 日志
   */
  public async updateLog(obj, transaction?: Transaction) {
    const model = this.app.model.Log
    console.log('model.update :>>', model.update)
    // 输出 model.update 方法
    await model.update(obj, {
      where: {
        id: obj.id,
      },
      transaction,
    })
    return this.byPk(obj.id)
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
  /**
   * 获取一条日志
   * @param where 条件
   * @return {Promise<any>} 日志
   */
  public async getLog(where) {
    where = where?.where ?? where
    const model = this.ctx.model.Log
    return model.findOne({ where }).then(d => d?.toJSON())
  }
  /**
   * 获取日志列表
   * @param where 条件
   * @return {Promise<any>} 日志列表
   */
  public async getLogList(where) {
    where = where?.where ?? where
    const model = this.ctx.model.Log
    return model.findAll({ where }).then(ds => ds.map(d => d.toJSON()))
  }
  /**
   * 删除日志
   * @param where 条件
   * @return {Promise<void>}
   */
  public async deleteLog(where, transaction?: Transaction) {
    where = where?.where ?? where
    const model = this.ctx.model.Log
    return model.destroy({
      where,
      transaction,
    })
  }
}
