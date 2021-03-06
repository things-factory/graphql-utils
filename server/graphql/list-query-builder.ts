import { Context } from 'koa'
import { buildCondition } from './condition-builder'
import { ListParam } from './types'

export const buildQuery = function (queryBuilder: any, params: ListParam, context: Context, domainRef: Boolean = true) {
  const filters = params.filters
  const pagination = params.pagination
  const sortings = params.sortings
  const domainId = context?.state?.domainEntity?.id

  if (filters && filters.length > 0) {
    filters.forEach(filter => {
      const condition = buildCondition(
        queryBuilder.alias,
        filter.name,
        filter.operator,
        filter.value,
        filter.relation,
        Object.keys(queryBuilder.getParameters()).length
      )

      queryBuilder.andWhere(condition.clause)
      if (condition.parameters) queryBuilder.setParameters(condition.parameters)
    })
  }

  if (domainRef && domainId) {
    queryBuilder.andWhere(`"${queryBuilder.alias}"."domain_id" = :domainId`, { domainId })
  }

  if (pagination && pagination.page > 0 && pagination.limit > 0) {
    queryBuilder.skip(pagination.limit * (pagination.page - 1))
    queryBuilder.take(pagination.limit)
  }

  if (sortings && sortings.length > 0) {
    sortings.forEach((sorting, index) => {
      if (index === 0) {
        queryBuilder.orderBy(`${queryBuilder.alias}.${sorting.name}`, sorting.desc ? 'DESC' : 'ASC')
      } else {
        queryBuilder.addOrderBy(`${queryBuilder.alias}.${sorting.name}`, sorting.desc ? 'DESC' : 'ASC')
      }
    })
  }
}
