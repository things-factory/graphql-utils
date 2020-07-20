"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertListParams = void 0;
const typeorm_1 = require("typeorm");
const OPERATION_FUNCTION_MAP = {
    eq: value => typeorm_1.Equal(value),
    noteq: value => typeorm_1.Not(typeorm_1.Equal(value)),
    like: value => typeorm_1.Like(value),
    i_like: value => typeorm_1.Raw(alias => `LOWER(${alias}) LIKE '${String(value).toLowerCase()}'`),
    nlike: value => typeorm_1.Not(typeorm_1.Like(value)),
    i_nlike: value => typeorm_1.Raw(alias => `LOWER(${alias}) NOT LIKE '${String(value).toLowerCase()}'`),
    lt: value => typeorm_1.Raw(alias => `${alias} < ${value}`),
    gt: value => typeorm_1.Raw(alias => `${alias} > ${value}`),
    lte: value => typeorm_1.Raw(alias => `${alias} <= ${value}`),
    gte: value => typeorm_1.Raw(alias => `${alias} >= ${value}`),
    in: value => typeorm_1.In(value),
    notin: value => typeorm_1.Not(typeorm_1.In(value)),
    is_null: () => typeorm_1.IsNull(),
    is_not_null: () => typeorm_1.Not(typeorm_1.IsNull()),
    is_false: () => typeorm_1.Raw(alias => `${alias} IS FALSE`),
    in_true: () => typeorm_1.Raw(alias => `${alias} IS TRUE`),
    is_not_true: () => typeorm_1.Raw(alias => `${alias} IS NOT TRUE`),
    is_present: () => typeorm_1.Raw(alias => `${alias} IS PRESENT`),
    is_blank: () => typeorm_1.Raw(alias => `${alias} IS BLANK`),
    is_empty_num_id: () => typeorm_1.Raw(alias => `${alias} IS EMPTY NUMERIC ID`),
    between: value => typeorm_1.Between(value[0], value[1])
};
// function getOperatorFunction({ operator, name, value, dataType }) {
//   switch (operator) {
//     case 'eq':
//       return Equal(value)
//     case 'noteq':
//       return Not(Equal(value))
//     case 'like':
//       return Like(value)
//     case 'nlike':
//       return Not(Like(value))
//     case 'lt':
//       return Raw(alias => `${alias} < ${value}`)
//     case 'gt':
//       return Raw(alias => `${alias} > ${value}`)
//     case 'lte':
//       return Raw(alias => `${alias} <= ${value}`)
//     case 'gte':
//       return Raw(alias => `${alias} >= ${value}`)
//     case 'in':
//       return In(value)
//     case 'notin':
//       return Not(In(value))
//     case 'is_null':
//       return IsNull()
//     case 'is_not_null':
//       return Not(IsNull())
//     case 'is_false':
//       return Raw(alias => `${alias} IS FALSE`)
//     case 'is_true':
//       return Raw(alias => `${alias} IS TRUE`)
//     case 'is_not_false':
//       return Raw(alias => `${alias} IS NOT FALSE`)
//     case 'is_not_true':
//       return Raw(alias => `${alias} IS NOT TRUE`)
//     case 'is_present':
//       return Raw(alias => `${alias} IS PRESENT`)
//     case 'is_blank':
//       return Raw(alias => `${alias} IS BLANK`)
//     case 'is_empty_num_id':
//       return Raw(alias => `${alias} IS EMPTY NUMERIC ID`)
//     case 'between':
//       return Between(value[0], value[1])
//   }
// }
function getOperatorFunction({ operator, name, value, relation }) {
    return OPERATION_FUNCTION_MAP[operator](value);
}
function makePaginationParams(pagination) {
    var jsonParams = {};
    if (pagination) {
        var { page = 0, limit = 0 } = pagination;
        var skip = 0;
        var take = 0;
        if (limit > 0) {
            skip = Math.max(page - 1, 0) * limit;
            take = limit;
            Object.assign(jsonParams, {
                skip,
                take
            });
        }
    }
    return jsonParams;
}
function makeSortingParams(sortings) {
    var jsonParams = {};
    if (sortings) {
        var order = {};
        sortings.forEach(s => {
            order[s.name] = s.desc ? 'DESC' : 'ASC';
        });
        Object.assign(jsonParams, {
            order
        });
    }
    return jsonParams;
}
function makeFilterParams(filters) {
    var jsonParams = {};
    if (filters) {
        var where = {};
        filters.forEach(f => {
            var operationFunc = getOperatorFunction(f);
            where[f.name] = operationFunc;
        });
        Object.assign(jsonParams, { where });
    }
    return jsonParams;
}
function convertListParams(params, domain) {
    var { pagination, filters = [], sortings } = params;
    var jsonParams = {};
    if (domain) {
        filters.push({
            name: 'domain',
            operator: 'eq',
            value: domain
        });
    }
    if (pagination)
        Object.assign(jsonParams, makePaginationParams(pagination));
    if (sortings)
        Object.assign(jsonParams, makeSortingParams(sortings));
    if (filters)
        Object.assign(jsonParams, makeFilterParams(filters));
    return jsonParams;
}
exports.convertListParams = convertListParams;
//# sourceMappingURL=list-params-converter.js.map