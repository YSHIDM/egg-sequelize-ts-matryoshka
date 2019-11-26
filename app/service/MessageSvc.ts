import { Service } from 'egg';
// import { Sequelize } from 'sequelize-typescript';

export default class MessageSvc extends Service {

    public async getMessage(id) {
        const model = this.ctx.model.Message;
        return model.findOne({
            where: {
                id
            }
        })
        .then(d => d?.toJSON())
    }
    public async addMessage(obj) {
        const { ctx, app } = this;
        const model = ctx.model.Message;
        obj['id'] = app['genId']('IMG')
        return model.create(obj)
        .then(d => d?.toJSON())
    }
    public async updateMessage(obj) {
        const model = this.ctx.model.Message;
        await model.update(obj, {
            where: {
                id: obj.id
            }
        });
        return model.findByPk(obj.id);
    }
    public async deleteMessage(id) {
        const model = this.ctx.model.Message;
        return model.destroy({
            where: {
                id
            }
        });
    }
}
