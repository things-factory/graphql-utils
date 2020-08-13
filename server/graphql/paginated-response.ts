import { ClassType, Field, Int, ObjectType } from 'type-graphql'

export interface IPaginated {
  items: any
  total: number
  hasMore?: boolean
}

export function PaginatedResponse<TItem>(TItemClass: ClassType<TItem>): any {
  // @ObjectType({ isAbstract: true })
  @ObjectType(`Paginated${TItemClass.name}Response`)
  class PaginatedResponseClass {
    @Field(type => [TItemClass])
    items: TItem[]

    @Field(type => Int)
    total: number

    @Field({ nullable: true })
    hasMore?: boolean
  }

  return PaginatedResponseClass
}
