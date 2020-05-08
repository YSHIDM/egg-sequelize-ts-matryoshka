import { Service } from 'egg';

export default class LogsSvc extends Service {

    public async addLogs(obj, transaction?) {
        let options = {};
        if (transaction) {
            options = { transaction }
        }
        const { ctx, app } = this;
        const model = ctx.model.Logs;
        obj['id'] = app['genId']('IMG')
        const logs = await model.create(obj, options).then(d => d?.toJSON());
        return logs;
    }
    public async updateLogs(obj, transaction?) {
        let options = {};
        if (transaction) {
            options = { transaction }
        }
        const model = this.ctx.model.Logs;
        await model.update(obj, {
            where: {
                id: obj.id
            }
        }, options);
        return this.byPk(obj.id);
    }
    /**
     * 按id查询日志
     * @param id 主键
     */
    public async byPk(id) {
        const model = this.ctx.model.Logs;
        return model.findByPk(id).then(d => d?.toJSON());
    }
    /**
     * 获取一条日志
     * @param where 条件
     */
    public async getLogs(where) {
        where = where?.where ?? where
        const model = this.ctx.model.Logs;
        return model.findOne({ where }).then(d => d?.toJSON());
    }
    /**
     * 获取日志列表
     * @param where 条件
     */
    public async getLogsList(where) {
        where = where?.where ?? where
        const model = this.ctx.model.Logs;
        return model.findAll({ where }).then(ds => ds.map(d => d.toJSON()));
    }
    /**
     * 删除日志
     * @param where 条件
     * @param transaction 事务
     */
    public async deleteLogs(where, transaction?) {
        where = where?.where ?? where
        let options = {};
        if (transaction) {
            options = { transaction }
        }
        const model = this.ctx.model.Logs;
        const logs = model.destroy({
            where
        }, options);
        return logs;
    }
}
