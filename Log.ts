import { Column, DataType, Model, Table } from 'sequelize-typescript'
const { STRING, NUMBER } = DataType
// import { Message } from './Message'
// const moment = require('moment');

@Table({
  modelName: 'log',
})
class Log extends Model<Log> {

  @Column({
    type: NUMBER,
    comment: '点赞数',
  })
  public favorite: number;

  @Column({
    type: STRING(50),
    comment: '描述',
  })
  public desc: string;
}
export default Log
