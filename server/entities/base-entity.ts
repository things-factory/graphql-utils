import { Field, ID, ObjectType } from 'type-graphql'
import { PrimaryGeneratedColumn } from 'typeorm'

@ObjectType({ isAbstract: true })
export class BaseEntity {
  @Field((type) => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string
}
