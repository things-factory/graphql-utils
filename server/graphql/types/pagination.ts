import { Field, InputType, Int } from 'type-graphql'

@InputType()
export class Pagination {
  @Field(type => Int)
  page: number
  @Field(type => Int)
  limit: number
}
