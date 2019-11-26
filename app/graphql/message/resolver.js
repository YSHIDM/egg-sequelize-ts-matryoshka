'use strict';

module.exports = {
    Mutation: {
        addMessage(root, { obj }, ctx) {
            console.log('obj', obj)
            return ctx.connector.message.addMessage(obj);
        },
        updateMessage(root, { obj }, ctx) {
            return ctx.connector.message.updateMessage(obj);
        },
        deleteMessage(root, { id }, ctx) {
            return ctx.connector.message.deleteMessage(id);
        }
    },
    Query: {
        getMessage(root, { id }, ctx) {
            console.log('id', id)
            return ctx.connector.message.getMessage(id);
        },
    }
};
