class MessageConnector {
    constructor(ctx) {
        this.ctx = ctx;
        this.service = this.ctx.service.messageSvc;
    }
    /**
     * 新建信息
     * @param {*} obj 信息
     */
    async addMessage(obj) {
        
        return this.ctx.helper.getInfo(200, null, await this.service.addMessage(obj));
    }
    /**
     * 查询信息
     * @param {*} id 信息id
     */
    async getMessage(id) {
        
        return this.ctx.helper.getInfo(200, null, await this.service.getMessage(id));
    }
    /**
     * 修改信息
     * @param {*} obj 信息
     */
    async updateMessage(obj) {
        
        return this.ctx.helper.getInfo(200, null, await this.service.updateMessage(obj));
    }
    /**
     * 删除信息
     * @param {*} id 信息 id
     */
    async deleteMessage(obj) {
        
        return this.ctx.helper.getInfo(200, null, await this.service.deleteMessage(id));
    }
}

module.exports = MessageConnector;