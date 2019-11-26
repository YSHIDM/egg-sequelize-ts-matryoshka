// @ts-ignore
import * as STATUS_CODE from './statusCode';
module.exports = {
    getInfo : (code?:number, msg:string = '', obj?:object) => {
        const rescode = code || STATUS_CODE['errCode'];
        const resmessage = msg || STATUS_CODE[rescode] || STATUS_CODE['errMsg'];
        return {rescode, resmessage, data: obj};
    }
};
