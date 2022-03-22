import { Service } from 'egg';
// import { Sequelize } from 'sequelize-typescript';

export default class LogsSvc extends Service {
    public async addLogs(obj, transaction?) {
        let options = {};
        if (transaction) {
            options = { transaction }
        }
        const { ctx, app } = this;
        const model = ctx.model.Log;
        obj['id'] = app['genId']('IMG')
        return await model.create(obj, options).then(d => d?.toJSON());
    }
    public async updateLogs(obj, transaction?) {
        const model = this.ctx.model.Log;
        await model.update(obj, {
            where: {
                id: obj.id,
            },
            transaction,
        });
        return await this.byPk(obj.id);
    }
    /**
     * 按id查询日志
     * @param id 主键
     */
    public async byPk(id) {
        const model = this.ctx.model.Log;
        return await model.findByPk(id).then(d => d?.toJSON());
    }
    /**
     * 获取一条日志
     * @param where 条件
     */
    public async getLogs(where) {
        where = where?.where ?? where
        const model = this.ctx.model.Log;
        return await model.findOne({ where }).then(d => d?.toJSON());
    }
    /**
     * 获取日志列表
     * @param where 条件
     */
    public async getLogsList(where) {
        where = where?.where ?? where
        const model = this.ctx.model.Log;
        return await model.findAll({ where }).then(ds => ds.map(d => d.toJSON()));
    }
    /**
     * 删除日志
     * @param where 条件
     * @param transaction 事务
     */
    public async deleteLogs(where, transaction?) {
        where = where?.where ?? where
        const model = this.ctx.model.Log;
        return await model.destroy({
            where,
            transaction,
        });
    }
}
