"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildCondition = void 0;
const lodash_1 = __importDefault(require("lodash"));
exports.buildCondition = function (alias, fieldName, operator, value, relation, seq) {
    seq++;
    fieldName = lodash_1.default.snakeCase(fieldName);
    switch (operator) {
        case 'eq':
            return {
                clause: `"${alias}"."${fieldName}" = :args${seq}`,
                parameters: { [`args${seq}`]: value }
            };
        case 'like':
            return {
                clause: `"${alias}"."${fieldName}" LIKE :args${seq}`,
                parameters: { [`args${seq}`]: `${value}` }
            };
        case 'i_like':
            return {
                clause: `LOWER("${alias}"."${fieldName}") LIKE :args${seq}`,
                parameters: { [`args${seq}`]: `${String(value).toLowerCase()}` }
            };
        case 'nlike':
            return {
                clause: `"${alias}"."${fieldName}" NOT LIKE :args${seq}`,
                value: { [`args${seq}`]: `${value}` }
            };
        case 'i_nlike':
            return {
                clause: `LOWER("${alias}"."${fieldName}") NOT LIKE :args${seq}`,
                value: { [`args${seq}`]: `${String(value).toLowerCase()}` }
            };
        case 'lt':
            return {
                clause: `"${alias}"."${fieldName}" < :args${seq}`,
                parameters: { [`args${seq}`]: value }
            };
        case 'gt':
            return {
                clause: `"${alias}"."${fieldName}" > :args${seq}`,
                parameters: { [`args${seq}`]: value }
            };
        case 'lte':
            return {
                clause: `"${alias}"."${fieldName}" <= :args${seq}`,
                parameters: { [`args${seq}`]: value }
            };
        case 'gte':
            return {
                clause: `"${alias}"."${fieldName}" >= :args${seq}`,
                parameters: { [`args${seq}`]: value }
            };
        case 'noteq':
            return {
                clause: `"${alias}"."${fieldName}" != :args${seq}`,
                parameters: { [`args${seq}`]: value }
            };
        case 'in':
            const clause = relation
                ? `"${fieldName}"."id" IN (:...args${seq})`
                : `"${alias}"."${fieldName}" IN (:...args${seq})`;
            value = (value === null || value === void 0 ? void 0 : value.length) ? value : [value];
            return {
                clause,
                parameters: { [`args${seq}`]: value }
            };
        case 'notin':
            value = (value === null || value === void 0 ? void 0 : value.length) ? value : [value];
            return {
                clause: `"${alias}"."${fieldName}" NOT IN (:...args${seq})`,
                parameters: { [`args${seq}`]: value }
            };
        case 'notin_with_null':
            value = (value === null || value === void 0 ? void 0 : value.length) ? value : [value];
            return {
                clause: `("${alias}"."${fieldName}" IS NULL OR "${alias}"."${fieldName}" NOT IN (:...args${seq}))`,
                parameters: { [`args${seq}`]: value }
            };
        case 'is_null':
            return {
                clause: `"${alias}"."${fieldName}" IS NULL`
            };
        case 'is_not_null':
            return {
                clause: `"${alias}"."${fieldName}" IS NOT NULL`
            };
        case 'is_false':
            return {
                clause: `"${alias}"."${fieldName}" IS FALSE`
            };
        case 'is_true':
            return {
                clause: `"${alias}"."${fieldName}" IS TRUE`
            };
        case 'is_not_false':
            return {
                clause: `"${alias}"."${fieldName}" IS NOT FALSE`
            };
        case 'is_not_true':
            return {
                clause: `"${alias}"."${fieldName}" IS NOT TRUE`
            };
        case 'is_present':
            return {
                clause: `"${alias}"."${fieldName}" IS PRESENT`
            };
        case 'is_blank':
            return {
                clause: `"${alias}"."${fieldName}" IS BLANK`
            };
        case 'is_empty_num_id':
            return {
                clause: `"${alias}"."${fieldName}" IS EMPTY NUMERIC ID`
            };
        case 'between':
            return {
                clause: `"${alias}"."${fieldName}" BETWEEN  :args${seq}-1 AND :args${seq}-2`,
                parameters: { [`args${seq}-1`]: value[0], [`args${seq}-2`]: value[1] }
            };
    }
};
//# sourceMappingURL=condition-builder.js.map