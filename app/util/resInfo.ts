import STATUS_CODE from './statusCode'
module.exports = {
  getInfo: (code?: number, msg = '', obj?: unknown) => {
    const rescode = code || STATUS_CODE.errCode
    const resmessage = msg || STATUS_CODE.errMsg
    return { rescode, resmessage, data: obj }
  },
}
