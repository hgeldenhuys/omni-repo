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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let RuleController = class RuleController {
    constructor(ruleRepository) {
        this.ruleRepository = ruleRepository;
    }
    async create(rule) {
        return await this.ruleRepository.create(rule);
    }
    async count(where) {
        return await this.ruleRepository.count(where);
    }
    async find(filter) {
        return await this.ruleRepository.find(filter);
    }
    async updateAll(rule, where) {
        return await this.ruleRepository.updateAll(rule, where);
    }
    async findById(id) {
        return await this.ruleRepository.findById(id);
    }
    async updateById(id, rule) {
        await this.ruleRepository.updateById(id, rule);
    }
    async replaceById(id, rule) {
        await this.ruleRepository.replaceById(id, rule);
    }
    async deleteById(id) {
        await this.ruleRepository.deleteById(id);
    }
};
__decorate([
    rest_1.post('/rules', {
        responses: {
            '200': {
                description: 'Rule model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.Rule } } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Rule]),
    __metadata("design:returntype", Promise)
], RuleController.prototype, "create", null);
__decorate([
    rest_1.get('/rules/count', {
        responses: {
            '200': {
                description: 'Rule model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Rule))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RuleController.prototype, "count", null);
__decorate([
    rest_1.get('/rules', {
        responses: {
            '200': {
                description: 'Array of Rule model instances',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: { 'x-ts-type': models_1.Rule } },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Rule))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RuleController.prototype, "find", null);
__decorate([
    rest_1.patch('/rules', {
        responses: {
            '200': {
                description: 'Rule PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Rule))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Rule, Object]),
    __metadata("design:returntype", Promise)
], RuleController.prototype, "updateAll", null);
__decorate([
    rest_1.get('/rules/{id}', {
        responses: {
            '200': {
                description: 'Rule model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.Rule } } },
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RuleController.prototype, "findById", null);
__decorate([
    rest_1.patch('/rules/{id}', {
        responses: {
            '204': {
                description: 'Rule PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, models_1.Rule]),
    __metadata("design:returntype", Promise)
], RuleController.prototype, "updateById", null);
__decorate([
    rest_1.put('/rules/{id}', {
        responses: {
            '204': {
                description: 'Rule PUT success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, models_1.Rule]),
    __metadata("design:returntype", Promise)
], RuleController.prototype, "replaceById", null);
__decorate([
    rest_1.del('/rules/{id}', {
        responses: {
            '204': {
                description: 'Rule DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RuleController.prototype, "deleteById", null);
RuleController = __decorate([
    __param(0, repository_1.repository(repositories_1.RuleRepository)),
    __metadata("design:paramtypes", [repositories_1.RuleRepository])
], RuleController);
exports.RuleController = RuleController;
//# sourceMappingURL=rule.controller.js.map