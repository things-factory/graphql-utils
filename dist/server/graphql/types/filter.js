"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Filter = void 0;
const any_scalar_1 = require("./any-scalar");
const type_graphql_1 = require("type-graphql");
let Filter = class Filter {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Filter.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true, defaultValue: 'eq' }),
    __metadata("design:type", String)
], Filter.prototype, "operator", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", Boolean)
], Filter.prototype, "relation", void 0);
__decorate([
    type_graphql_1.Field(type => any_scalar_1.AnyScalarType),
    __metadata("design:type", Object)
], Filter.prototype, "value", void 0);
Filter = __decorate([
    type_graphql_1.InputType()
], Filter);
exports.Filter = Filter;
//# sourceMappingURL=filter.js.map