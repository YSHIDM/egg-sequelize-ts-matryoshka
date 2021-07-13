import * as SHORT_ID from 'shortid'
import { format } from 'util'

module.exports = {
  /**
   * 数据库主键生成器
   * @param prefix 前缀
   * @return {string} id
   */
  genId(prefix = '') {
    return format('%s%s', prefix, SHORT_ID.generate())
  },
}
