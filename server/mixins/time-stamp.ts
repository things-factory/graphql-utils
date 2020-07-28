import { Field, ObjectType } from 'type-graphql'
import { CreateDateColumn, UpdateDateColumn } from 'typeorm'

export type Constructor<T = {}> = new (...args: any[]) => T

export function TimeStamp<TBase extends Constructor>(Base: TBase) {
  @ObjectType({ isAbstract: true })
  abstract class AbstractBase extends Base {
    @Field()
    @CreateDateColumn()
    createdAt?: Date

    @Field()
    @UpdateDateColumn()
    updatedAt?: Date
  }

  return AbstractBase
}
