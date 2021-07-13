import * as fs from 'fs'
import * as path from 'path'
import * as util from 'util'
import * as gm from 'gm'
gm.prototype.writePromise = util.promisify(gm.prototype.write)

module.exports = {
  /**
   * 按临界值压缩上传图片,移动至存储位置,并返回文件大小
   * @param criticalSize 图片压缩临界大小
   * @param oldPath 旧地址
   * @param newPath 新地址
   */
  renameAndGetSize: async (criticalSize: number, oldPath: string, newPath: string) => {
    const promises = fs.promises
    /**
     * 递归创建文件存储位置
     */
    const storePath = path.dirname(newPath)
    await promises.mkdir(storePath, { recursive: true })

    const size = (await promises.stat(oldPath)).size
    if (size > criticalSize) { // 缓存自动删除,这里没有处理
      await gm(oldPath)
        .setFormat('JPEG')
        .quality(20) // 设置压缩质量: 0-100
        .strip()
        .autoOrient()
        .writePromise(newPath)
      return (await promises.stat(newPath)).size
    }
    // 移动文件
    await promises.rename(oldPath, newPath)
    return size

  },
  exists: async filePath => util.promisify(fs.exists)(filePath),
}
