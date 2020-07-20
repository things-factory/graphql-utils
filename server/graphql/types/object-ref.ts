import { ObjectType, Field } from 'type-graphql'

@ObjectType()
export class ObjectRef {
  @Field()
  id: string
  @Field({ nullable: true })
  name?: string
  @Field({ nullable: true })
  description?: string
}
