"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("type-graphql");
function Partial(BaseClass) {
    const metadata = global.TypeGraphQLMetadataStorage;
    let PartialClass = class PartialClass extends BaseClass {
    };
    PartialClass = __decorate([
        type_graphql_1.ObjectType({ isAbstract: true }),
        type_graphql_1.InputType({ isAbstract: true })
    ], PartialClass);
    // Copy relevant fields and create a nullable version on the new type
    const fields = metadata.fields.filter(f => f.target === BaseClass || BaseClass.prototype instanceof f.target);
    fields.forEach(field => {
        const newField = {
            ...field,
            typeOptions: { ...field.typeOptions, nullable: true },
            target: PartialClass,
        };
        metadata.fields.push(newField);
    });
    return PartialClass;
}
exports.default = Partial;
//# sourceMappingURL=partial.js.map