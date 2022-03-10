import { Service } from 'egg';
// import { Sequelize } from 'sequelize-typescript';

export default class LogsSvc extends Service {

    public async getLogs(id) {
        const model = this.ctx.model.Logs;
        const logs = model.findOne({
            where: {
                id
            }
        }).then(d => d?.toJSON());
        return logs;
    }
    public async addLogs(obj) {
        const { ctx, app } = this;
        const model = ctx.model.Logs;
        obj['id'] = app['genId']('IMG')
        const logs = await model.create(obj).then(d => d?.toJSON());
        return logs;
    }
    public async updateLogs(obj) {
        const model = this.ctx.model.Logs;
        await model.update(obj, {
            where: {
                id: obj.id
            }
        });
        return model.findByPk(obj.id).then(d=>d?.toJSON());
    }
    public async deleteLogs(id) {
        const model = this.ctx.model.Logs;
        const logs = model.destroy({
            where: {
                id
            }
        });
        return logs;
    }
    public async find(obj) {
        const model = this.ctx.model.Logs;
        const logs = model.findAll({
            where: {
                id:obj.ids
            }
        }).then(ds=>ds.map(d=>d.toJSON()));
        return logs;
    }
}
