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
exports.ListParam = void 0;
const type_graphql_1 = require("type-graphql");
const filter_1 = require("./filter");
const pagination_1 = require("./pagination");
const sorting_1 = require("./sorting");
let ListParam = class ListParam {
};
__decorate([
    type_graphql_1.Field(type => [filter_1.Filter], { nullable: 'itemsAndList' }),
    __metadata("design:type", Array)
], ListParam.prototype, "filters", void 0);
__decorate([
    type_graphql_1.Field(type => pagination_1.Pagination, { nullable: true }),
    __metadata("design:type", pagination_1.Pagination)
], ListParam.prototype, "pagination", void 0);
__decorate([
    type_graphql_1.Field(type => [sorting_1.Sorting], { nullable: 'itemsAndList' }),
    __metadata("design:type", Array)
], ListParam.prototype, "sortings", void 0);
ListParam = __decorate([
    type_graphql_1.ArgsType()
], ListParam);
exports.ListParam = ListParam;
//# sourceMappingURL=list-param.js.map