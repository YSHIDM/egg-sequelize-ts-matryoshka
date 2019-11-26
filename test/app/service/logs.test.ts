import { app } from 'egg-mock/bootstrap'
import * as assert from 'assert'
// import * as mock from 'egg-mock'


describe('get()', () => {

    it('logs', async () => {
        // 创建 ctx
        const ctx = app.mockContext();
        // 通过 ctx 访问到 service.user
        const logs = await ctx.service.logsSvc.getLogs('1')
        console.log(logs)
        assert(logs);
    });
});
