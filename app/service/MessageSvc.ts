import { Service } from 'egg'
// import { Sequelize } from 'sequelize-typescript';

export default class MessageSvc extends Service {
  /**
   * 按 id 获取信息
   * @param id 主键
   * @return {Promise<any>} 信息
   */
  public async getMessage(id) {
    const model = this.ctx.model.Message
    return model.findOne({
      where: {
        id,
      },
    })
      .then(d => d?.toJSON())
  }
  /**
   * 保存信息
   * @param obj 信息
   * @return {Promise<any>} 信息
   */
  public async addMessage(obj) {
    const { ctx, app } = this
    const model = ctx.model.Message
    obj['id'] = app['genId']('IMG')
    return model.create(obj)
      .then(d => d?.toJSON())
  }
  /**
   * 修改信息
   * @param obj 信息
   * @return {Promise<any>} 信息
   */
  public async updateMessage(obj) {
    const model = this.ctx.model.Message
    await model.update(obj, {
      where: {
        id: obj.id,
      },
    })
    return model.findByPk(obj.id)
  }
  /**
   * 按主键删除信息
   * @param id 主键
   * @return {Promise<any>} 删数量
   */
  public async deleteMessage(id) {
    const model = this.ctx.model.Message
    return model.destroy({
      where: {
        id,
      },
    })
  }
}
