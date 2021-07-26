import { Optional } from 'sequelize'
import { Column, Model, PrimaryKey, Table, CreatedAt, UpdatedAt, DataType } from 'sequelize-typescript'
const { STRING, DATE } = DataType

interface BaseTableAttributes {
  id: number
  creator: string
  createdAt: Date
  modifier: string
  updatedAt: Date
}

type BaseTableCreationAttributes = Optional<BaseTableAttributes, 'id'>
// abstract
@Table({
  modelName: 'base_table',
})
class BaseTable extends Model<BaseTableAttributes, BaseTableCreationAttributes> {

  @PrimaryKey
  @Column({
    type: STRING(25),
    comment: '主键',
  })
  public id: string

  @Column({
    type: STRING(50),
    comment: '创建人',
  })
  public creator: string

  @CreatedAt
  @Column({
    type: DATE,
    field: 'created_at',
    comment: '创建时间',
  })
  public createdAt: Date

  @Column({
    type: STRING(50),
    comment: '修改人',
  })
  public modifier: string

  @UpdatedAt
  @Column({
    type: DATE,
    field: 'updated_at',
    comment: '修改时间',
  })
  public updatedAt: Date
}
const BaseTableModel = () => BaseTable
export {
  BaseTable,
  BaseTableModel,
}
