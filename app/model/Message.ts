import { Column, Table } from 'sequelize-typescript';
// const moment = require('moment');
import {BaseTable} from './BaseTable'

@Table({
  modelName: 'message'
})
export class Message extends BaseTable {

  @Column({
    comment: '信息标题',
  })
  title: string;

  @Column({
    comment: '信息内容'
  })
  content: string;

  @Column({
    comment: '创建人'
  })
  creator: string;

  
};

export default () => Message;