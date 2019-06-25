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
let Fact = class Fact {
};
__decorate([
    repository_1.property({
        type: 'string',
        description: 'The path on the JSON where this fact should be recorded',
    }),
    __metadata("design:type", String)
], Fact.prototype, "path", void 0);
__decorate([
    repository_1.property({
        type: 'object',
        description: 'The rule that this fact applies to',
        itemType: _1.Rule,
    }),
    __metadata("design:type", _1.Rule)
], Fact.prototype, "rule", void 0);
__decorate([
    repository_1.property({
        type: 'object',
        description: 'The paths that the rule needs to translate on the Json BOM',
        itemType: {}
    }),
    __metadata("design:type", Object)
], Fact.prototype, "pathMapping", void 0);
Fact = __decorate([
    repository_1.model({
        name: "Fact",
        description: "Facts are either known or stated. They also give info to the rule on where to find the other causal facts for this fact to be realized"
    })
], Fact);
exports.Fact = Fact;
//# sourceMappingURL=fact.model.js.map