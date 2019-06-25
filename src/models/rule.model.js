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
const repository_1 = require("@loopback/repository");
const _1 = require(".");
let Rule = class Rule extends _1.Base {
    constructor(data) {
        super(data);
    }
};
Rule.metadataId = 1001;
__decorate([
    repository_1.property({
        type: 'string',
        description: 'Rule name',
    }),
    __metadata("design:type", String)
], Rule.prototype, "name", void 0);
__decorate([
    repository_1.property({
        type: 'string',
        description: 'The documentation describing this business rule',
    }),
    __metadata("design:type", String)
], Rule.prototype, "description", void 0);
__decorate([
    repository_1.property({
        type: 'string',
        description: 'For display purposes',
    }),
    __metadata("design:type", String)
], Rule.prototype, "label", void 0);
__decorate([
    repository_1.property({
        type: 'string',
        description: 'For known facts, supply a sample value that will be included in the generation of a sample JSON BOM',
    }),
    __metadata("design:type", String)
], Rule.prototype, "sampleValue", void 0);
__decorate([
    repository_1.property({
        type: 'string',
        description: 'A simple JS expression that expresses this rule',
        default: undefined,
    }),
    __metadata("design:type", String)
], Rule.prototype, "statedAs", void 0);
__decorate([
    repository_1.property({
        type: 'string',
        description: 'Describes the data type. Can be: Unknown, String, Integer, Long, Boolean, Date, Decimal, Enum, List, Object',
    }),
    __metadata("design:type", String)
], Rule.prototype, "dataType", void 0);
Rule = __decorate([
    repository_1.model({
        description: "A business rule definition"
    }),
    __metadata("design:paramtypes", [Object])
], Rule);
exports.Rule = Rule;
//# sourceMappingURL=rule.model.js.map