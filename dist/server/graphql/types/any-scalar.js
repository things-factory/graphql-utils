"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnyScalarType = void 0;
const graphql_1 = require("graphql");
exports.AnyScalarType = new graphql_1.GraphQLScalarType({
    name: 'AnyScalar',
    description: 'Any Scalar type (String, Boolean, Int, Float)',
    serialize(value) {
        // Implement your own behavior here by setting the 'result' variable
        return value;
    },
    parseValue(value) {
        // Implement your own behavior here by setting the 'result' variable
        return value;
    },
    parseLiteral(ast) {
        switch (ast.kind) {
            case graphql_1.Kind.INT:
                return parseInt(ast.value);
            case graphql_1.Kind.FLOAT:
                return parseFloat(ast.value);
            case graphql_1.Kind.BOOLEAN:
                return ast.value;
            case graphql_1.Kind.STRING:
                return ast.value;
            default:
                return null;
        }
    }
});
//# sourceMappingURL=any-scalar.js.map