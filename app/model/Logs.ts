import { Column, Table } from 'sequelize-typescript';
import { Message } from './Message'
// const moment = require('moment');

@Table({
  modelName: 'logs'
})
class Logs extends Message {

  @Column({
    comment: '点赞数',
  })
  favorite: number;
  @Column({
    comment: '点赞数',
  })
  desc: string;
};
export default Logs;