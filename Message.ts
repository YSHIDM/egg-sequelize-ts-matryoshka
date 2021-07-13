import { Column, DataType, Model, Table } from 'sequelize-typescript'
const { STRING } = DataType
// import { BaseTable } from './BaseTable'

@Table({
  modelName: 'message',
})
export class Message extends Model {

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

export default Message
