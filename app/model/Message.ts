import { Column, Table, CreatedAt, UpdatedAt } from 'sequelize-typescript';
const moment = require('moment');
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

  @CreatedAt
  @Column({
    field: 'created_at'
  })
  get createdAt(): string{
    return moment(this.getDataValue('createdAt')).format('YYYY-MM-DD HH:mm:ss');
  };
  set createdAt(value: string) {
    this.setDataValue('createdAt', value);
  };

  // modifier: string;
  @Column({ comment: '修改人' })
  modifier:string;

  @UpdatedAt
  @Column({
    field: 'updated_at'
  })
  get updatedAt(): Date{
    return moment(this.getDataValue('updatedAt')).format('YYYY-MM-DD HH:mm:ss');
  };
  set updatedAt(value: Date) {
    this.setDataValue('updatedAt', value);
  };
  
};

export default () => Message;