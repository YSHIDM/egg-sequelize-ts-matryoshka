import { Controller } from 'egg'

export default class HomeController extends Controller {
  /**
   * 首页
   * @return {Promise<any>} 首页
   */
  public async index() {
    const { ctx } = this

    await ctx.render('index', {
      title: '我是首页',
    })
  }
}
