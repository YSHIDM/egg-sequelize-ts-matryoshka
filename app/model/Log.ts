import { Column, DataType, Table } from 'sequelize-typescript'
import { Message } from './Message'
const { STRING, INTEGER } = DataType

// const moment = require('moment');

@Table({
  modelName: 'log',
  tableName: 'log',
})
class Log extends Message {


  @Column({
    type: INTEGER,
    comment: '点赞数',
  })
  public favorite: number;


  @Column({
    type: STRING(50),
    comment: '描述',
  })
  public desc: string;


}


export default () => Log
