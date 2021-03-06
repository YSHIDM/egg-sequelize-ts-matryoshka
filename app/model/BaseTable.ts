import { AutoIncrement, Column, Model, PrimaryKey, Table, CreatedAt, UpdatedAt } from 'sequelize-typescript';
const moment = require('moment');

@Table({
  modelName: 'base_table'
})
export class BaseTable extends Model<BaseTable> {

  @PrimaryKey
  @AutoIncrement
  @Column({
    comment: '信息 id',
  })
  id: string;


  @Column({
    comment: '创建人'
  })
  creator: string;

  @CreatedAt
  @Column({
    field: 'created_at'
  })
  get createdAt(): string {
    return this.getDataValue('createdAt') ? moment(this.getDataValue('createdAt')).format('YYYY-MM-DD HH:mm:ss') : null;
    // return moment(this.createdAt).format('YYYY-MM-DD HH:mm:ss');
  };
  set createdAt(value: string) {
    this.createdAt = value;
  };

  // modifier: string;
  @Column({ comment: '修改人' })
  modifier: string;

  @UpdatedAt
  @Column({
    field: 'updated_at'
  })
  get updatedAt(): Date {
    return this.getDataValue('modifier') ? moment(this.getDataValue('updatedAt')).format('YYYY-MM-DD HH:mm:ss') : null;
  };
  set updatedAt(value: Date) {
    this.setDataValue('updatedAt',value)
  };

};

export default () => BaseTable;