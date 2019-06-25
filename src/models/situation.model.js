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
let Situation = class Situation extends _1.Base {
    constructor(data) {
        super(data);
    }
};
Situation.metadataId = 1001;
__decorate([
    repository_1.property({
        type: 'string',
        description: 'The name of the situation',
    }),
    __metadata("design:type", String)
], Situation.prototype, "name", void 0);
__decorate([
    repository_1.property({
        type: 'string',
        description: 'The version of this situation for audit reasons',
        default: "0.1",
    }),
    __metadata("design:type", String)
], Situation.prototype, "version", void 0);
__decorate([
    repository_1.property({
        type: 'array',
        description: 'The collection of facts that belong to this situation',
        default: [],
        itemType: _1.Fact,
    }),
    __metadata("design:type", Array)
], Situation.prototype, "facts", void 0);
__decorate([
    repository_1.property({
        type: 'string',
        description: 'The description/documentation of the situation',
    }),
    __metadata("design:type", String)
], Situation.prototype, "description", void 0);
Situation = __decorate([
    repository_1.model({
        name: "Situation",
        description: "A situation is an aggregate of facts"
    }),
    __metadata("design:paramtypes", [Object])
], Situation);
exports.Situation = Situation;
//# sourceMappingURL=situation.model.js.map