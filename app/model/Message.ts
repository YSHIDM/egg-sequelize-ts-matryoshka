import { Column, DataType, Table } from 'sequelize-typescript'
const { STRING } = DataType
import { BaseTable } from './BaseTable'

@Table({
  modelName: 'message',
})
class Message extends BaseTable {

  @Column({
    type: STRING(50),
    comment: '信息标题',
  })
  title: string;

  @Column({
    type: STRING(200),
    comment: '信息内容',
  })
  content: string;
}

const MessageModel = () => Message
export {
  Message,
  MessageModel,
}
