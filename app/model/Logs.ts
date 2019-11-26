import { Column, Table, } from 'sequelize-typescript';
import {Message} from './Message'
// const moment = require('moment');

@Table({
  modelName: 'logs'
})
class Logs extends Message {

  @Column({
    comment: '点赞数',
  })
  like: number;
};
export default () => Logs;